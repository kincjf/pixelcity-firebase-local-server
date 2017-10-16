/*
 * firebase-server 0.11.0
 * License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked.
 */

'use strict';

var FirebaseServer = require('firebase-server');
var firebase = require('firebase');
var jsonfile = require('jsonfile');
require('dotenv').config();

var filename = process.env.FIREBASE_DB_FILEPATH ||  'pixelcity-demo-48860-export.json';
var host = process.env.FIREBASE_HOST || test.firebaseio.com;
var port = process.env.FIREBASE_PORT || 3000;

console.log("filename: " + filename);
console.log("host: " + host);
console.log("port: " + port);

var data = jsonfile.readFileSync(filename);
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

var ref = database.ref();  // document root

ref.on('value', function(snap) {
	console.log('--- Got value --- \n', snap.val());
});
