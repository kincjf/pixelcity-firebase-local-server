"use strict";

// 입력 옵션별 자세한 내용은 DB 설계 문서 참고
var data = {
	"static": {
		"starting": {
			"Seoul": {	// 서울 광화문
				"lat": 37.5759369,
				"lng": 126.974627,
				"alt": 0,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Busan": {	// 부산 광복로 광복동 주민센터
				"lat": 35.099905,
				"lng": 129.030412,
				"alt": 0,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Daejeon": {	// 대전 둔산동 갤러리아 타임월드
				"lat": 36.351502,
				"lng": 127.378391,
				"alt": 0,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Gwangju": {	// 광주 국립아시아문화전당
				"lat": 35.1470568,
				"lng": 126.9194147,
				"alt": 0,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju": {		// 전주 경기전 앞
				"lat": 35.8140889,
				"lng": 127.1494826,
				"alt": 0,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			}
		},
		"single": {
			"Seoul-Gwanghwamun": {		// 서울 광화문
				"type": "waypoint",  // hanok, building, booth, waypoint, safezone
				"shape": "pixel",  // pixel, line, polygon
				"coord": {
					"p1": {
						"lat": 37.5759369,
						"lng": 126.974627,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Busan-GwangbokResidentCenter": {		// 부산 광복로 광복동 주민센터
				"type": "waypoint",  // hanok, building, booth, waypoint, safezone
				"shape": "pixel",  // pixel, line, polygon
				"coord": {
					"p1": {
						"lat": 35.099905,
						"lng": 129.030412,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Daejeon-GalleriaStore": {		// 대전 갤러리아 백화점 광복로 광복동 주민센터
				"type": "waypoint",  // hanok, building, booth, waypoint, safezone
				"shape": "pixel",  // pixel, line, polygon
				"coord": {
					"p1": {
						"lat": 36.351502,
						"lng": 127.378391,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Gwangju-AsiaComplex": {	// 광주 국립아시아문화전당
				"type": "waypoint",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.1470568,
						"lng": 126.9194147,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-Gyeongjeon": {		// 전주 경기전 앞
				"type": "waypoint",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.8140889,
						"lng": 127.1494826,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			// end of waypoint

			"Jeonju-DeokjinPark": {		// 전주 덕진공원
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.84890,
						"lng": 127.12348,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-SoriHall": {		// 전주 소리의전당
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.8551,
						"lng": 127.1387,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-AJungReservoir": {		// 전주 아중저수지
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.82552,
						"lng": 127.17467,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-DragonHeadStreet": {		// 전주 용머리고개
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.80918,
						"lng": 127.13686,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HanokVillage": {		// 전주 한옥마을
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.81430,
						"lng": 127.15109,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-NationalMuseum": {		// 전주 국립박물관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.80112,
						"lng": 127.09038,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-Riverside": {		// 전주 천변
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.8342,
						"lng": 127.1240,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-WorldcupStadium": {		// 전주 월드컵 경기장
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.86810,
						"lng": 127.06585,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HyanGyo": {		// 전주 향교
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.8121,
						"lng": 127.15719,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "WayPoint1",
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			//** 여기서부터.. **//

			"modern_build_01": {		//국립무형유산원
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.810387,
						"lng": 127.157990,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p2": {
						"lat": 35.809657,
						"lng": 127.157919,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.809484,
						"lng": 127.160751,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p4": {
						"lat": 35.810214,
						"lng": 127.160811,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "Modern_Muhyung",
						"positionX": 0,
						"positionY": 0,
						"positionZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "modern_01",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"modern_build_01-1": {		//무형유산원 주차장(좌)
				"type": "area",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.810343,
						"lng": 127.157409,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.810315,
						"lng": 127.157924,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.809967,
						"lng": 127.157895,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.809997,
						"lng": 127.157375,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "Modern_Parking_01",
						"positionX": 0,
						"positionY": 0,
						"positionZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "modern_01",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"modern_build_01-2": {		//무형유산원 주차장(우)
				"type": "area",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.810403,
						"lng": 127.160916,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.810411,
						"lng": 127.161353,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.809677,
						"lng": 127.161280,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.809709,
						"lng": 127.160810,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "Modern_Parking_02",
						"positionX": 0,
						"positionY": 0,
						"positionZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "modern_01",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

		"modern_build_02-1": {		// 한벽문화관1관(좌)
			"type": "building",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812279,
					"lng": 127.158403,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812314,
					"lng": 127.158732,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.812158,
					"lng": 127.158757,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.812114,
					"lng": 127.158429,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Modern_Hanbyuk_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"modern_build_02-2": {		// 한벽문화관2관(중)
			"type": "building",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812210,
					"lng": 127.158560,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812252,
					"lng": 127.158979,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.812150,
					"lng": 127.159004,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.812107,
					"lng": 127.158579,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Modern_Hanbyuk_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"modern_build_02-3": {		//한벽문화관3관(우)
			"type": "building",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812267,
					"lng": 127.158903,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812296,
					"lng": 127.159136,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.812199,
					"lng": 127.159151,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.812179,
					"lng": 127.158921,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Modern_Hanbyuk_03",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"modern_build_03-1": {		// 한벽루1관(하단)
			"type": "building",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.811945,
					"lng": 127.159179,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.811879,
					"lng": 127.159188,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811900,
					"lng": 127.159443,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811971,
					"lng": 127.159431,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Modern_Hanbyuk-Ru_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"modern_build_03-2": {		// 한벽루2관(상단)
			"type": "building",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812216,
					"lng": 127.159318,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812224,
					"lng": 127.159422,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811906,
					"lng": 127.159373,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.811913,
					"lng": 127.159478,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Modern_Hanbyuk-Ru_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_01": { 		//한벽문화관 한옥1관(하단)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.811908,
					"lng": 127.158211,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811742,
					"lng": 127.158233,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811750,
					"lng": 127.158373,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.811921,
					"lng": 127.158343,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Hanbyuk_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_02": {			//한벽문화관 한옥2관(상단)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812036,
					"lng": 127.158311,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812066,
					"lng": 127.158546,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811968,
					"lng": 127.158564,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811945,
					"lng": 127.158326,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Hanbyuk_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_03-1": {		//완판본문화관1관(상)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812008,
					"lng": 127.157796,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812035,
					"lng": 127.158099,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811947,
					"lng": 127.158108,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811918,
					"lng": 127.157805,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Wanpan_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_03-2": {		//완판본문화관2관(하)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.811935,
					"lng": 127.158008,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.811947,
					"lng": 127.158108,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811826,
					"lng": 127.158125,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811821,
					"lng": 127.158016,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Wanpan_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_04-1": {		//향교문화관1관(상)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.811978,
					"lng": 127.157308,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.812012,
					"lng": 127.157660,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811912,
					"lng": 127.157672,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811888,
					"lng": 127.157320,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Hyanggyo_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"hanok_build_04-2": {		//향교문화관2관(하)
			"type": "hanok",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.811888,
					"lng": 127.157320,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": false
				},
				{
					"lat": 35.811895,
					"lng": 127.157437,
					"alt": 0,
					"isWidthPoint": true,
					"isLengthPoint": true
				},
				{
					"lat": 35.811782,
					"lng": 127.157456,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": true
				},
				{
					"lat": 35.811769,
					"lng": 127.157334,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Hanok_Hyanggyo_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"festival_booth_01": {		//임의설치 부스, 천서로
			"type": "booth",
			"shape": "pixel",
			"coord": [
				{
					"lat": 35.810783,
					"lng": 127.158701,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Festival_Booth_Small",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},

		"parking_area_01": {		//남부시장 주차장
			"type": "area",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812236,
					"lng": 127.146117,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.811078,
					"lng": 127.149473,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.810830,
					"lng": 127.149428,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.812037,
					"lng": 127.146078,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Parking_Area_01",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},
			"parking_area_02": {		//남부시장 주차정
				"type": "area",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812871,
						"lng": 127.142063,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812430,
						"lng": 127.145365,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					},
					"p3": {
						"lat": 35.812192,
						"lng": 127.145287,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					},
					"p4": {
						"lat": 35.812669,
						"lng": 127.142057,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					}
				},
				"model": {
					"top": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					},
					"middle": {
						"objectId": "Parking_Area",
						"positionX": 0,
						"positionY": 0,
						"positionZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0
					},
					"bottom": {
						"objectId": null,
						"positionX": null,
						"positionY": null,
						"positionZ": null,
						"scaleX": null,
						"scaleY": null,
						"scaleZ": null,
						"rotationX": null,
						"rotationY": null,
						"rotationZ": null
					}
				},
				"scaleX": 1,
				"scaleY": 1,
				"scaleZ": 1,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			}
		},
		"parking_area_02": {		//남부시장 주차정
			"type": "area",
			"shape": "polygon",
			"coord": [
				{
					"lat": 35.812871,
					"lng": 127.142063,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.812430,
					"lng": 127.145365,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.812192,
					"lng": 127.145287,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				},
				{
					"lat": 35.812669,
					"lng": 127.142057,
					"alt": 0,
					"isWidthPoint": false,
					"isLengthPoint": false
				}
			],
			"model": {
				"top": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				},
				"middle": {
					"objectId": "Parking_Area_02",
					"positionX": 0,
					"positionY": 0,
					"positionZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0
				},
				"bottom": {
					"objectId": null,
					"positionX": null,
					"positionY": null,
					"positionZ": null,
					"scaleX": null,
					"scaleY": null,
					"scaleZ": null,
					"rotationX": null,
					"rotationY": null,
					"rotationZ": null
				}
			},
			"hanok_03": {
				"tileColor": null,
				"coord": null
			},
			"hanok_04": {
				"tileColor": null,
				"coord": null
			}
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
				"spawnRate": 50
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
				"spawnRate": 40
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
				"spawnRate": 20
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
				"spawnRate": 10
			}
		},
		"eventItem": {}
	}
};

module.exports = data;
