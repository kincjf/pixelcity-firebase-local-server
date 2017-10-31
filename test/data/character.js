"use strict";

var data = {
	"Pyok": {
		"elementType": "tree",
		"dropItems": {
			"Sword": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 150,
					"max": 200
				},
				"attackPower": {
					"min": 450,
					"max": 500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"LeafBlast": true
				}
			}
		}
	},
	"Xyz": {
		"elementType": "dark",
		"dropItems": {
			"GreenBow": true,
			"SilverCoin": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 250,
					"max": 300
				},
				"attackPower": {
					"min": 250,
					"max": 300
				},
				"agility": {
					"min": 2.0,
					"max": 1.0
				},
				"expForNext": 200,
				"skills": {
					"MorningAmericano": true
				}
			}
		}
	},
	"Inish": {
		"elementType": "fire",
		"dropItems": {
			"BronzeCoin": true,
			"Blade": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 500,
					"max": 600
				},
				"defence": {
					"min": 50,
					"max": 100
				},
				"attackPower": {
					"min": 550,
					"max": 600
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"RussianRoulette": true
				}
			}
		}
	},
	"Luga": {
		"elementType": "water",
		"dropItems": {
			"MagicStaff": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 150,
					"max": 200
				},
				"attackPower": {
					"min": 450,
					"max": 500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"TakeBath": true
				}
			}
		}
	},
	"E2": {
		"elementType": "light",
		"dropItems": {
			"MagicStaff": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 250,
					"max": 300
				},
				"attackPower": {
					"min": 250,
					"max": 300
				},
				"agility": {
					"min": 1.5,
					"max": 1.0
				},
				"expForNext": 200,
				"skills": {
					"ISeeYou": true
				}
			}
		}
	},
	"E3": {
		"elementType": "water",
		"dropItems": {
			"Blade": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 550,
					"max": 600
				},
				"defence": {
					"min": 50,
					"max": 100
				},
				"attackPower": {
					"min": 550,
					"max": 600
				},
				"agility": {
					"min": 1.0,
					"max": 0.7
				},
				"expForNext": 200,
				"skills": {
					"DontMess": true
				}
			}
		}
	},
	"Woolve": {
		"elementType": "tree",
		"dropItems": {
			"SilverCoin": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 150,
					"max": 200
				},
				"attackPower": {
					"min": 450,
					"max": 500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"IHaveTear": true
				}
			}
		}
	},
	"Doki": {
		"elementType": "light",
		"dropItems": {
			"GoldCoin": true,
			"GreenBow": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true,
		"properties": {
			"lv1": {
				"hp": {
					"min": 900,
					"max": 1000
				},
				"defence": {
					"min": 300,
					"max": 400
				},
				"attackPower": {
					"min": 1300,
					"max": 1500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 1000,
				"skills": {
					"ShiningAction": true
				}
			}
		}
	},
	"Gangwoo": {
		"elementType": "tree",
		"dropItems": {
			"GoldCoin": true,
			"Blade": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true,
		"properties": {
			"lv1": {
				"hp": {
					"min": 1400,
					"max": 1500
				},
				"defence": {
					"min": 800,
					"max": 900
				},
				"attackPower": {
					"min": 800,
					"max": 900
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 1000,
				"skills": {
					"Slow": true
				}
			}
		}
	},
	"Hwasa": {
		"elementType": "dark",
		"dropItems": {
			"GoldCoin": true,
			"Sword": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true,
		"properties": {
			"lv1": {
				"hp": {
					"min": 900,
					"max": 1000
				},
				"defence": {
					"min": 300,
					"max": 400
				},
				"attackPower": {
					"min": 1100,
					"max": 1200
				},
				"agility": {
					"min": 1.5,
					"max": 1.0
				},
				"expForNext": 1000,
				"skills": {
					"Breakfast": true
				}
			}
		}
	},
	"Spoon": {
		"elementType": "dark",
		"dropItems": {
			"MagicStaff": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 1400,
					"max": 1500
				},
				"defence": {
					"min": 250,
					"max": 300
				},
				"attackPower": {
					"min": 250,
					"max": 300
				},
				"agility": {
					"min": 0.5,
					"max": 1.0
				},
				"expForNext": 200,
				"skills": {
					"Hungry": true
				}
			}
		}
	},
	"Sopleco": {
		"elementType": "tree",
		"dropItems": {
			"GreenBow": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 150,
					"max": 200
				},
				"attackPower": {
					"min": 450,
					"max": 500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"FinalAttack": true
				}
			}
		}
	},
	"Konga": {
		"elementType": "tree",
		"dropItems": {
			"SilverCoin": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false,
		"properties": {
			"lv1": {
				"hp": {
					"min": 450,
					"max": 500
				},
				"defence": {
					"min": 150,
					"max": 200
				},
				"attackPower": {
					"min": 450,
					"max": 500
				},
				"agility": {
					"min": 1.0,
					"max": 0.5
				},
				"expForNext": 200,
				"skills": {
					"UsingFoce": true
				}
			}
		}
	},
};


module.exports = data;
