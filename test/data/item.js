"use strict";

var data = {
	"weapon": {
		"BasicSword": {
			"type": "sword",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 100,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 10,
					"max": 30
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				}
			},
			"dropRate": 30.0,
			"rating": 2
		},
		"Blade": {
			"type": "sword",
			"skin": false,			
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 100,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 50,
					"max": 50
				},
				"attackPower": {
					"min": 100,
					"max": 150
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				}
			},
			"dropRate": 30.0,
			"rating": 2
		},
		"MagicStaff": {
			"type": "staff",
			"skin": false,			
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 200,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 150,
					"max": 200
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				}
			},
			"dropRate": 20.0,
			"rating": 4
		},
		"GreenBow": {
			"type": "bow",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 50,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 300,
					"max": 400
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				},
			},
			"dropRate": 30.0,
			"rating": 1
		}
	},
	"armor": {

	},
	"accessory": {
		"BronzeRing": {
			"type": "ring",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 100,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 0,
					"max": 0
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 1,
					"max": 3
				},
			},
			"dropRate": 30.0,
			"rating": 1
		}
	},
	"groceries": {
		"Redberry": {
			"type": "healingPotion",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 50,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 50,
					"max": 50
				},
				"attackPower": {
					"min": 0,
					"max": 0
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				},
			},
			"dropRate": 30.0,
			"rating": 1
		}
	},
	"coin": {
		"SilverCoin": {
			"type": "etc",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 500,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 0,
					"max": 0
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				},
			},
			"dropRate": 20.0,
			"rating": 4
		},
		"GoldCoin": {
			"type": "etc",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 2000,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 0,
					"max": 0
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				},
			},
			"dropRate": 5.0,
			"rating": 5
		},
		"BronzeCoin": {
			"type": "etc",
			"skin": false,
			"slotSize": {
				"row": 1,
				"col": 1
			},
			"price": {
				"gameMoney": 300,
				"cash": 0
			},
			"property": {
				"hp": {
					"min": 0,
					"max": 0
				},
				"attackPower": {
					"min": 0,
					"max": 0
				},
				"defence": {
					"min": 0,
					"max": 0
				},
				"agility": {
					"min": 0,
					"max": 0
				},
			},
			"dropRate": 30.0,
			"rating": 3
		}
	}
};


module.exports = data;
