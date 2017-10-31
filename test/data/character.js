"use strict";

var data = {
	"Pyok": {
		"elementType": "tree",
		"dropItems": {
			"sword": true,
			"redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"LeafBlast": true,
					"GreenZone": true
				}
			}
		}
	},
	"Xyz": {
		"elementType": "dark",
		"dropItems": {
			"greenbow": true,
			"silvercoin": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"MorningAmericano": true,
					"HelloWorld": true
				}
			}
		}
	},
	"Inish": {
		"elementType": "fire",
		"dropItems": {
			"bronzecoin": true,
			"blade": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"RussianRoulette": true,
					"Goodluck": true
				}
			}
		}
	},
	"Luga": {
		"elementType": "water",
		"dropItems": {
			"magicstaff": true,
			"redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"TakeBath": true,
					"NoWater" : true
				}
			}
		}
	},
	"E2": {
		"elementType": "light",
		"dropItems": {
			"magicstaff": true,
			"redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"ISeeYou": true,
					"YouSeeMe": true
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
		"boss": false
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
			"Silvercoin": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
			"Goldcoin": true,
			"Greenbow": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true
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
					"name1": true
				}
			}
		}
	},
	"Gangwoo": {
		"elementType": "tree",
		"dropItems": {
			"Goldcoin": true,
			"Blade": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true
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
					"name1": true
				}
			}
		}
	},
	"Hwasa": {
		"elementType": "dark",
		"dropItems": {
			"Goldcoin": true,
			"Sword": true
		},
		"dropGameMoney": {
			"min": 500,
			"max": 600
		},
		"spawnRate": 5,
		"rating": 5,
		"monster": false,
		"boss": true
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
					"name1": true
				}
			}
		}
	},
	"Spoon": {
		"elementType": "dark",
		"dropItems": {
			"Magicstaff": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"name1": true
				}
			}
		}
	},
	"Sopleco": {
		"elementType": "tree",
		"dropItems": {
			"Greenbow": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"name1": true
				}
			}
		}
	},
	"Konga": {
		"elementType": "tree",
		"dropItems": {
			"Silvercoin": true,
			"Redberry": true
		},
		"dropGameMoney": {
			"min": 50,
			"max": 60
		},
		"spawnRate": 20,
		"rating": 2,
		"monster": true,
		"boss": false
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
					"name1": true
				}
			}
		}
	},
};


module.exports = data;
