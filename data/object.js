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
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Parking_01": {		//무형유산원 주차장(좌)
		"type": "area",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Parking_02": {		//무형유산원 주차장(우)
		"type": "area",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Hanbyuk_01": {		// 한벽문화관1관(좌)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Hanbyuk_02": {		// 한벽문화관2관(중)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Hanbyuk_03": {		// 한벽문화관3관(우)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Hanbyuk-Ru_01": {		// 한벽루1관(하단)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Modern_Hanbyuk-Ru_02": {		// 한벽루2관(상단)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},

	"Object_Hanok": {		// 한옥건물
		"type": "hanok",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
		
	"Festival_Booth": {			//임의설치 부스, 천서로
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Parking_Area_01": {		//남부시장 주차장 1
		"type": "area",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	},
	"Parking_Area_02": {		//남부시장 주차장 2
		"type": "area",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.0,
		"sizeZ": 1.0,
	}
};

module.exports = data;
