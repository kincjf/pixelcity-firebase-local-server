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

var path = require("path");

// Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.
const chai = require('chai');
const assert = chai.assert;
const Promise = require("bluebird");
// Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');
const requestp = require("request-promise");
const admin = require('firebase-admin');
const firebase = require('firebase');
const delay = require('delay');

var envPath, firebaseServiceAccount, firebaseWebConfig;
if (process.env.NODE_ENV === "development") {
	envPath = '../config/dev/.dev.env';
	console.log('Development Mode');
} else if (process.env.NODE_ENV === "alpha-test") {
	envPath = '../config/alpha/.alpha.env';
	console.log('Alpha-Test Mode');
} else if (process.env.NODE_ENV === "production") {
	envPath = '../config/prod/.prod.env';
	console.log('Production Mode');
} else {
	throw new Error("no env file found.");
}

require('dotenv').config({path: envPath});
let ENV_FLAG = process.env.ENV_FLAG;
var filename = process.env.FIREBASE_DB_FILEPATH || `pixelcity-new-${ENV_FLAG}.export.json`;
var buildDir = process.env.FIREBASE_DB_BUILDDIR || "build";

if (!(process.env.FIREBASE_SERVICE_ACCOUNT && process.env.FIREBASE_WEB_CONFIG)) {
	console.log("Usage: " + __filename + " FIREBASE_*=SOME_PARAM");
	process.exit(-1);
} else {
	firebaseServiceAccount = `../config/${ENV_FLAG}/${process.env.FIREBASE_SERVICE_ACCOUNT}`;
	firebaseWebConfig = `../../config/${ENV_FLAG}/${process.env.FIREBASE_WEB_CONFIG}`;
}

// emulator 에러로 인한 환경변수 강제설정
var projectConfig = require(firebaseWebConfig);
process.env.FIREBASE_CONFIG = JSON.stringify(projectConfig);

const test = require('firebase-functions-test')(projectConfig, firebaseServiceAccount);
const common = require("../../common");
const objectToArray = common.objectToArray;
const listAllUsers = common.listAllUsers;

const nakama = require("../nakama");

describe('Test Cloud Functions', () => {
	let initData;
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
		initData = require(path.join("../../", buildDir, filename));
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
				// createUserTrigger가 작동되는 시간을 보장해주어야 함
				return delay(1000, "delay for createUserTrigger가()");
			}).then(msg => {
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

	// api는 firebase service에서만 테스트 가능
	describe('api.hello ByService', (done) => {
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
							timeout: 10000	// 10s
						};

						return requestp(options).then((body) => {
							assert.isOk(body, '[get response is ok?]');
							return Promise.resolve();
						});
					});
				});
			}).then(() => done()).catch((err) => done(err));
			// [END assertOnline]
		});
	});

	describe('signupTriggerByEmulator', () => {
		before((done) => {
			done();	// done()을 안하면 멈춰서 다음 case로 넘어가지지 않는다
		});

		it('should occur signupTrigger when user created(cloud database onCreate)', (done) => {
			// [START assertOnline]
			// Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.
			let mockVal = {
				uid: "uniqueUid",
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
					assert.equal(val.level, 1, `[userProperty/${mockVal.uid}/level: ${val.level}]`);

					return admin.database().ref("saving-data/count/user").once('value').then((currentSnap) => {
						let currentUserLength = currentSnap.val();
						let prevUserLength = objectToArray(initData.user).length;

						assert.equal(currentUserLength, prevUserLength + 1, `[value of saving-data/count/user? - ${currentUserLength}]`);
						return Promise.resolve();
					});
				}).then(() => done()).catch((err) => done(err));
			});
			// [END assertOnline]
		});
	});

	// describe('signupTriggerByService', () => {
	// });

	describe('updateNicknameTriggerByEmulator', () => {
		it('should occur updateNicknameTrigger when user nickname updated(cloud database onUpdate)', (done) => {
			// [START assertOnline]
			// Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.
			let uid = Object.keys(initData.user)[0];  // 첫번째 user의 key값, 바꿔서 해보자
			let user = initData.user[uid];  // 첫번째 user의 key값, 바꿔서 해보자\

			// ${uid}에 해당하는 유저 정보가 생성되어있는것을 전제로 함
			const beforeSnap = test.database.makeDataSnapshot(user.nickname, `/user/${uid}/nickname`);
			// Make snapshot for state of database after the change
			const afterSnap = test.database.makeDataSnapshot("afterSnapName", `/user/${uid}/nickname`);
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
				return admin.database().ref(`/user/${uid}/nickname`).once('value').then((snap, context) => {
					let currentNickname = snap.val();
					let parentKey = snap.ref.parent.key;

					return nakama.getNakamaSession(uid, currentNickname).then(session => {
						let client = nakama.getNakamaClient();

						return delay(1000, {
							newClient: client,
							newSession: session
						})
					}).then(result => {
						return result.newClient.getUsers(result.newSession, null, ["afterSnapName"]).then(result => {
							if (result.users || result.users.length > 0) {
								result.users.forEach(user => {
									// update가 되었을때 nakama server가 변경이 되는지 비교를 해야됨
									assert.equal("afterSnapName", user.username,
										`[firebase.user.nickname(changed) == nakama.user.username? - nakama.user.id: ${user.id}, nakama.user.username: ${user.username}]`);
									return Promise.resolve();
								});
							} else {
								return Promise.reject(new Error("wrappedUpdateNicknameTrigger(): no nakama User(username:afterSnapName) found"));
							}

							return Promise.resolve();
						});
					}).then(() => {
						// wrap function은 실제 firebase의 trigger를 발생시키는 것이 아니기 database trigger 이벤트가 발생하지 않음
						// 하단의 조건은 실패하지만, 값 확인을 위해서 작성함
						return admin.database().ref(`/user/${uid}/nickname`).once('value').then((snap, context) => {
							let currentNickname = snap.val();
							assert.equal("afterSnapName", currentNickname,
								`[firebase.user.nickname has changed? - firebase user/${uid}/nickname: ${currentNickname}]`);
							return Promise.resolve();
						});
					})

					// Assert that the value is the uppercased version of our input.
				}).then(() => done()).catch((err) => done(err));
			});
			// [END assertOnline]
		});
	});

	// describe('updateNicknameTriggerByService', () => {
	// });
});
