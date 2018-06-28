/*global debugger,v8debug,before,after */
/*jslint debug:true, node:true */

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

// Follow the instructions in uppercase/README.md for running these tests

// Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.

// if (process.env.NODE_ENV === "development") {
// 	envPath = '../.test.env';
// 	console.log('Development Test Mode');
// } else {	// production level
// 	envPath = '../.env';
// 	console.log('Production Test Mode');
// }
//
// require('dotenv').config({path: envPath});
// console.log('databaseURL: ' + process.env.FIREBASE_HOST + ":" + process.env.FIREBASE_PORT);

const chai = require('chai');
const assert = chai.assert;
const Promise = require("bluebird");
// Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');
const requestp = require("request-promise");
const admin = require('firebase-admin');
const firebase = require('firebase');

if (process.env.NODE_ENV === "development") {
	envPath = '../.test.env';
	require('dotenv').config({path: envPath});

	console.log('Development Test Mode');
} else {	// production level
	envPath = '../.env';
	require('dotenv').config({path: envPath});

	console.log('Production Test Mode');
}

// emulator 에러로 인한 환경변수 강제설정
var projectConfig = require("./firebase-test-config");
process.env.FIREBASE_CONFIG = JSON.stringify(projectConfig);

const test = require('firebase-functions-test')(projectConfig, './test/gcloud-pixelcity-test.json');
const common = require("../../common");
const objectToArray = common.objectToArray;
const listAllUsers = common.listAllUsers;

