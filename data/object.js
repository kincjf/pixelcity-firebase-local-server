"use strict";

var data = {
	"WayPoint1": {
		"type": "waypoint",
		"part": "single",
		"sizeX": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
		"sizeY": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
		"sizeZ": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
	},
	"Modern_Muhyung": {		//국립무형유산원
		"type": "building",
		"part": "single",
		"sizeX": 26.0,
		"sizeY": 1.5,
		"sizeZ": 8.0,
	},
	"Modern_Parking_01": {		//무형유산원 주차장(좌)
		"type": "area",
		"part": "single",
		"sizeX": 6.5,
		"sizeY": 1.5,
		"sizeZ": 5.0,
	},
	"Modern_Parking_02": {		//무형유산원 주차장(우)
		"type": "area",
		"part": "single",
		"sizeX": 4.5,
		"sizeY": 1.5,
		"sizeZ": 8.5,
	},
	"Modern_Hanbyuk_01": {		// 한벽문화관1관(좌)
		"type": "building",
		"part": "single",
		"sizeX": 4.0,
		"sizeY": 1.5,
		"sizeZ": 2.0,
	},
	"Modern_Hanbyuk_02": {		// 한벽문화관2관(중)
		"type": "building",
		"part": "single",
		"sizeX": 4.0,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk_03": {		// 한벽문화관3관(우)
		"type": "building",
		"part": "single",
		"sizeX": 2.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk-Ru_01": {		// 한벽루1관(하단)
		"type": "building",
		"part": "single",
		"sizeX": 2.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk-Ru_02": {		// 한벽루2관(상단)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.5,
		"sizeZ": 4.0,
	},
	"Hanok_Hanbyuk_01": { 		//한벽문화관 한옥1관(하단)
		"type": "hanok",
		"part": "single",
		"sizeX": 4.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Hanbyuk_02": { 		//한벽문화관 한옥2관(상단)
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Wanpan_01": {		//완판본문화관1관(상)
		"type": "hanok",
		"part": "single",
		"sizeX": 3.0,
		"sizeY": 1.5,
		"sizeZ": 1.0,
	},
	"Hanok_Wanpan_02": {		//완판본문화관2관(하)
		"type": "hanok",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.5,
		"sizeZ": 1.0,
	},
	"Hanok_Hyanggyo_01": {		//향교문화관1관(상)
		"type": "hanok",
		"part": "single",
		"sizeX": 3.0,
		"sizeY": 1.5,
		"sizeZ": 1.0,
	},
	"Hanok_Hyanggyo_02": {		//향교문화관2관(상)
		"type": "hanok",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.5,
		"sizeZ": 1.0,
	},
	"Festival_Booth": {			//임의설치 부스, 천서로
		"type": "building",
		"part": "single",
		"sizeX": 0.5,
		"sizeY": 1.5,
		"sizeZ": 0.5,
	},
	"Parking_Area_01": {		//남부시장 주차장 1
		"type": "area",
		"part": "single",
		"sizeX": 3.0,
		"sizeY": 1.5,
		"sizeZ": 0.5,
	},
	"Parking_Area_02": {		//남부시장 주차장 2
		"type": "area",
		"part": "single",
		"sizeX": 3.0,
		"sizeY": 1.5,
		"sizeZ": 0.5,
	}
};

module.exports = data;
