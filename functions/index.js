/**
 * cloud function은 진짜 간단한 로직만 해야겠다
 * 특히 trigger는 간단한 로직만 해야겠음
 */
'use strict';

const admin = require('firebase-admin');
const functions = require('firebase-functions');
// const errorhandler = require('errorhandler');
const Promise = require('bluebird');
const moment = require('moment');
const delay = require('delay');

const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});

const app = express();

var envPath, serviceAccount, projectConfig;
if (process.env.NODE_ENV === "development") {
	envPath = '../config/dev/.dev.env';
	require('dotenv').config({path: envPath});
	console.log("FIREBASE_SERVICE_ACCOUNT: " + process.env.FIREBASE_SERVICE_ACCOUNT);
	console.log("FIREBASE_WEB_CONFIG: " + process.env.FIREBASE_WEB_CONFIG);

	let ENV_FLAG = process.env.ENV_FLAG;
	serviceAccount = require(`../config/${ENV_FLAG}/${process.env.FIREBASE_SERVICE_ACCOUNT}`);
	projectConfig = require(`../config/${ENV_FLAG}/${process.env.FIREBASE_WEB_CONFIG}`);

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: projectConfig.databaseURL
	});

	console.log('process.env.NODE_ENV == ' + process.env.NODE_ENV);
	console.log(`process.env.NAKAMA_*: ${JSON.stringify({
		NAKAMA_SERVER_KEY: process.env.NAKAMA_SERVER_KEY,
		NAKAMA_HOST: process.env.NAKAMA_HOST,
		NAKAMA_PORT: process.env.NAKAMA_PORT
	})}`);
	console.log('Development Mode');
} else {	// alpha-test, production
	admin.initializeApp();
	console.log('Production Mode');
}

const nakama = require('./nakama');
const FUNCTIONS_CONFIG = functions.config();
console.log(`FUNCTIONS_CONFIG: ${JSON.stringify(FUNCTIONS_CONFIG)}`);

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const validateFirebaseIdToken = (req, res, next) => {
	console.log('Check if request is authorized with Firebase ID token');

	if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
		!(req.cookies && req.cookies.__session)) {
		console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
			'Make sure you authorize your request by providing the following HTTP header:',
			'Authorization: Bearer <Firebase ID Token>',
			'or by passing a "__session" cookie.');
		res.status(403).send('Unauthorized');
		return;
	}

	let idToken;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
		console.log('Found "Authorization" header');
		// Read the ID Token from the Authorization header.
		idToken = req.headers.authorization.split('Bearer ')[1];
	} else if (req.cookies) {
		console.log('Found "__session" cookie');
		// Read the ID Token from cookie.
		idToken = req.cookies.__session;
	} else {
		// No cookie
		res.status(403).send('Unauthorized');
		return;
	}
	return admin.auth().verifyIdToken(idToken).then((decodedIdToken) => {
		console.log('ID Token correctly decoded', decodedIdToken);
		req.user = decodedIdToken;
		return next();
	}).catch((error) => {
		console.error('Error while verifying Firebase ID token:', error);
		res.status(403).send('Unauthorized');
	});
};

app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);

app.get('/hello', (req, res) => {
	let name = req.user ? "World" : "How can you access?";
	res.status(200).send(`Hello? ${name}`);
});

/**
 * 회원가입시 기본정보 셋팅
 * user { uid, displayName, email, photoURL, emailVerified, phoneNumber }
 * @type {CloudFunction<UserRecord>}
 */
exports.signupTrigger = functions.auth.user().onCreate((event, context) => {
	let user = event;
	let date = moment().utc().format();

	let ref = admin.database().ref('/user').child(user.uid);

	return ref.once("value").then((snapshot) => {
		if (snapshot.exists()) {
			let log = `signupTrigger():  Exist User ${user.uid}`;
			console.warn(log);
			return Promise.reject(log);
		} else {
			return Promise.resolve();
		}
	}).then(() => {
		return ref.set({
			id: user.uid,
			type: "public",		// 유저별 권한 - 조정 필요
			email: user.email,
			userStatus: 1,
			nickname: "",
			updatedAt: date,
			voteCount: 0,
			friendCount: 0,
			mobilePhone: "",
			gender: "",
			birthday: "",
			baseLocation: {}
		});
	}).then(newUserRef => {
		let newUserPropertyRef = admin.database().ref('/userProperty').child(user.uid);

		return newUserPropertyRef.set({
			"level": 1,
			"exp": 0,
			"ruby": 0,
			"gold": 0,
			"status": {
				"total": {
					"eatenUser": 0,
					"eatenPixel": 0,
					"score": 0,
					"playCount": 0,
					"survivalTime": 0
				},
				"best": {
					"ranking": 0,
					"eatenUser": 0,
					"eatenPixel": 0,
					"score": 0,
					"playCount": 0,
					"survivalTime": 0
				}
			}
		});
	}).then(newUserPropertyRef => {
		let userCountRef = admin.database().ref("saving-data/count/user");
		let log = `signupTrigger():  Success create ${user.uid}`;
		console.log(log);

		return userCountRef.transaction(function (current_value) {
			let userCount = (current_value || 0) + 1;
			return userCount;
		});
	}).catch(err => {
		console.error(err);
	});
});