describe('Test Cloud Functions', () => {
	let initData;
	let uid = "antiqueUid";
	let myFunctions = require('../index');

	// before((done) => {
	// 	initData = require("../../build/pixelcity-demo-48860.export");
	// 	done();
	// });

	before((done) => {
		// 강제 debug break point 진입
		// if (typeof(v8debug) !== undefined) {
		// 	debugger;
		// }

		// Require index.js and save the exports inside a namespace called myFunctions.
		// This includes our cloud functions, which can now be accessed at myFunctions.makeUppercase
		// and myFunctions.addMessage
		initData = require("../../build/pixelcity-demo-48860.export");
		// myFunctions = require('../index');

		// Do cleanup tasks.
		test.cleanup();

		// Resolution method is overspecified. Specify a only callback *or* only return a Promise; not both!!
		// 내부적으로는 promise chain으로 연결되어야하고, 외부 최초 return은 callback처럼 작성하기
		// callback type과 promise 타입을 섞어서 쓰면 작동을 안한다
		admin.database().ref('/').remove().then(() => {
			let userArr = [];

			return listAllUsers(admin, userArr).then(users => {
				return Promise.each(users, (item) => {
					return admin.auth().deleteUser(item.uid);
				}).then(() => {
					let userCountRef = admin.database().ref("saving-data/count");
					return userCountRef.update({
						"user": 0
					});
				});
				// end clear data
			}).then(() => {
				return Promise.each(objectToArray(initData.user), (item, index, length) => {
					item.value.uid = Object.keys(initData.user)[index];
					item.value.password = "11112222";
					return admin.auth().createUser(item.value);
				});
			}).then(() => {
				return admin.database().ref('/').set(initData);
			}).then((ref) => {
				let userArr = [];

				return listAllUsers(admin, userArr).then((users) => {
					let userCountRef = admin.database().ref("saving-data/count/user");

					return userCountRef.transaction(function (current_value) {
						let userCount = users.length;
						return userCount;
					});
				});
				// end dump test data
			});
		}).then(() => done()).catch((err) => done(err));
	});

	after((done) => {
		// 강제 debug break point 진입
		// if (typeof(v8debug) !== undefined) {
		// 	debugger;
		// }

		// Do cleanup tasks.
		test.cleanup();
		// Reset the database.
		admin.database().ref('/').remove().then(() => {
			let userArr = [];

			return listAllUsers(admin, userArr).then((users) => {
				return Promise.each(users, (item) => {
					return admin.auth().deleteUser(item.uid);
				});
			});
		}).then(() => done()).catch((err) => done(err));
	});

	describe('api.hello', (done) => {
		// Test Case: setting messages/11111/original to 'input' should cause 'INPUT' to be written to
		// messages/11111/uppercase
		before((done) => {
			firebase.initializeApp(projectConfig);
			done();
		});

		it('should response `Hello ${req.user.email}` when request api/hello', (done) => {
			// [START assertOnline]
			// Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.
			var uid = "pixelcity-test1-firebase-adminsdk-9wout-1d6b6cfaa8";

			admin.auth().createCustomToken(uid).then(function (customToken) {
				// Send token back to client
				return firebase.auth().signInWithCustomToken(customToken).then(signedToken => {
					return firebase.auth().currentUser.getIdToken().then(token => {
						// timeout을 지정하지 않으면 response를 받을때까지 기다림
						let options = {
							uri: process.env.FIREBASE_API_HOST + "/hello",
							// json: true, // Automatically parses the JSON string in the response
							// headers: {
							// 	'Content-Type': 'application/json; charset=utf-8',
							// 	"authorization": "Bearer " + token
							// },
							method: "GET",
							auth: {
								'bearer': token
							},
							timeout: 60	// 10s
						};

						return requestp(options).then((body) => {
							assert.isOk(body, 'get response is ok');
							return Promise.resolve();
						});
					});
				});
			}).then(() => done()).catch((err) => done(err));
			// [END assertOnline]
		});
	});

	describe('signupTrigger', () => {
		before((done) => {
			done();	// done()을 안하면 멈춰서 다음 case로 넘어가지지 않는다
		});

		it('should occur signupTrigger when user created(cloud database onCreate)', (done) => {
			// [START assertOnline]
			// Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.
			let mockVal = {
				uid: uid,
				email: "testandtest.net"
			};
			const snap = test.auth.makeUserRecord(mockVal);

			// Wrap the makeUppercase function
			const wrappedSignupTrigger = test.wrap(myFunctions.signupTrigger);
			// Call the wrapped function with the snapshot you constructed.
			wrappedSignupTrigger(snap).then(() => {
				// Read the value of the data at messages/11111/uppercase. Because `admin.initializeApp()` is
				// called in functions/index.js, there's already a Firebase app initialized. Otherwise, add
				// `admin.initializeApp()` before this line.
				return admin.database().ref('userProperty/' + mockVal.uid).once('value').then((createdSnap) => {
					let val = createdSnap.val();
					// Assert that the value is the uppercased version of our input.
					assert.equal(val.level, 1, `userProperty/${mockVal.uid}/level: ${val.level}`);

					return admin.database().ref("saving-data/count/user").once('value').then((currentSnap) => {
						let currentUserLength = currentSnap.val();
						let prevUserLength = objectToArray(initData.user).length;

						assert.equal(currentUserLength, prevUserLength + 1, `saving-data/count/user: ${currentUserLength}`);
						return Promise.resolve();
					});
				}).then(() => done()).catch((err) => done(err));
			});
			// [END assertOnline]
		});
	});

	describe('updateNicknameTrigger', () => {
		it('should occur updateNicknameTrigger when user nickname updated(cloud database onUpdate)', (done) => {
			// [START assertOnline]
			// Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.

			// ${uid}에 해당하는 유저 정보가 생성되어있는것을 전제로 함
			const beforeSnap = test.database.makeDataSnapshot("beforeSnapName", `/user/${uid}/nickname`, admin.app());
			// Make snapshot for state of database after the change
			const afterSnap = test.database.makeDataSnapshot("afterSnapName", `/user/${uid}/nickname`, admin.app());
			const change = test.makeChange(beforeSnap, afterSnap);

			const wrappedUpdateNicknameTrigger = test.wrap(myFunctions.updateNicknameTrigger, {
				params: {
					"userId": uid
				}
			});
			// Call the wrapped function with the snapshot you constructed.
			wrappedUpdateNicknameTrigger(change).then(() => {
				// Read the value of the data at messages/11111/uppercase. Because `admin.initializeApp()` is
				// called in functions/index.js, there's already a Firebase app initialized. Otherwise, add
				// `admin.initializeApp()` before this line.
				return admin.database().ref(`/user/${uid}/nickname`).once('value').then((snap) => {
					let currentNickname = snap.val();
					// Assert that the value is the uppercased version of our input.
					assert.equal("afterSnapName", currentNickname, `user/${uid}/nickname: ${currentNickname}`);
					return Promise.resolve();
				}).then(() => done()).catch((err) => done(err));
			});
			// [END assertOnline]
		});
	});
});
