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
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"MorningAmericano": true
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
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"TakeBath": true
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
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"IHaveTear": true
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
				"byLevel": {
					"lv1": {
						"expForNext": 1000,
						"skills": {
							"Slow": true
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
				"byLevel": {
					"lv1": {
						"expForNext": 200,
						"skills": {
							"UsingFoce": true
						}
					}
				}
			}
		}
	},
	"my": {
		"property": {
			"hp": {
				"min": 30,
				"max": 50
			},
			"defence": {
				"min": 15,
				"max": 20
			},
			"attackPower": {
				"min": 45,
				"max": 50
			},
			"agility": {
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
