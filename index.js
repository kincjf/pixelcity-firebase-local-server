'use strict';

const util = require('util');
const _ = require("lodash");

var Promise = require('bluebird');
var admin = require('firebase-admin');
var jsonfile = require('jsonfile');
var delay = require('delay');

const mkdirp = require("mkdirp");

var envPath, firebaseServiceAccount, firebaseWebConfig;
if (process.env.NODE_ENV === "development") {
	envPath = './config/dev/.dev.env';
	console.log('Development Mode');
} else if (process.env.NODE_ENV === "alpha-test") {
	envPath = './config/alpha/.alpha.env';
	console.log('Alpha-Test Mode');
} else if (process.env.NODE_ENV === "production") {
	envPath = './config/prod/.prod.env';
	console.log('Production Mode');
} else {
	throw new Error("no env file found.");
}

require('dotenv').config({path: envPath});
let ENV_FLAG = process.env.ENV_FLAG;
console.log("FIREBASE_SERVICE_ACCOUNT: " + process.env.FIREBASE_SERVICE_ACCOUNT);
console.log("FIREBASE_WEB_CONFIG: " + process.env.FIREBASE_WEB_CONFIG);

if (!(process.env.FIREBASE_SERVICE_ACCOUNT && process.env.FIREBASE_WEB_CONFIG)) {
	console.log("Usage: " + __filename + " FIREBASE_*=SOME_PARAM");
	process.exit(-1);
} else {
	firebaseServiceAccount = `./config/${ENV_FLAG}/${process.env.FIREBASE_SERVICE_ACCOUNT}`;
	firebaseWebConfig = `./config/${ENV_FLAG}/${process.env.FIREBASE_WEB_CONFIG}`;
}

var filename = process.env.FIREBASE_DB_FILEPATH || `pixelcity-new-${ENV_FLAG}.export.json`;
console.log("filename: " + filename);

const common = require('./common');
const objectToArray = common.objectToArray;
const listAllUsers = common.listAllUsers;

var initData = require("./data");
mkdirp(process.env.FIREBASE_DB_BUILDDIR);
_.forEach(initData, function (value, key) {  // 개별로 찍어보자
	jsonfile.writeFile(process.env.FIREBASE_DB_BUILDDIR + "/" + key + ".json", value, {spaces: 2, EOL: '\r\n'}, function(err) {
		if (err) {
			console.error(err);
		}
	});
});

// 전체
jsonfile.writeFile(process.env.FIREBASE_DB_BUILDDIR + "/" + filename, initData, {spaces: 2, EOL: '\r\n'}, function(err) {
	if (err) {
		console.error(err);
	}
});

var projectConfig = require(firebaseWebConfig);
var serviceAccount = require(firebaseServiceAccount);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: projectConfig.databaseURL
});

return admin.database().ref('/').remove().then(() => {
	console.log("Complete Delete Database");
	let users = [];

	return listAllUsers(admin, users).then(users => {
		return Promise.each(users, (item) => {
			return admin.auth().deleteUser(item.uid);
		}).then(() => {
			console.log("Complete Delete User");
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
		console.log("Complete Create User");

		// createUserTrigger가 작동되는 시간을 보장해주어야 함
		return delay(1000, "delay for createUserTrigger()");
	}).then(msg => {
		return admin.database().ref('/').set(initData).then(() => {
			// 한번에 넣으면 updateNicknameTrigger가 발동이 안됨

			return Promise.each(objectToArray(initData.user), (item, index, length) => {
				return admin.database().ref(`/user/${item.value.uid}`).update({
					nickname: "NEW"+item.value.nickname
				});
			});
		});
	}).then((rootRef) => {
		let userArr = [];
		console.log("Complete Create Database");

		return listAllUsers(admin, userArr).then((users) => {
			let userCountRef = admin.database().ref("saving-data/count/user");

			return userCountRef.transaction(function (current_value) {
				let userCount = users.length;
				return userCount;
			});
		});
		// end dump test data
	});
}).then(() => console.log("test data dump finish")).catch((err) => console.error("test data dump Error", err));
