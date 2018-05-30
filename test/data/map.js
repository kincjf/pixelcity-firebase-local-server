"use strict";

var data = {
	"static": {
		"pixel": {
			"Seoul": {	// 서울 광화문
				"type": "waypoint",
				"lat": 37.5759369,
				"lng": 126.974627,
				"property": {}
			},
			"Busan": {	// 부산 광복로 광복동 주민센터
				"type": "waypoint",
				"lat": 35.099905,
				"lng": 129.030412,
				"property": {}
			},
			"Daejeon": {	// 대전 둔산동 갤러리아 타임월드
				"type": "waypoint",
				"lat": 36.351502,
				"lng": 127.378391,
				"property": {}
			},
			"Gwangju": {	// 광주 국립아시아문화전당
				"type": "waypoint",
				"lat": 35.1470568,
				"lng": 126.9194147,
				"property": {}
			},
			"Jeonju": {		// 전주 경기전 앞
				"type": "waypoint",
				"lat": 35.8140889,
				"lng": 127.1494826,
				"property": {}
			},
			// waypoint 종료

			"DeokjinPark": {
				"type": "normal",
				"lat": 35.84890,
				"lng": 127.12348,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"E3": true,
							"Pyok": true,
							"Spoon": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 3
					},
					"reward": {
						"dropItems": {
							"BronzeRing": true,
							"Redberry": true
						},
						"gameMoney": {
							"min": 300,
							"max": 500
						}
					}
				}
			},
			"SoriHall": {
				"type": "normal",
				"lat": 35.8551,
				"lng": 127.1387,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Spoon": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"Redberry": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 300
						}
					}
				}
			},
			"AJungReservoir": {
				"type": "Boss",
				"lat": 35.82552,
				"lng": 127.17467,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Doki": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 5
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"BasicSword": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			},
			"DragonHeadStreet": {
				"type": "Boss",
				"lat": 35.80918,
				"lng": 127.13686,
				"property": {
					"entranceFee": 15,
					"monster": {
						"list": {
							"Gangwoo": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 1
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"GreenBow": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 500,
							"max": 600
						}
					}
				}
			},
			"HanokVillage": {
				"type": "Boss",
				"lat": 35.81430,
				"lng": 127.15109,
				"property": {
					"entranceFee": 15,
					"monster": {
						"list": {
							"Hwasa": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 2
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"MagicStaff": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 300
						}
					}
				}
			},
			"NationalMuseum": {
				"type": "normal",
				"lat": 35.80112,
				"lng": 127.09038,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"E3": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"SilverCoin": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			},
			"JeonjuRiverside": {
				"type": "Special",
				"lat": 35.8342,
				"lng": 127.1240,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Woolve": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"GoldCoin": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 300
						}
					}
				}
			},
			"WorldcupStadium": {
				"type": "Normal",
				"lat": 35.86810,
				"lng": 127.06585,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Xyz": true,
							"Pyok": true,
							"Sopleco": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"BronzeCoin": true,
							"Blade": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			},
			"HyanGyo": {
				"type": "Normal",
				"lat": 35.8121,
				"lng": 127.15719,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Sopleco": true,
							"Xyz": true,
							"Pyok": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"Blade": true,
							"BronzeCoin": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			},
			"SpecialSpot": {
				"type": "Normal",
				"lat": 35.81161,
				"lng": 127.15767,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Singi": true
						},
						"min": 1,
						"max": 1
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"GreenBow": true,
							"BronzeCoin": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			},
			"Coap": {
				"type": "normal",
				"lat": 35.84055,
				"lng": 127.13173,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"E3": true,
							"Pyok": true,
							"Inish": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 3
					},
					"reward": {
						"dropItems": {
							"BronzeRing": true,
							"BronzeCoin": true
						},
						"gameMoney": {
							"min": 300,
							"max": 500
						}
					}
				}
			},
			"JeonjuUniversity": {
				"type": "normal",
				"lat": 35.80963,
				"lng": 127.08756,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"E3": true,
							"Pyok": true,
							"Inish": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 3
					},
					"reward": {
						"dropItems": {
							"BronzeRing": true,
							"BronzeCoin": true
						},
						"gameMoney": {
							"min": 300,
							"max": 500
						}
					}
				}
			},
			"TurtleRock": {
				"type": "Normal",
				"lat": 35.8352130,
				"lng": 127.1374249,
				"property": {
					"entranceFee": 10,
					"monster": {
						"list": {
							"Konga": true,
							"Pyok": true,
							"Inish": true
						},
						"min": 1,
						"max": 3
					},
					"ratingLimit": {
						"min": 1,
						"max": 5
					},
					"reward": {
						"dropItems": {
							"GreenBow": true,
							"BronzeCoin": true
						},
						"gameMoney": {
							"min": 100,
							"max": 500
						}
					}
				}
			}
		},
		"area": {},
		"safezone": {
			"DeokjinPark": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.847617,
						"lng": 127.122567
					},
					"p2": {
						"lat": 35.847356,
						"lng": 127.122326
					},
					"p3": {
						"lat": 35.847074,
						"lng": 127.122357
					},
					"p4": {
						"lat": 35.847183,
						"lng": 127.122700
					},
					"p5": {
						"lat": 35.847368,
						"lng": 127.122877
					}
				}
			},
			"SoriHall": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.854978,
						"lng": 127.137574
					},
					"p2": {
						"lat": 35.854967,
						"lng": 127.137727
					},
					"p3": {
						"lat": 35.854774,
						"lng": 127.137716
					},
					"p4": {
						"lat": 35.854774,
						"lng": 127.138057
					},
					"p5": {
						"lat": 35.854590,
						"lng": 127.138055
					},
					"p6": {
						"lat": 35.854597,
						"lng": 127.137568
					}
				}
			},
			"AJungReservoir": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.825309,
						"lng": 127.174562
					},
					"p2": {
						"lat": 35.825313,
						"lng": 127.174618
					},
					"p3": {
						"lat": 35.825279,
						"lng": 127.174612
					},
					"p4": {
						"lat": 35.825275,
						"lng": 127.174584
					}
				}
			},
			"DragonHeadStreet": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.809399,
						"lng": 127.137563
					},
					"p2": {
						"lat": 35.809461,
						"lng": 127.137633
					},
					"p3": {
						"lat": 35.809432,
						"lng": 127.137683
					},
					"p4": {
						"lat": 35.809343,
						"lng": 127.137574
					}
				}
			},
			"HanokVillage": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.814166,
						"lng": 127.149302
					},
					"p2": {
						"lat": 35.814209,
						"lng": 127.149685
					},
					"p3": {
						"lat": 35.814078,
						"lng": 127.149721
					},
					"p4": {
						"lat": 35.814001,
						"lng": 127.149420
					}
				}
			},
			"NationalMuseum": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.801208,
						"lng": 127.090416
					},
					"p2": {
						"lat": 35.801189,
						"lng": 127.090596
					},
					"p3": {
						"lat": 35.801026,
						"lng": 127.090538
					},
					"p4": {
						"lat": 35.801063,
						"lng": 127.090372
					}
				}
			},
			"WorldcupStadium": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.869230,
						"lng": 127.067329
					},
					"p2": {
						"lat": 35.869257,
						"lng": 127.067844
					},
					"p3": {
						"lat": 35.869154,
						"lng": 127.067849
					},
					"p4": {
						"lat": 35.869060,
						"lng": 127.067350
					}
				}
			},
			"HyanGyo": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.812591,
						"lng": 127.157198
					},
					"p2": {
						"lat": 35.812593,
						"lng": 127.157258
					},
					"p3": {
						"lat": 35.812301,
						"lng": 127.157268
					},
					"p4": {
						"lat": 35.812297,
						"lng": 127.157209
					}
				}
			},
			"SpecialSpot": {		// 덕진소방서 사무실로 하자
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.841836,
						"lng": 127.135832
					},
					"p2": {
						"lat": 35.841880,
						"lng": 127.136048
					},
					"p3": {
						"lat": 35.841757,
						"lng": 127.136117
					},
					"p4": {
						"lat": 35.841693,
						"lng": 127.135897
					}
				}
			},
			"Coap": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.840628,
						"lng": 127.131658
					},
					"p2": {
						"lat": 35.840606,
						"lng": 127.131850
					},
					"p3": {
						"lat": 35.840489,
						"lng": 127.131828
					},
					"p4": {
						"lat": 35.840433,
						"lng": 127.131644
					}
				}
			},
			"JeonjuUniversity": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.813909,
						"lng": 127.088892
					},
					"p2": {
						"lat": 35.813997,
						"lng": 127.090448
					},
					"p3": {
						"lat": 35.813780,
						"lng": 127.090382
					},
					"p4": {
						"lat": 35.813539,
						"lng": 127.089257
					}
				}
			},
			"TurtleRock": {
				"type": "polygon",
				"height": 100,		// 단위: m
				"radius": 0,		// 단위: m
				"coord": {
					"p1": {
						"lat": 35.835170,
						"lng": 127.137400
					},
					"p2": {
						"lat": 35.835254,
						"lng": 127.137496
					},
					"p3": {
						"lat": 35.835034,
						"lng": 127.137706
					},
					"p4": {
						"lat": 35.834949,
						"lng": 127.137624
					}
				}
			}
		},
		"waypoint": {
			"Seoul": {
				"minRequiredLevel": 1,
				"maxRequiredLevel": 10
			},
			"Busan": {
				"minRequiredLevel": 1,
				"maxRequiredLevel": 10
			},
			"Daejeon": {
				"minRequiredLevel": 1,
				"maxRequiredLevel": 10
			},
			"Gwangju": {
				"minRequiredLevel": 5,
				"maxRequiredLevel": 20
			},
			"Jeonju": {
				"minRequiredLevel": 1,
				"maxRequiredLevel": 20
			}
		},
		"dynamic": {
			"dots": {
				"normal": {
					"exp": {
						"min": 100,
						"max": 150
					},
					"gameMoney": {
						"min": 150,
						"max": 200
					},
					"item": {
						"minRating": 1,
						"maxRating": 2
					},
					"cash": {
						"min": 0,
						"max": 0
					},
					"spawnRate": 10
				},
				"good": {
					"exp": {
						"min": 200,
						"max": 250
					},
					"gameMoney": {
						"min": 300,
						"max": 350
					},
					"item": {
						"minRating": 2,
						"maxRating": 3
					},
					"cash": {
						"min": 1,
						"max": 3
					},
					"spawnRate": 0
				},
				"better": {
					"exp": {
						"min": 300,
						"max": 350
					},
					"gameMoney": {
						"min": 400,
						"max": 450
					},
					"item": {
						"minRating": 3,
						"maxRating": 4
					},
					"cash": {
						"min": 1,
						"max": 5
					},
					"spawnRate": 30
				},
				"best": {
					"exp": {
						"min": 400,
						"max": 450
					},
					"gameMoney": {
						"min": 500,
						"max": 550
					},
					"item": {
						"minRating": 4,
						"maxRating": 5
					},
					"cash": {
						"min": 5,
						"max": 10
					},
					"spawnRate": 60
				}
			},
			"eventItem": {}
		}
	}
};

module.exports = data;
