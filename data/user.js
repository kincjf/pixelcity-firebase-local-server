"use strict";

var moment = require('moment');
var _ = require('lodash');

// nickname: 띄어쓰기, 특수문자가 없어야 함
var data = {
	// "99999@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "99999@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "99999지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "88888@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "88888@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "88888지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "77777@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "77777@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "77777지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "66666@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "66666@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "66666지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "55555@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "55555@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "55555지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "44444@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "44444@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "44444지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "33333@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "33333@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "33333@gmail.com",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "22222@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "22222@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "22222지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "11111@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "11111@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "11111지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "9999@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "9999@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "9999지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "8888@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "8888@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "8888지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "7777@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "7777@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "7777지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "6666@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "6666@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "6666지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "5555@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "5555@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "5555지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "4444@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "4444@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "4444지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "3333@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "3333@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "3333지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "2222@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "2222@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "2222지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	// "1111@gmail" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "1111@gmail.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "1111지메일",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	"smadupset@naver" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"email" : "smadupset@naver.com",
		"friendCount" : 0,
		"gender" : "female",
		"nickname" : "smadupset네이버",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : 1,
		"voteCount" : 0,
		"baseLocation": {}
	},
	// "jgj90@naver" : {
	// 	"birthday" : "2011-06-14T04:12:36.123Z",
	// 	"email" : "jgj90@naver.com",
	// 	"friendCount" : 0,
	// 	"gender" : "female",
	// 	"nickname" : "jgj90네이버",
	// 	"type" : "public",
	// 	"updatedAt" : "2011-06-14T04:12:36.123Z",
	// 	"userStatus" : 1,
	// 	"voteCount" : 0,
	// 	"baseLocation": {}
	// },
	"pastelbook89@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"email" : "pastelbook89@gmail.com",
		"friendCount" : 0,
		"gender" : "female",
		"nickname" : "pastelbook89지메일",
		"type" : "admin",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : 1,
		"voteCount" : 0,
		"baseLocation": {}
	},
	"sinho0689@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"email" : "sinho0689@gmail.com",
		"friendCount" : 0,
		"gender" : "male",
		"nickname" : "sinho0689지메일",
		"type" : "public",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : 1,
		"voteCount" : 0,
		"baseLocation": {}
	},
	"notworrw@gmail" : {
		"birthday" : "2011-06-14T04:12:36.123Z",
		"email" : "notworrw@gmail.com",
		"friendCount" : 0,
		"gender" : "female",
		"nickname" : "Jyu",
		"type" : "admin",
		"updatedAt" : "2011-06-14T04:12:36.123Z",
		"userStatus" : 1,
		"voteCount" : 15,
		"baseLocation": {}
	},
	"random_1487780669@gmail": {
		"birthday" : "2017-12-14T04:12:36.123Z",
		"email" : "random_1487780669@gmail.com",
		"friendCount" : 0,
		"gender" : "female",
		"nickname" : "ImRandom",
		"type" : "public",
		"updatedAt" : "2017-11-14T04:12:36.123Z",
		"userStatus" : 1,
		"voteCount" : 15,
		"baseLocation": {}
	}
};

_.forEach(data, function(value, key) {
	data[key].birthday = moment.utc().format();
	// data[key].createdAt = moment.utc().format();
	data[key].updatedAt = moment.utc().format();
});

module.exports = data;

// Foreign Master 때문에


