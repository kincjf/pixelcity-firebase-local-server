"use strict";

var _ = require('lodash');
var userData = require("./user");
var checkFriendshipData = require("./checkFriendship");


// user 수만큼 있음
var data = {
	"smadupset@naver": {
		"userStat": {
			"voteCount": 49,
			"friendCount": -65
		},
		"friends": {
			"uid": {
				"nickname": "Lorem",
				"friendshipStatus": "Lorem"
			}
		},
		"blockUsers": {
			"uid": {
				"nickname": "Lorem"
			}
		}
	},
	"jgj90@naver": {
		"userStat": {
			"voteCount": 49,
			"friendCount": -65
		},
		"friends": {
			"uid": {
				"nickname": "Lorem",
				"friendshipStatus": "Lorem"
			}
		},
		"blockUsers": {
			"uid": {
				"nickname": "Lorem"
			}
		}
	},
	"pastelbook89@gmail": {
		"userStat": {
			"voteCount": 49,
			"friendCount": -65
		},
		"friends": {
			"uid": {
				"nickname": "Lorem",
				"friendshipStatus": "Lorem"
			}
		},
		"blockUsers": {
			"uid": {
				"nickname": "Lorem"
			}
		}
	},
	"sinho0689@gmail": {
		"userStat": {
			"voteCount": 49,
			"friendCount": -65
		},
		"friends": {
			"uid": {
				"nickname": "Lorem",
				"friendshipStatus": "Lorem"
			}
		},
		"blockUsers": {
			"uid": {
				"nickname": "Lorem"
			}
		}
	},
	"random_1487780669@gmail": {
		"userStat": {
			"voteCount": 49,
			"friendCount": -65
		},
		"friends": {
			"uid": {
				"nickname": "Lorem",
				"friendshipStatus": "Lorem"
			}
		},
		"blockUsers": {
			"uid": {
				"nickname": "Lorem"
			}
		}
	}
};

let blockUser = Object.keys(userData)[1] || "sinho0689@gmail";

_.forEach(userData, function(value, key) {
	data[key] = {
		userStat: {},
		friends: {},
		blockUsers: {}
	};

	_.forEach(userData, function(fValue, fKey) {
		if (_.eq(key, fKey)) {
			return;
		}

		data[key].friends[fKey] = {
			nickname: userData[fKey].nickname,
			friendshipStatus: checkFriendshipData[key][fKey].status
		};

		if (blockUser && !_.eq(key, blockUser)) {
			data[key].blockUsers[blockUser] = {
				nickname: userData[blockUser].nickname
			};
		}

	});

	data[key].userStat.voteCount = value.voteCount;
	data[key].userStat.friendCount = Object.keys(data[key].friends).length;
	userData[key].friendCount = data[key].userStat.friendCount;
});

module.exports = data;
