"use strict";

var data = {
	"field": {
		"Pyok": {
			"elementType": "tree",
			"dropItems": {
				"BasicSword": true,
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
			"property": {
				"hp": {
					"default": 1000,
					"min": 90,
					"max": 100
				},
				"defence": {
					"default": 400,
					"min": 30,
					"max": 40
				},
				"attackPower": {
					"default": 1000,
					"min": 90,
					"max": 100
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 5
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"LeafBlast": true
						}
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
			"property": {
				"hp": {
					"default": 3000,
					"min": 250,
					"max": 300
				},
				"defence": {
					"default": 700,
					"min": 60,
					"max": 70
				},
				"attackPower": {
					"default": 800,
					"min": 70,
					"max": 80
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							// "MorningAmericano": true
							"RussianRoulette": true
						}
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
			"property": {
				"hp": {
					"default": 1200,
					"min": 110,
					"max": 120
				},
				"defence": {
					"default": 500,
					"min": 45,
					"max": 50
				},
				"attackPower": {
					"default": 1000,
					"min": 90,
					"max": 100
				},
				"agility": {
					"default": 0.7,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"RussianRoulette": true
						}
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
			"property": {
				"hp": {
					"default": 1500,
					"min": 145,
					"max": 150
				},
				"defence": {
					"default": 500,
					"min": 45,
					"max": 50
				},
				"attackPower": {
					"default": 800,
					"min": 75,
					"max": 80
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							// "TakeBath": true
							"GoodLuck": true
						}
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
			"property": {
				"hp": {
					"default": 1500,
					"min": 145,
					"max": 150
				},
				"defence": {
					"default": 300,
					"min": 25,
					"max": 30
				},
				"attackPower": {
					"default": 1000,
					"min": 50,
					"max": 100
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"ISeeYou": true
						}
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
			"property": {
				"hp": {
					"default": 1600,
					"min": 155,
					"max": 160
				},
				"defence": {
					"default": 1000,
					"min": 50,
					"max": 100
				},
				"attackPower": {
					"default": 1600,
					"min": 155,
					"max": 160
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"DontMess": true
						}
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
			"property": {
				"hp": {
					"default": 1500,
					"min": 145,
					"max": 150
				},
				"defence": {
					"default": 1200,
					"min": 100,
					"max": 120
				},
				"attackPower": {
					"default": 1500,
					"min": 145,
					"max": 150
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							// "IHaveTear": true
							"DontMess": true
						}
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
			"property": {
				"hp": {
					"default": 1000,
					"min": 90,
					"max": 100
				},
				"defence": {
					"default": 400,
					"min": 30,
					"max": 40
				},
				"attackPower": {
					"default": 1500,
					"min": 130,
					"max": 150
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 1000,
						"skills": {
							"ShiningAction": true
						}
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
			"property": {
				"hp": {
					"default": 1500,
					"min": 140,
					"max": 150
				},
				"defence": {
					"default": 900,
					"min": 80,
					"max": 90
				},
				"attackPower": {
					"default": 900,
					"min": 80,
					"max": 90
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 1000,
						"skills": {
							// "Slow": true
							"ShiningAction": true
						}
					}
				}
			}
		},
		"Hwasa": {
			"elementType": "dark",
			"dropItems": {
				"GoldCoin": true,
				"BasicSword": true
			},
			"dropGameMoney": {
				"min": 500,
				"max": 600
			},
			"spawnRate": 5,
			"rating": 5,
			"monster": false,
			"boss": true,
			"property": {
				"hp": {
					"default": 1000,
					"min": 90,
					"max": 100
				},
				"defence": {
					"default": 400,
					"min": 30,
					"max": 40
				},
				"attackPower": {
					"default": 1200,
					"min": 110,
					"max": 120
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 1000,
						"skills": {
							"Breakfast": true
						}
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
			"property": {
				"hp": {
					"default": 2000,
					"min": 15,
					"max": 20
				},
				"defence": {
					"default": 1000,
					"min": 50,
					"max": 100
				},
				"attackPower": {
					"default": 1300,
					"min": 25,
					"max": 30
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"Hungry": true
						}
					}
				}
			}
		},
		"Singi": {
			"elementType": "water",
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
			"property": {
				"hp": {
					"default": 3000,
					"min": 250,
					"max": 300
				},
				"defence": {
					"default": 700,
					"min": 60,
					"max": 70
				},
				"attackPower": {
					"default": 800,
					"min": 70,
					"max": 80
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"DontMess": true
						}
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
			"property": {
				"hp": {
					"default": 1500,
					"min": 45,
					"max": 50
				},
				"defence": {
					"default": 300,
					"min": 15,
					"max": 20
				},
				"attackPower": {
					"default": 500,
					"min": 45,
					"max": 50
				},
				"agility": {
					"default": 1.0,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"FinalAttack": true
						}
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
			"property": {
				"hp": {
					"default": 800,
					"min": 45,
					"max": 50
				},
				"defence": {
					"default": 200,
					"min": 15,
					"max": 20
				},
				"attackPower": {
					"default": 500,
					"min": 45,
					"max": 50
				},
				"agility": {
					"default": 0.5,
					"min": 0,
					"max": 0
				},
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"UsingForce": true
						}
					}
				}
			}
		}
	},
	"my": {
		"property": {
			// hp, defence, attackPower, agility의 경우 당장은 DB 모델링에 반영되어있지 않음
			"hp": {
				"default": 500,
				"min": 30,
				"max": 50
			},
			"defence": {
				"default": 300,
				"min": 15,
				"max": 30
			},
			"attackPower": {
				"default": 500,
				"min": 45,
				"max": 50
			},
			"agility": {
				"default": 1.0,
				"min": 1.0,
				"max": 0.5
			},
			"byLevel": {
				"lv1": {
					"expForNext": 200
				},
				"lv2": {
					"expForNext": 300
				},
				"lv3": {
					"expForNext": 400
				},
				"lv4": {
					"expForNext": 500
				},
				"lv5": {
					"expForNext": 600
				},
				"lv6": {
					"expForNext": 700
				},
				"lv7": {
					"expForNext": 800
				},
				"lv8": {
					"expForNext": 900
				},
				"lv9": {
					"expForNext": 1000
				},
				"lv10": {
					"expForNext": 2000
				}
			}
		}
	}
};


module.exports = data;
