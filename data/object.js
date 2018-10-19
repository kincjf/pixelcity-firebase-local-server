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
	"Modern_Hanbyuk_01": {		// 한벽문화관(좌)
		"type": "building",
		"part": "single",
		"sizeX": 4.0,
		"sizeY": 1.5,
		"sizeZ": 2.0,
	},
	"Modern_Hanbyuk_02": {		// 한벽문화관(중)
		"type": "building",
		"part": "single",
		"sizeX": 4.0,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk_03": {		// 한벽문화관(우)
		"type": "building",
		"part": "single",
		"sizeX": 2.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk-Ru_01": {		// 한벽루(하단)
		"type": "building",
		"part": "single",
		"sizeX": 2.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Hanbyuk-Ru_02": {		// 한벽루(상단)
		"type": "building",
		"part": "single",
		"sizeX": 1.0,
		"sizeY": 1.5,
		"sizeZ": 8.0,
	},
	"Hanok_Hanbyuk_01": { 		//한벽문화관 한옥(하단)
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Hanbyuk_02": { 		//한벽문화관 한옥(상단)
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Architecture_Row": {
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Architecture_Col": {
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Festival_Booth": {
		"type": "building",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Parking_Area": {
		"type": "area",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	}
};

module.exports = data;
