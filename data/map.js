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
		"image": {

		},
		"single": {
			/* default */

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
			// end of waypoint

			/*
			/*		전주 Waypoint
			*/

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
					"detailUrl": "https://place.map.daum.net/27603721",
					"images": {
						"Jeonju-DeokjinPark_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Jeonju-SoriHall": {		// 전주 소리문화의전당
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
					"detailUrl": "https://place.map.daum.net/8150195",
					"images": {
						"Jeonju-SoriHall_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
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
					"detailUrl": "https://place.map.daum.net/27233370",
					"images": {
						"Jeonju-AJungReservoir_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
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
					"detailUrl": "https://place.map.daum.net/8023777",
					"images": {
						"Jeonju-DragonHeadStreet_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Jeonju-DragonHeadStreet": {		// 전주 한옥마을
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
					"detailUrl": "https://place.map.daum.net/10731896",
					"images": {
						"Jeonju-DragonHeadStreet_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
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
					"detailUrl": "https://place.map.daum.net/8217828",
					"images": {
						"Jeonju-NationalMuseum_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
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
					"detailUrl": "https://place.map.daum.net/18488794",
					"images": {
						"Jeonju-Riverside_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
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
					"detailUrl": "https://place.map.daum.net/8540309",
					"images": {
						"Jeonju-WorldcupStadium_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},



			/* 승철이형 waypoint 추가본,
			 * REAL DATA
			*/
			"Jeonju-CheongYeonLu": {		// 전주 청연루
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.810867,
						"lng": 127.153173,
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
					"detailUrl": "https://place.map.daum.net/19711814",
					"images": {
						"Jeonju-CheongYeonLu_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-WanpanCulturalCenter": {		// 전주 완판본문화관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811942,
						"lng": 127.157946,
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
					"detailUrl": "http://www.bibimbapfest.com/kr/inner.php?sMenu=C4000",
					"images": {
						"Jeonju-WanpanCulturalCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-EojinMuseum": {		// 전주 어진박물관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.816242,
						"lng": 127.149402,
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
					"detailUrl": "https://place.map.daum.net/13031899",
					"images": {
						"Jeonju-EojinMuseum_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HanbyeokCulturalCenter": {		// 전주 한벽문화관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.812051,
						"lng": 127.158402,
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
					"detailUrl": "http://www.bibimbapfest.com/kr/inner.php?sMenu=C1000",  // 축제링크
					"images": {
						"Jeonju-HanbyeokCulturalCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HyangGyoCulturalCenter": {		// 전주 향교문화관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811996,
						"lng": 127.157245,
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
					"detailUrl": "http://www.bibimbapfest.com/kr/inner.php?sMenu=C3000",
					"images": {
						"Jeonju-HyangGyoCulturalCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-JamanPaintingVillage": {		// 전주 자만벽화마을
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.814220,
						"lng": 127.157220,
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
					"detailUrl": "https://place.map.daum.net/26428896",
					"images": {
						"Jeonju-JamanPaintingVillage_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-JeondongChurch": {		// 전주 전동성당
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.813387,
						"lng": 127.149256,
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
					"detailUrl": "https://place.map.daum.net/12760599",
					"images": {
						"Jeonju-JeondongChurch_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-CheonSeoRo": {		// 전주 천서로
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.810601,
						"lng": 127.157382,
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
					"detailUrl": "http://dmaps.kr/esz8v",
					"images": {
						"Jeonju-CheonSeoRo_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-ChunDongRo": {		// 전주 천동로
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811531,
						"lng": 127.157664,
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
					"detailUrl": "http://dmaps.kr/esz9b",
					"images": {
						"Jeonju-ChunDongRo_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-FanCultureCenter": {		// 전주 부채박물관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.809831,
						"lng": 127.153121,
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
					"detailUrl": "https://place.map.daum.net/26801304",
					"images": {
						"Jeonju-FanCultureCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-GyeongGijeon": {		// 전주 경기전
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.814815,
						"lng": 127.149906,
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
					"detailUrl": "https://place.map.daum.net/10170551",
					"images": {
						"Jeonju-GyeongGijeon_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HyangGyo": {		// 전주 향교
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.812131,
						"lng": 127.157196,
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
					"detailUrl": "https://place.map.daum.net/8064969",
					"images": {
						"Jeonju-HyangGyo_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-SeongsimHighSchool": {		// 전주 성심여고
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.813427,
						"lng": 127.150311,
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
					"detailUrl": "https://place.map.daum.net/8412292",
					"images": {
						"Jeonju-SeongsimHighSchool_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-TraditionalCultureTrainingCenter": {		// 전주 전통문화연수원
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.812439,
						"lng": 127.156531,
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
					"detailUrl": "https://place.map.daum.net/17087483",
					"images": {
						"Jeonju-TraditionalCultureTrainingCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-KMU": {		// 전주 국립무형문화유산원
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.810193,
						"lng": 127.160612,
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
					"detailUrl": "https://place.map.daum.net/18888200",
					"images": {
						"Jeonju-KMU_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-NamcheonBridgeIntersection": {		// 전주 남천교진입로
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811090,
						"lng": 127.153119,
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
					"detailUrl": "https://place.map.daum.net/8233336",
					"images": {
						"Jeonju-NamcheonBridgeIntersection_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-Ohmokgyo": {		// 전주 오목교
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811238,
						"lng": 127.158323,
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
					"detailUrl": "https://place.map.daum.net/15159893",
					"images": {
						"Jeonju-Ohmokgyo_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-Omogdae": {		// 전주 오목대
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.814040,
						"lng": 127.154461,
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
					"detailUrl": "https://place.map.daum.net/8458699",
					"images": {
						"Jeonju-Omogdae_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-PungnamGate": {		// 전주 풍남문
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.813451,
						"lng": 127.147593,
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
					"detailUrl": "https://place.map.daum.net/8138264",
					"images": {
						"Jeonju-PungnamGate_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-SsajeonBridge": {		// 전주 싸전다리
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.810615,
						"lng": 127.149739,
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
					"detailUrl": "https://place.map.daum.net/7985144",
					"images": {
						"Jeonju-SsajeonBridge_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Jeonju-LuxuryCenter": {		// 전주 명품관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.814845,
						"lng": 127.153608,
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
					"detailUrl": "https://place.map.daum.net/21608468",
					"images": {
						"Jeonju-LuxuryCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-HandWritingCenter": {		// 전주 강암서예관
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.811261,
						"lng": 127.152484,
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
					"detailUrl": "https://place.map.daum.net/8064458",
					"images": {
						"Jeonju-HandWritingCenter_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Jeonju-CentralElementarySchool": {		// 전주 중앙초등학교
				"type": "safezone",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.8148906,
						"lng": 127.151373,
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
					"detailUrl": "https://place.map.daum.net/8056883",
					"images": {
						"Jeonju-CentralElementarySchool_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},



			//** 여기서부터.. **//

			"Build-KMU": {		//국립무형유산원
				"markerType": {
					"restroom": true
				},
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
				"scaleX": 26.0,
				"scaleY": 1.5,
				"scaleZ": 8.0,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "build_kmu",

				/*
				"property": {
					"detailUrl": "http://www.bibimbapfest.com/kr/inner.php?sMenu=C3000",
					"images": {
						"bibimbob_street1_1080x1080": ".jpg",
						"collaborate_1080x1080": ".jpg"
					},
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
				*/
			},
			"Build-KMUParking-01": {		//무형유산원 주차장(좌)
				"markerType": {
					"parking": true
				},
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
				"scaleX": 6.5,
				"scaleY": 1.5,
				"scaleZ": 5.0,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "build_kmu",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-KMUParking-02": {		//무형유산원 주차장(우)
				"markerType": {
					"parking": true
				},
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
				"scaleX": 4.5,
				"scaleY": 1.5,
				"scaleZ": 8.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "build_kmu",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-HanbyeokCulturalCenter-01": {		// 한벽문화관1관(좌)
				"markerType": {
					"parking": true,
					"restroom": true
				},
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812279,
						"lng": 127.158403,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812314,
						"lng": 127.158732,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812158,
						"lng": 127.158757,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812114,
						"lng": 127.158429,
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
				"scaleX": 4.0,
				"scaleY": 1.5,
				"scaleZ": 2.0,
				"rotationX": 0,
				"rotationY": -6.38,
				"rotationZ": 0,
				"groupId": "build_hanbyeok",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-HanbyeokCulturalCenter-02": {		// 한벽문화관2관(중)
				"markerType": {
					"info": true
				},
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812210,
						"lng": 127.158560,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812252,
						"lng": 127.158979,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812150,
						"lng": 127.159004,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812107,
						"lng": 127.158579,
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
				"scaleX": 4.0,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -7.28,
				"rotationZ": 0,
				"groupId": "build_hanbyeok",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-HanbyeokCulturalCenter-03": {		//한벽문화관 3관(우)
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812267,
						"lng": 127.158903,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812296,
						"lng": 127.159136,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812199,
						"lng": 127.159151,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812179,
						"lng": 127.158921,
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
				"scaleX": 2.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -8.05,
				"rotationZ": 0,
				"groupId": "build_hanbyeok",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-HanbyeokRu-01": {		// 한벽루1관(하단)
				"markerType": {
					"restroom": true
				},
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.811945,
						"lng": 127.159179,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.811879,
						"lng": 127.159188,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811900,
						"lng": 127.159443,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811971,
						"lng": 127.159431,
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
				"scaleX": 2.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -6.77,
				"rotationZ": 0,
				"groupId": "build_hanbyeokRu",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Build-HanbyeokRu-02": {		// 한벽루2관(상단)
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812216,
						"lng": 127.159318,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812224,
						"lng": 127.159422,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811906,
						"lng": 127.159373,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": false
					},
					"p4": {
						"lat": 35.811913,
						"lng": 127.159478,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
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
				"scaleX": 1.0,
				"scaleY": 1.5,
				"scaleZ": 4.0,
				"rotationX": 0,
				"rotationY": -96.34,
				"rotationZ": 0,
				"groupId": "build_hanbyeokRu",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HanbyeokCulturalCenter-01": {  		//한벽문화관 한옥1관(하단)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.811908,
						"lng": 127.158211,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p2": {
						"lat": 35.811742,
						"lng": 127.158233,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811750,
						"lng": 127.158373,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p4": {
						"lat": 35.811921,
						"lng": 127.158343,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 4.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 82.49,
				"rotationZ": 0,
				"groupId": "hanok_hanbyeok",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HanbyeokCulturalCenter-02": {			//한벽문화관 한옥2관(상단)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812036,
						"lng": 127.158311,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812066,
						"lng": 127.158546,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811968,
						"lng": 127.158564,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811945,
						"lng": 127.158326,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -7.15,
				"rotationZ": 0,
				"groupId": "hanok_hanbyeok",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-WanpanCulturalCenter-01": {		//완판본문화관1관(상)
				"markerType": {
					"restroom": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812008,
						"lng": 127.157796,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812035,
						"lng": 127.158099,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811947,
						"lng": 127.158108,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811918,
						"lng": 127.157805,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -4.27,
				"rotationZ": 0,
				"groupId": "hanok_wanpan",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-WanpanCulturalCenter-02": {		//완판본문화관2관(하)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.811935,
						"lng": 127.158008,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.811947,
						"lng": 127.158108,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811826,
						"lng": 127.158125,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811821,
						"lng": 127.158016,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -95.01,
				"rotationZ": 0,
				"groupId": "hanok_wanpan",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-WanpanCulturalCenter-03": {		//완판본문화관 3관, 정문
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.81174156,
						"lng": 127.15778119,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.81175711,
						"lng": 127.15794719,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.81169175,
						"lng": 127.15795951,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.81167170,
						"lng": 127.15779073,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -182.383,
				"rotationZ": 0,
				"groupId": "hanok_wanpan",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyoCulturalCenter-01": {		//향교문화관1관(상)
				"markerType": {
					"info": true,
					"restroom": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.811978,
						"lng": 127.157308,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812012,
						"lng": 127.157660,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811912,
						"lng": 127.157672,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811888,
						"lng": 127.157320,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -8.89,
				"rotationZ": 0,
				"groupId": "hanok_hyangGyoCenter",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyoCulturalCenter-02": {		//향교문화관2관(하)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.811888,
						"lng": 127.157320,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.811895,
						"lng": 127.157437,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.811782,
						"lng": 127.157456,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.811769,
						"lng": 127.157334,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -98.03,
				"rotationZ": 0,
				"groupId": "hanok_hyangGyoCenter",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-01": {		//향교 1관, 만화루
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812215,
						"lng": 127.1571417,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8122209,
						"lng": 127.1573008,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812122,
						"lng": 127.1573089,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812115,
						"lng": 127.157147,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-02": {		//향교 2관, 내심문
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8123124,
						"lng": 127.1571723,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812317,
						"lng": 127.1572636,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8122717,
						"lng": 127.1572691,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812265,
						"lng": 127.157176,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.0,
				"scaleY": 1.5,
				"scaleZ": 0.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-03": {		//향교 3관, 서무
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8126304,
						"lng": 127.1568756,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812635,
						"lng": 127.1569738,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8123622,
						"lng": 127.1570009,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8123555,
						"lng": 127.1569013,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -93.369,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-04": {		//향교 4관, 동무
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8126511,
						"lng": 127.1574316,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8126555,
						"lng": 127.157529,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812389,
						"lng": 127.15755011,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8123875,
						"lng": 127.1574408,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": -93.353,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-05": {		//향교 5관, 대성전
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8127856,
						"lng": 127.157111,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812793,
						"lng": 127.1572756,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8126862,
						"lng": 127.157286,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812677,
						"lng": 127.1571164,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			
			/* 19.01.14
			 * 기록분 */

			"Hanok-HyangGyo-06": {		//향교 6관, 동재
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.81305113,
						"lng": 127.15740619,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.81304992,
						"lng": 127.15747396,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.81290571,
						"lng": 127.15747783,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.81290129,
						"lng": 127.15740866,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 0.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -92.011,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-07": {		//향교 7관, 서재
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.81302477,
						"lng": 127.15688886,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.81302919,
						"lng": 127.15695111,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.81288385,
						"lng": 127.15696327,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.81288055,
						"lng": 127.15689964,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 0.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -92.883,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-HyangGyo-08": {		//향교 8관, 명륜당
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.81315188,
						"lng": 127.15703434,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.81316395,
						"lng": 127.15728470,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.81306255,
						"lng": 127.15729142,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.81305382,
						"lng": 127.15707287,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.0,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_hyanggyo",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-TraditionalCultureTrainingCenter": {		// 전주 전통문화연수원
				"markerType": {
					"restroom": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.81269857,
						"lng": 127.15650233,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8127106,
						"lng": 127.15676238,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.81259458,
						"lng": 127.15676768,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.81258364,
						"lng": 127.15651040,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 2.0,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -181.926,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			// 추가본 (scale, rotation 지정 X)

			"Hanok-PostOffice": {		// 교동 우편취급국
				"markerType": {
					"info": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8121053,
						"lng": 127.1552964,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8121130,
						"lng": 127.1554334,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8120217,
						"lng": 127.1554304,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8120219,
						"lng": 127.1552963,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-HyundaiMarket": {		// 현대슈퍼마켓
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8119560,
						"lng": 127.1557000,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8119660,
						"lng": 127.1558121,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8118905,
						"lng": 127.1558244,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8118828,
						"lng": 127.1557109,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Gyeonggi_01": {		// 경기전 1관(정문)
				"markerType": {
					"info": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8143191,
						"lng": 127.1498664,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8143403,
						"lng": 127.1500325,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8142175,
						"lng": 127.1500599,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8142019,
						"lng": 127.1498939,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Gyeonggi_02": {		// 경기전 2관
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8148915,
						"lng": 127.1497721,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8149128,
						"lng": 127.1499132,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8148226,
						"lng": 127.1499352,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8148036,
						"lng": 127.1497940,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Gyeonggi_03": {		// 경기전 3관
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8151338,
						"lng": 127.1497255,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8151595,
						"lng": 127.1498722,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8150592,
						"lng": 127.1498927,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8150448,
						"lng": 127.1497502,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			
			"Hanok-Gyeonggi_04": {		// 경기전 4관
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8153907,
						"lng": 127.1496693,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8154153,
						"lng": 127.1498353,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8152959,
						"lng": 127.1498572,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8152735,
						"lng": 127.14969538,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"Hanok-Gyeonggi_05": {		// 경기전 5관(전주사고)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8155581,
						"lng": 127.1500652,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8155737,
						"lng": 127.1501648,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8154678,
						"lng": 127.1501950,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8154454,
						"lng": 127.1500954,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": -90.0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Gyeonggi_06": {		// 경기전 6관(어진 박물관)
				"markerType": {
					"info": true,
					"restroom": true
				},
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8162734,
						"lng": 127.1492048,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8162866,
						"lng": 127.1494732,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8161796,
						"lng": 127.1494813,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8161607,
						"lng": 127.1492129,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Gyeonggi_07": {		// 경기전 7관(조경단)
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8166883,
						"lng": 127.1498847,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8167185,
						"lng": 127.1499982,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8166273,
						"lng": 127.1500271,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8166049,
						"lng": 127.1499178,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "hanok_gyeonggi",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Hanok-Pungnam": {		// 풍남문
				"type": "hanok",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.8135414,
						"lng": 127.1474584,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.8135930,
						"lng": 127.1476507,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.8134825,
						"lng": 127.1476961,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.8134241,
						"lng": 127.1475065,
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
						"objectId": "Object_Hanok",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			
			"festival_booth_01": {		//임의설치 부스, 천서로
				"markerType": {
					"info": true
				},
				"type": "booth",
				"shape": "pixel",
				"coord": {
					"p1": {
						"lat": 35.810783,
						"lng": 127.158701,
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
						"objectId": "Festival_Booth",
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
				"scaleX": 0.5,
				"scaleY": 1.5,
				"scaleZ": 0.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"parking_area_01": {		//남부시장 주차장 1
				"markerType": {
					"parking": true
				},
				"type": "area",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812236,
						"lng": 127.146117,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.811078,
						"lng": 127.149473,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.810830,
						"lng": 127.149428,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.812037,
						"lng": 127.146078,
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 0.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			"parking_area_02": {		//남부시장 주차장 2
				"markerType": {
					"parking": true
				},
				"type": "area",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.812871,
						"lng": 127.142063,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.812430,
						"lng": 127.145365,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.812192,
						"lng": 127.145287,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
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
				"scaleX": 3.0,
				"scaleY": 1.5,
				"scaleZ": 0.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": null,
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
			
		},

			// 군산(추가예정...이었음)

			/*
			"Kunsan_01": {		// 베스트 웨스턴 호텔
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.9485156,
						"lng": 126.5837097,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.9485399,
						"lng": 126.5842208,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.9483822,
						"lng": 126.5842341,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.9483478,
						"lng": 126.5837230,
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
						"objectId": "Object_Hotel",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "kunsan",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},

			"Kunsan_02": {		// 
				"type": "building",
				"shape": "polygon",
				"coord": {
					"p1": {
						"lat": 35.9496494,
						"lng": 126.5832174,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": false
					},
					"p2": {
						"lat": 35.9496575,
						"lng": 126.5835832,
						"alt": 0,
						"isWidthPoint": true,
						"isLengthPoint": true
					},
					"p3": {
						"lat": 35.9490899,
						"lng": 126.5836388,
						"alt": 0,
						"isWidthPoint": false,
						"isLengthPoint": true
					},
					"p4": {
						"lat": 35.9483478,
						"lng": 126.5837230,
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
						"objectId": "Object_Hotel",
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
				"scaleX": 1.5,
				"scaleY": 1.5,
				"scaleZ": 1.5,
				"rotationX": 0,
				"rotationY": 0,
				"rotationZ": 0,
				"groupId": "kunsan",
				"property": {
					"minRequiredLevel": 0,
					"maxRequiredLevel": 0
				}
			},
		*/

		"group": {
			"build_kmu": {		// 무형유산원
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"build_hanbyeok": {		// 한벽문화관
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"build_hanbyeokRu": {		// 한벽루
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"hanok_hanbyeok": {		// 한벽문화관(한옥)
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"hanok_wanpan": {		// 완판본문화관
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"hanok_hyangGyoCenter": {		// 향교문화관
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"hanok_hyanggyo": {		// 향교
				"type": {
					"building": true
				},
				"tileColor": null,
				"coord": null
			},
			"hanok_gyeonggi": {	//경기전
				"type": {
					"building": true
				},
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
