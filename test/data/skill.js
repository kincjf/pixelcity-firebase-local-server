"use strict";

var data = {
	"LeafBlast": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 5,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1000
			}
		},
		"special": false
	},
	"GreenZone": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 10,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1000
			}
		},
		"special": false
	},
	"MorningAmericano": {
		"type": "buff",
		"properties": {
			"lv1": {
				"factor": 1.5,
				"duration": 10,
				"AOE": true,
				"cooldown": 25,
				"expForNext": 1000
			}
		},
		"special": false
	},
	"HelloWorld": {
		"type": "buff",
		"properties": {
			"lv1": {
				"factor": 3,
				"duration": 15,
				"AOE": true,
				"cooldown": 35,
				"stun": false,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
	"RussianRoulette": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 5,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"GoodLuck": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 10,
				"duration": 0,
				"AOE": false,
				"cooldown": 20,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"TakeBath": {
		"type": "healing",
		"properties": {
			"lv1": {
				"factor": 500,
				"duration": 0,
				"AOE": true,
				"cooldown": 20,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"NoWater": {
		"type": "healing",
		"properties": {
			"lv1": {
				"factor": 1000,
				"duration": 0,
				"AOE": true,
				"cooldown": 30,
				"stun": false,
				"repeat": 0,
				"expForNext": 2500
			}
		},
		"special": false
	},
	"ISeeYou": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 2,
				"duration": 0,
				"AOE": true,
				"cooldown": 10,
				"stun": false,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
	"YouSeeMe": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 8,
				"duration": 0,
				"AOE": true,
				"cooldown": 20,
				"stun": false,
				"repeat": 0,
				"expForNext": 3000
			}
		},
		"special": false
	},
	"DontMess": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 5,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"IhaveTear": {
		"type": "buff",
		"properties": {
			"lv1": {
				"factor": 1.2,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"HardTraining": {
		"type": "buff",
		"properties": {
			"lv1": {
				"factor": 1.5,
				"duration": 0,
				"AOE": false,
				"cooldown": 25,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"UsingFoce": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 10,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"Hungry": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 10,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"WaterPunch": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 10,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 1500
			}
		},
		"special": false
	},
	"ShiningAction": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 30,
				"duration": 0,
				"AOE": false,
				"cooldown": 15,
				"stun": false,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
	"Slow": {
		"type": "debuff",
		"properties": {
			"lv1": {
				"factor": 0,
				"duration": 2,
				"AOE": true,
				"cooldown": 15,
				"stun": true,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
	"Breakfast": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 30,
				"duration": 0,
				"AOE": false,
				"cooldown": 25,
				"stun": false,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
	"FinalAttack": {
		"type": "attack",
		"properties": {
			"lv1": {
				"factor": 30,
				"duration": 0,
				"AOE": false,
				"cooldown": 25,
				"stun": false,
				"repeat": 0,
				"expForNext": 2000
			}
		},
		"special": false
	},
};


module.exports = data;
