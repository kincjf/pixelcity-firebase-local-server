"use strict";

var data = {
	"character": {
		"model": {
			"Square": {
				"title": "네모",
				"comment": "네모입니다"
			},
			"Trangle": {
				"title": "세모",
				"comment": "세모입니다"
			},
			"Circle": {
				"title": "동그라미",
				"comment": "동그라미입니다"
			},
			"Pentagon": {
				"title": "오각형",
				"comment": "오각형입니다"
			}
		},
		"icon": {
			"A": {
				"title": "아이콘A",
				"comment": "아이콘A입니다"
			},
			"B": {
				"title": "아이콘B",
				"comment": "아이콘B입니다"
			},
			"C": {
				"title": "아이콘C",
				"comment": "아이콘C입니다"
			}
		}
	},

	"map": {
		/* 승철이형 추가본 */
		"Jeonju-CheongYeonLu": {
			"title": "청연루",
			"comment": "전주 남천교 위의 청연루입니다."
		},
		"Jeonju-WanpanCulturalCenter": {
			"title": "완판본문화관",
			"comment": "전주지역의 출판유산 보존을 위해 설립된 완판본문화관입니다."
		},
		"Jeonju-EojinMuseum": {
			"title": "전주 어진박물관",
			"comment": "경기전 내부에 있는 어진박물관입니다."
		},
		"Jeonju-HanbyeokCulturalCenter": {
			"title": "전주 한벽문화관",
			"comment": "전통문화와 예술을 체험할 수 있는 한벽문화관입니다."
		},
		"Jeonju-HyangGyoCulturalCenter": {
			"title": "전주 향교문화관",
			"comment": "전주향교의 정면에 있는 향교문화관입니다."
		},
		"Jeonju-JamanPaintingVillage": {
			"title": "자만벽화마을",
			"comment": "아기자기한 풍경의 자만 벽화마을입니다."
		},
		"Jeonju-JeondongChurch": {
			"title": "전주 전동성당",
			"comment": "전주의 천주교역사를 간직한 전동성당입니다."
		},
		"Jeonju-CheonSeoRo": {
			"title": "전주 천서로",
			"comment": "전주 천서로입니다."
		},
		"Jeonju-ChunDongRo": {
			"title": "전주 천동로",
			"comment": "전주 천동로입니다."
		},
		"Jeonju-FanCultureCenter": {
			"title": "전주 부채박물관",
			"comment": "전주 부채박물관입니다."
		},
		"Jeonju-GyeongGijeon": {
			"title": "경기전",
			"comment": "전주의 역사와 함께하는 경기전입니다."
		},
		"Jeonju-HyangGyo": {
			"title": "전주향교",
			"comment": "옛 조선시대의 교육시설인 전주향교입니다."
		},
		"Jeonju-SeongsimHighSchool": {
			"title": "성심여자고등학교",
			"comment": "인근 고등학교이며 일반인의 출입이 제한됩니다."
		},
		"Jeonju-TraditionalCultureTrainingCenter": {
			"title": "전주 전통문화연수원",
			"comment": "전통문화연수원의 본관입니다."
		},
		"Jeonju-KMU": {
			"title": "국립무형문화유산원",
			"comment": "전통체험을 진행할 수 있는 국립 무형문화유산원입니다."
		},
		"Jeonju-NamcheonBridgeIntersection": {
			"title": "남천교",
			"comment": "청연루가 있는 남천교의 입구입니다."
		},
		"Jeonju-Ohmokgyo": {
			"title": "오목교",
			"comment": "오목대와 이목대를 잇는 다리입니다."
		},
		"Jeonju-Omogdae": {
			"title": "오목대",
			"comment": "한옥마을 전경을 바라볼 수 있는 오목대입니다."
		},
		"Jeonju-PungnamGate": {
			"title": "풍남문",
			"comment": "옛 전주성의 남문인 풍남문입니다."
		},
		"Jeonju-SsajeonBridge": {
			"title": "싸전다리",
			"comment": "전주의 외곽으로 나가는 다리입니다."
		},

		/* default */
		"Seoul": {	// 서울 광화문
			"title": "광주",
			"comment": "서울 광화문"
		},
		"Busan": {	// 부산 광복로 광복동 주민센터
			"title": "부산",
			"comment": "부산 광복동 주민센터"
		},
		"Daejeon": {	// 대전 둔산동 갤러리아 타임월드
			"title": "대전",
			"comment": "대전 둔산동 갤러리아 타임월드"
		},
		"Gwangju": {	// 광주 국립아시아문화전당
			"title": "광주",
			"comment": "광주 국립아시아문화전당"
		},
		"Jeonju": {		// 전주 경기전 앞
			"title": "전주",
			"comment": "전주 경기전 앞"
		},
		// waypoint 종료

		"DeokjinPark": {
			"title": "덕진공원",
			"comment": "연꽃이 아름다운 공원이다. 수영은 권하지 않는다."
		},
		"SoriHall": {
			"title": "소리 문화의 전당",
			"comment": "전주에서 각종 음악 행사가 행해지는 문화 공간이다. 가끔 무료공연도 관람 할수 있다."
		},
		"AJungReservoir": {
			"title": "아중저수지",
			"comment": "아중리에 위치한 저수지 공원. 날씨만 좋다면 경관을 볼 수 있다."
		},
		"DragonHeadStreet": {
			"title": "용머리고개",
			"comment": "용의머리 현상을 하고 있다고 하여 붙어진 지명이다. 일제시대때의 아픈 기억을 갖고 있다."
		},
		"HanokVillage": {
			"title": "한옥마을",
			"comment": "언제나 사람이 북적거리는 전주의 명소이다."
		},
		"NationalMuseum": {
			"title": "전주 국립박물관",
			"comment": "대한민국 국립 박물관 중 하나이다. 조상들의 지혜를 엿볼수 있다."
		},
		"WorldcupStadium": {
			"title": "전주월드컵경기장",
			"comment": "2002월드컵때 지어진 축구경기장이다. 전북현대 화이팅!"
		},
		"HyanGyo": {
			"title": "전주향교",
			"comment": "우리 조상들의 얼을 느낄수 있는 공간이다."
		},
		"SpecialSpot": {
			"title": "특별장소",
			"comment": "왠지 신비한 픽시가 나올것만 같다."
		},
		"Coap": {
			"title": "코앞빌딩",
			"comment": "개발자의 서식지이다. 커피를 사다주면 사랑받을 수 있는 곳."
		},
		"JeonjuUniversity": {
			"title": "전주대학교",
			"comment": "미인이 많이 있다는 소문을 갖고 있는 대학교이다, 소문이다."
		},
		"TurtleRock": {
			"title": "거북바위",
			"comment": "전주 사방신 중 현무의 힘이 깃든 바위이다. 금암동의 이름의 어원이 되는 바위이다."
		}

	}
};

module.exports = data;
