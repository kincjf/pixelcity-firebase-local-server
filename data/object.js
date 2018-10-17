"use strict";

var data = {
	"WayPoint1": {
		"type": "waypoint",
		"part": "single",
		"sizeX": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
		"sizeY": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
		"sizeZ": 1.5,	// 단위: 10m, 소수점 첫째자리까지 반올림해서 .5 또는 .0으로 맞추기
	},
	"Modern_Architecture_Big": {
		"type": "building",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Architecture_Parking": {
		"type": "area",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Architecture_Part1": {
		"type": "building",
		"part": "multi",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Architecture_Part2": {
		"type": "building",
		"part": "multi",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Modern_Architecture_Part3": {
		"type": "building",
		"part": "multi",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Architecture_Small": {
		"type": "hanok",
		"part": "single",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Architecture_Row": {
		"type": "hanok",
		"part": "multi",
		"sizeX": 1.5,
		"sizeY": 1.5,
		"sizeZ": 1.5,
	},
	"Hanok_Architecture_Col": {
		"type": "hanok",
		"part": "multi",
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
