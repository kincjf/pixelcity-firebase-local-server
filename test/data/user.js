"use strict";

var moment = require('moment');
var _ = require('lodash');

var data = {
	"smadupset@naver" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"createdAt" : "2011-06-14T04:12:36.123Z",
		"email" : "smadupset@naver.com",
		"friendCount" : -38,
		"gender" : "female",
		"nickname" : "smadupset네이버",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : -16,
		"voteCount" : -56,
		"baseLocation": {}
	},
	"jgj90@naver" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"createdAt" : "2011-06-14T04:12:36.123Z",
		"email" : "jgj90@naver.com",
		"friendCount" : -38,
		"gender" : "female",
		"nickname" : "jgj90네이버",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : -16,
		"voteCount" : -56,
		"baseLocation": {}
	},
	"pastelbook89@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"createdAt" : "2011-06-14T04:12:36.123Z",
		"email" : "pastelbook89@gmail.com",
		"friendCount" : -38,
		"gender" : "female",
		"nickname" : "pastelbook89지메일",
		"type" : "admin",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : -16,
		"voteCount" : -56,
		"baseLocation": {}
	},
	"sinho0689@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"createdAt" : "2011-06-14T04:12:36.123Z",
		"email" : "sinho0689@gmail.com",
		"friendCount" : -38,
		"gender" : "male",
		"nickname" : "sinho0689지메일",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : -16,
		"voteCount" : -56,
		"baseLocation": {}
	},
	"random_1487780669@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"createdAt" : "2011-06-14T04:12:36.123Z",
		"email" : "random_1487780669@gmail.com",
		"friendCount" : -38,
		"gender" : "male",
		"nickname" : "I'm stub~",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : -16,
		"voteCount" : -56,
		"baseLocation": {}
	}
};

_.forEach(data, function(value, key) {
	data[key].birthday = moment.utc().format('YYYY-MM-DD');
	data[key].createdAt = moment.utc().format('YYYY-MM-DD HH:mm:ss');
	// data[key].friendCount = _.random(0, 500);  // userRelationship
	data[key].nickname = value.email.split("@")[0];

	if (_.eq(value.email, "pastelbook89@gmail.com")) {
		data[key].type = "admin";
	} else {
		data[key].type = "public";
	}

	data[key].updatedAt = moment.utc().format('YYYY-MM-DD HH:mm:ss');
	data[key].userStatus = 1;  // userRelationship
	data[key].voteCount = _.random(0, 100);
	data[key].baseLocation = {};
});

module.exports = data;

// Foreign Master 때문에


