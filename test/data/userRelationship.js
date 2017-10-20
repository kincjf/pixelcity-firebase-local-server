"use strict";

var _ = require('lodash');

var userData = require("./user");

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

_.forEach(data, function(value, key) {
	userData[key].voteCount = value.userStat.voteCount;
	userData[key].friendCount = value.userStat.friendCount;
});

module.exports = data;
