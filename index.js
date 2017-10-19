/*
 * firebase-server 0.11.0
 * License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked.
 */

'use strict';

const util = require('util');

var FirebaseServer = require('firebase-server');
var firebase = require('firebase');
var jsonfile = require('jsonfile');
require('dotenv').config();

var filename = process.env.FIREBASE_DB_FILEPATH ||  'pixelcity-demo-48860.export.json';
var host = process.env.FIREBASE_HOST || 'test.firebaseio.com';
var port = process.env.FIREBASE_PORT || 3000;

console.log("filename: " + filename);
console.log("host: " + host);
console.log("port: " + port);

var data = require("./test/data");
jsonfile.writeFile(filename, data, {spaces: 2, EOL: '\r\n'}, function(err) {
	console.error(err);
})

// var data = jsonfile.readFileSync(filename);
// var name = 'pixelcity-demo-48860';
// new FirebaseServer(5000, 'test.firebaseio.com', {
// 	states: {
// 		CA: 'California',
// 		AL: 'Alabama',
// 		KY: 'Kentucky'
// 	}
// });

new FirebaseServer(port, host, data);

firebase.initializeApp({
	databaseURL: 'ws://' + host + ':' + port
});

var database = firebase.database();

// 원하는 listener를 달아서 변경된 값을 추적할때 모니터링 할 수 있음
// https://firebase.google.com/docs/database/web/lists-of-data
// https://firebase.google.com/docs/reference/node/firebase.database.DataSnapshot

var ref = database.ref();

var character = database.ref("/character");
var checkFriendship = database.ref("/checkFriendship");
var history = database.ref("/history");
var item = database.ref("/item");
var map = database.ref("/map");
var onlineUser = database.ref("/onlineUser");
var skill = database.ref("/skill");
var user = database.ref("/user");
var userDeck = database.ref("/userDeck");
var userProperty = database.ref("/userProperty");
var userRelationship = database.ref("/userRelationship");

ref.on('value', function(snap) {
	console.log('\n --- Got ref value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

character.on('value', function(snap) {
	console.log('\n --- Got character value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

checkFriendship.on('value', function(snap) {
	console.log('\n --- Got checkFriendship value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

history.on('value', function(snap) {
	console.log('\n --- Got history value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

item.on('value', function(snap) {
	console.log('\n --- Got item value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

map.on('value', function(snap) {
	console.log('\n --- Got map value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

onlineUser.on('value', function(snap) {
	console.log('\n --- Got onlineUser value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

skill.on('value', function(snap) {
	console.log('\n --- Got skill value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

user.on('value', function(snap) {
	console.log('\n --- Got user value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

userDeck.on('value', function(snap) {
	console.log('\n --- Got userDeck value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

userProperty.on('value', function(snap) {
	console.log('\n --- Got userProperty value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});

userRelationship.on('value', function(snap) {
	console.log('\n --- Got userRelationship value --- \n');
	console.log(util.inspect(snap.val(), false, null));
});
