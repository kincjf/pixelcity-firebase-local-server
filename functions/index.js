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

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const errorhandler = require('errorhandler');
const notifier = require('node-notifier');

const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();

var envPath, serviceAccount;
console.log('process.env.NODE_ENV == ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
	envPath = '../.test.env';
	require('dotenv').config({path: envPath});
	console.log('databaseURL: ' + process.env.FIREBASE_HOST + ":" + process.env.FIREBASE_PORT);
	serviceAccount = require("../pixelcity-demo-48860-firebase-adminsdk-r2yz0-4d28c93f47.json");

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: process.env.FIREBASE_HOST + ':' + process.env.FIREBASE_PORT
	});
	app.use(errorhandler({
		log: (err, str, req) => {
			var title = 'Error in ' + req.method + ' ' + req.url;

			notifier.notify({
				title: title,
				message: str
			})
		}
	}));

	console.log('Development Mode');
} else {	// production level
	admin.initializeApp();


	// app.use(morgan("combined", {"stream": logger.stream}));

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
	res.send(`Hello ${req.user.email}`);
});
/**
 * user { uid, displayName, email, photoURL, emailVerified, phoneNumber }
 * @type {CloudFunction<UserRecord>}
 */
app.signupTrigger = functions.auth.user().onCreate((user) => {
	let newUserRef = admin.database().ref('/user').push();		// .com이 key로 들어가지 않기 때문에 uniqid로 변환함
	let newUserPropertyRef = admin.database().ref('/userProperty').child(newUserRef.key);		// .com이 key로 들어가지 않기 때문에 uniqid로 변환함
	let date = moment().utc().format();

	let userCountRef = db.ref("saving-data/count/user");

	return newUserRef.set({
		birthday: "",
		createAt: date,
		email: user.email,
		friendCount: 0,
		gender: "",
		nickname: "",
		type: "public",		// 유저별 권한 - 조정 필요
		updatedAt: date,
		userStatus: 1,
		voteCount: 0,
		baseLocation: {}
	}).then(res => {
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
		}).then(res => {
			return userCountRef.transaction(function (current_value) {
				let userCount = (current_value || 0) + 1;
				return userCountRef.update(userCount);
			});
		});
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

			notifier.notify({
				title: title,
				message: str
			});
		}
	}));
} else {	// production level
}

app.use(function (err, req, res, next) {
	var title = 'Error in ' + req.method + ' ' + req.url;

	res.status(err.status || 500).json({
		message: err.message,
		title: title
	});
});
