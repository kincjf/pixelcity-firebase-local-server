/*
 * firebase-server 0.11.0
 * License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked.
 */

'use strict';

const util = require('util');
const _ = require("lodash");

var Promise = require('bluebird');
var admin = require('firebase-admin');
var firebase = require('firebase');
var jsonfile = require('jsonfile');
var requestp = require('request-promise');
var jwt = require('jsonwebtoken');
const mkdirp = require("mkdirp");

var envPath
if (process.env.NODE_ENV === "development") {
	envPath = '.test.env';
	console.log('Development Mode');
} else if (process.env.NODE_ENV === "production") {
	envPath = '.env';
	console.log('Production Mode');
} else {
	throw new Error("no env file found.");
}

require('dotenv').config({path: envPath});

var filename = process.env.FIREBASE_DB_FILEPATH ||  'pixelcity-demo-48860.export.json';
var port = process.env.FIREBASE_PORT || 3000;

console.log("filename: " + filename);
console.log("databaseURL: " + process.env.FIREBASE_DATABASE_URL);
console.log("port: " + port);

const common = require('./common');
const objectToArray = common.objectToArray;
const listAllUsers = common.listAllUsers;

var initData = require("./test/data");
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

// https://stackoverflow.com/questions/37418372/firebase-where-is-my-account-secret-in-the-new-console
// var server = new FirebaseServer(port, host, data);
// server._tokenValidator.decode = function(token) {
	// firebase token verify를 위한 custom decoder
	// 참고 : https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=ko
	// var decoded = jwt.verify(token, pubkey, {
	// 	algorithms: ["RS256"],
	// 	audience: projectId,		// Firebase 프로젝트 ID(Firebase 프로젝트의 고유 식별자)여야 합니다. 프로젝트 콘솔의 URL에서 확인할 수 있습니다.
	// 	iss: "https://securetoken.google.com/" + projectId,
	// 	sub: uid
	// });
	// var decoded = jwt.decode(token);
  //
	// debug('decode(token: %j, secret: %j) => %j', token, decoded);
	// return decoded;
// };
var serviceAccount = require('./functions/test/pixelcity-test.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.FIREBASE_DATABASE_URL
});

admin.database().ref('/').remove().then(() => {
	let users = [];

	return listAllUsers(admin, users).then(users => {
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
	}).then((rootRef) => {
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
}).then(() => console.log("test data dump finish")).catch((err) => console.error("test data dump Error", err));