/**
 * 구현중
 * @type {CloudFunction<UserRecord>}
 */
exports.deleteUserTrigger = functions.auth.user().onDelete((event, context) => {
	let user = event;
	let ref = admin.database().ref('/user').child(user.uid);

	return ref.once("value").then((snapshot) => {
		if (!snapshot.exists()) {
			let log = `deleteUserTrigger():  User doesn't exist`;
			console.warn(log);
			return Promise.reject(log);
		} else {
			return Promise.resolve();
		}
	}).then(() => {
		if (process.env.NODE_ENV && (process.env.NODE_ENV === "development")) {
			return admin.database().ref('/user').child(user.uid).remove();
		} else {	// production mode
			return admin.database().ref('/user').child(user.uid).update({
				userStatus: -1
			});
		}
	}).then(() => {
		let log = `deleteUserTrigger():  Success delete ${user.uid} - set userStatus as -1`;
		console.log(log);
		return Promise.resolve(log);
	}).catch(err => {
		console.error(err);
	});

	// nakama-js에는 deleteUser가 없다
});

/**
 * 구현중
 * nickname 업데이트시 운영서버(nakama)에 자동 업데이트함
 * @type {CloudFunction<DeltaSnapshot>}
 */
exports.updateNicknameTrigger = functions.database.ref('/user/{userId}/nickname').onUpdate((change, context) => {
	let client = nakama.getNakamaClient();
	let userId;
	if (!context.params.userId) {
		userId = change.after.ref.parent.key;
	} else {
		userId = context.params.userId;
	}

	let newNickname = change.after.val();

	console.log(`updateNicknameTrigger(): options ${JSON.stringify({
		userId: userId,
		newNickname: newNickname
	})}`);

	// 클라이언트에서 닉네임 중복체크를 한 후 unique한 nickname이 와야함
	// 1. nakama server에서 userId에 해당하는 유저가 존재하는지 확인
	// 2. 해당 유저가 존재하는 경우 updateAccount 실행
	// 3. 해당 유저가 존재하지 않는 경우 getNakamaSession(create=true) 실행
	return nakama.getNakamaSession(userId, newNickname).then((session) => {
		// nakama server에서 DB에 처리가 될 때 까지 시간을 지연
		return delay(1000, session);
	}).then(session => {
		return client.updateAccount(session, {
			// id: userId,		id는 변경되지 않는다
			username: newNickname,
			display_name: userId		// 대신 fbuser.uid를 display_name에 삽입함
		});
	}).then((result) => {
		let log = `updateNicknameTrigger():  Success update ${userId} - set nickname as ${newNickname} \n`;
		log += JSON.stringify(result);

		console.log(log);
		return Promise.resolve(log);
	}).catch(err => {
		console.error(err);
	});
});

// This HTTPS endpoint can only be accessed by your Firebase Users.
// Requests need to be authorized by providing an `Authorization` HTTP header
// with value `Bearer <Firebase ID Token>`.
exports.api = functions.https.onRequest(app);

// error handling
// if (process.env.NODE_ENV === "development") {
// 	app.use(errorhandler({
// 		log: (err, str, req) => {
// 			var title = 'Error in ' + req.method + ' ' + req.url;
// 			console.error(title, err);
// 		}
// 	}));
// } else {	// production level
// }
//
// app.use(function (err, req, res, next) {
// 	var title = 'Error in ' + req.method + ' ' + req.url;
// 	console.error(title, err);
//
// 	res.status(err.status || 500).json({
// 		message: err.message,
// 		title: title
// 	});
// });
