"use strict";

var _ = require('lodash');

var userData = require("./user");

// user 수만큼 있음
var data = {
	"Bl5k6bioized1EFqb2vWuCJl6XF2": {
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
	"YxgY3Usu0XPCorrVkZGa8qkaQ103": {
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
	"eFc0ngtIpgYAvzKuc6eZS2Rwyv22": {
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
	"xxkVJ3qkzxQ14i373C9KSNSLsR32": {
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
	"3r5PNGSG3iW5wTL3lTO3rFNmjMb2": {
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
