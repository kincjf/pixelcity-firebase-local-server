"use strict";

let _ = require("lodash");
var userData = require("./user");

var data = {
	"smadupset@naver": {
		"invitorUid1": {
			"status": "Lorem",
			"message": "ㅎㅇㅎㅇ 초대좀"
		}
	},
	"jgj90@naver": {
		"invitorUid2": {
			"status": "Lorem",
			"message": "ㅎㅇㅎㅇ 초대좀"
		}
	},
	"pastelbook89@gmail": {
		"invitorUid3": {
			"status": "Lorem",
			"message": "ㅎㅇㅎㅇ 초대좀"
		}
	},
	"sinho0689@gmail": {
		"invitorUid4": {
			"status": "Lorem",
			"message": "ㅎㅇㅎㅇ 초대좀"
		}
	},
	"random_1487780669@gmail": {
		"invitorUid5": {
			"status": "Lorem",
			"message": "ㅎㅇㅎㅇ 초대좀"
		}
	}
};


_.forEach(userData, function(value, key) {
	data[key] = {};		// 초대 메시지를 받은 사람(본인)

	_.forEach(userData, function(fValue, fKey) {	// 초대 메시지를 전송한 사람(타인)
		if (_.eq(key, fKey)) {
			return;
		}

		data[key][fKey] = {
			status: function () {
				let i = _.random(-1, 1);
				let status = "decline";

				if (i === -1) {
					status = "decline";
				} else if (i === 0) {
					status = "pending";
				} else if (i === 1) {
					status = "accept";
				}

				return status;
			}(),
			message: "hello? "+ key
		};
	});

});

module.exports = data;
