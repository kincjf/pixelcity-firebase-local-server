/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const errorhandler = require('errorhandler');
const Promise = require('bluebird');
const moment = require('moment');

const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});

const nakama = require('./nakama');
const app = express();

var envPath, serviceAccount;
console.log('process.env.NODE_ENV == ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
	envPath = '../.test.env';
	require('dotenv').config({path: envPath});
	serviceAccount = require("./test/pixelcity-test.json");

	var projectConfig = {
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		// databaseURL: process.env.FIREBASE_HOST + ':' + process.env.FIREBASE_PORT,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET
	};
	console.log(projectConfig);

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: process.env.FIREBASE_DATABASE_URL
		// databaseURL: "https://pixelcity-test1.firebaseio.com"
	});

	console.log('Development Mode');
} else {	// production level
	admin.initializeApp();

	console.log('Production Mode');
}


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
	let user = event.val();
	let date = moment().utc().format();

	return admin.database().ref('/user').child(user.uid).set({
		id: user.uid,
		type: "public",		// 유저별 권한 - 조정 필요
		email: user.email,
		userStatus: 1,
		nickname: "",
		createAt: date,
		updatedAt: date,
		voteCount: 0,
		friendCount: 0,
		mobilePhone: "",
		gender: "",
		birthday: "",
		baseLocation: {}
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

		return userCountRef.transaction(function (current_value) {
			let userCount = (current_value || 0) + 1;
			return userCount;
		});
	}).catch(err => {
		return Promise.reject(err);
	});
});

/**
 * 구현중
 * @type {CloudFunction<UserRecord>}
 */
exports.deleteUserTrigger = functions.auth.user().onDelete((event, context) => {
	let user = event.val();
	let date = moment().utc().format();

	return admin.database().ref('/user').child(user.uid).set({
		id: user.uid,
		type: "public",		// 유저별 권한 - 조정 필요
		email: user.email,
		userStatus: 1,
		nickname: "",
		createAt: date,
		updatedAt: date,
		voteCount: 0,
		friendCount: 0,
		mobilePhone: "",
		gender: "",
		birthday: "",
		baseLocation: {}
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

		return userCountRef.transaction(function (current_value) {
			let userCount = (current_value || 0) + 1;
			return userCount;
		});
	}).catch(err => {
		return Promise.reject(err);
	});
});

/**
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

	// 클라이언트에서 닉네임 중복체크를 한 nickname이 오거나, 서버에서 닉네임 중복체크하기
	return nakama.getNakamaSession(userId, newNickname).then((session) => {
		let log = `updateNicknameTrigger():  Success change ${userId}'s username as ${session.username}`;
		console.log(log);
		return Promise.resolve(log);
		// return client.updateAccount(session, {
		// 	username: newNickname
		// });
	}).catch(err => {
		return Promise.reject(err);
	});
});

// This HTTPS endpoint can only be accessed by your Firebase Users.
// Requests need to be authorized by providing an `Authorization` HTTP header
// with value `Bearer <Firebase ID Token>`.
exports.api = functions.https.onRequest(app);

// error handling
if (process.env.NODE_ENV === "development") {
	app.use(errorhandler({
		log: (err, str, req) => {
			var title = 'Error in ' + req.method + ' ' + req.url;
			console.error(title, err);
		}
	}));
} else {	// production level
}

app.use(function (err, req, res, next) {
	var title = 'Error in ' + req.method + ' ' + req.url;
	console.error(title, err);

	res.status(err.status || 500).json({
		message: err.message,
		title: title
	});
});
