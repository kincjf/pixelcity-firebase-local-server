/*
 * firebase-server 0.11.0
 * License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked.
 */

'use strict';

var FirebaseServer = require('firebase-server');
var firebase = require('firebase');
var jsonfile = require('jsonfile');
var file = process.argv[2] ||  'pixelcity-demo-48860-export.json';

console.log("file : " + file);

var data = jsonfile.readFileSync(file);
var name = 'pixelcity-demo-48860';
// new FirebaseServer(5000, 'test.firebaseio.com', {
// 	states: {
// 		CA: 'California',
// 		AL: 'Alabama',
// 		KY: 'Kentucky'
// 	}
// });

new FirebaseServer(5000, 'test.firebaseio.com', data);

firebase.initializeApp({
	databaseURL: 'ws://test.firebaseio.com:5000'
});

var database = firebase.database();
var ref = database.ref();

ref.on('value', function(snap) {
	console.log('--- Got value --- \n', snap.val());
});
