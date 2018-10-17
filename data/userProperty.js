"use strict";

let _ = require("lodash");
let userData = require("./user");
let itemData = require("./item");
var crypto = require("crypto");

var weaponKeyList = Object.keys(itemData.weapon);
var armorKeyList = Object.keys(itemData.armor);
var accessoryKeyList = Object.keys(itemData.accessory);
var groceriesKeyList = Object.keys(itemData.groceries);

let tengableItemData = {
	"weapon": itemData.weapon,
	"armor": itemData.armor,
	"accessory": itemData.accessory,
	"groceries": itemData.groceries
}

let wearableItemData = {
	"weapon": itemData.weapon,
	"armor": itemData.armor,
	"accessory": itemData.accessory
}

// user 수만큼 있음
var data = {
	// "smadupset@naver": {
		// "level": 2,
		// "exp": 265,
		// "ruby": 27,
		// "gold": 934,
		// "inventory": {
			// "c4ca4238a0b923820dcc509a6f75849b": {
				// "category": "Lorem",
				// "type": "Lorem",
				// "name": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// },
			// "c81e728d9d4c2f636f067f89cc14862c": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// },
			// "eccbc87e4b5ce2fe28308fd9f2a7baf3": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// },
			// "a87ff679a2f3e71d9181a67b7542122c": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// },
			// "c4ca4238a0b923820dcc5": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// }
		// },
		// "equipment": {
			// "weapon": {
				// "inventoryUid1": {}
			// },
			// "armor": {
				// "inventoryUid2": {}
			// },
			// "accessory": {
				// "inventoryUid3": {}
			// }
		// }
	// },
	// "jgj90@naver": {
		// "level": -71,
		// "exp": -4,
		// "ruby": -17,
		// "gold": -75,
		// "inventory": {
			// "uid": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// }
		// },
		// "equipment": {
			// "weapon": {
				// "inventoryUid1": {}
			// },
			// "armor": {
				// "inventoryUid2": {}
			// },
			// "accessory": {
				// "inventoryUid3": {}
			// }
		// }
	// },
	// "pastelbook89@gmail": {
		// "level": -71,
		// "exp": -4,
		// "ruby": -17,
		// "gold": -75,
		// "inventory": {
			// "uid": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// }
		// },
		// "equipment": {
			// "weapon": {
				// "inventoryUid1": {}
			// },
			// "armor": {
				// "inventoryUid2": {}
			// },
			// "accessory": {
				// "inventoryUid3": {}
			// }
		// }
	// },
	// "sinho0689@gmail": {
		// "level": -71,
		// "exp": -4,
		// "ruby": -17,
		// "gold": -75,
		// "inventory": {
			// "uid": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// }
		// },
		// "equipment": {
			// "weapon": {
				// "inventoryUid1": {}
			// },
			// "armor": {
				// "inventoryUid2": {}
			// },
			// "accessory": {
				// "inventoryUid3": {}
			// }
		// }
	// },
	// "random_1487780669@gmail": {
		// "level": -71,
		// "exp": -4,
		// "ruby": -17,
		// "gold": -75,
		// "inventory": {
			// "uid": {
				// "name": "Lorem",
				// "category": "Lorem",
				// "type": "Lorem",
				// "property": {
					// "hp": -46,
					// "defence": -34,
					// "attackPower": 94,
					// "agility": -32
				// }
			// }
		// },
		// "equipment": {
			// "weapon": {
				// "inventoryUid1": {}
			// },
			// "armor": {
				// "inventoryUid2": {}
			// },
			// "accessory": {
				// "inventoryUid3": {}
			// }
		// }
	// }
};

_.forEach(userData, function(userValue, userKey) {
	data[userKey] = {
		"level": _.random(0, 10),
		"exp": _.random(0, 100),
		"ruby": _.random(0, 100),
		"gold": _.random(0, 1000)
	};

	data[userKey].status = {
		total: {
			"eatenUser": _.random(0, 10),
			"eatenPixel": _.random(0, 1000),
			"score": _.random(0, 1000),
			"playCount": _.random(0, 1000),
			"survivalTime": _.random(0, 10000),		// second
		}
	};

	data[userKey].status.best = {
		"ranking": _.random(0, 10),
		"eatenUser": data[userKey].status.total.eatenUser + _.random(0, 100),
		"eatenPixel": data[userKey].status.total.eatenPixel + _.random(0, 100),
		"score": data[userKey].status.total.score + _.random(0, 100),
		"playCount": data[userKey].status.total.playCount + _.random(0, 1000),
		"survivalTime": data[userKey].status.total.survivalTime + _.random(0, 1000),		// second
	}

	// data[userKey].inventory = {};
	// data[userKey].equipment = {
	// 	"weapon": {
	// 	},
	// 	"armor": {
	// 	},
	// 	"accessory": {
	// 	}
	// };

	// inventory
	// _.forEach(tengableItemData, function(itemValue, itemKey) {
	// 	let uid = crypto.randomBytes(10).toString('hex');
	// 	let itemObj, itemObjKey;
  //
	// 	switch (itemKey) {
	// 		case "weapon":
	// 			itemObj = tengableItemData.weapon;
	// 			itemObjKey = weaponKeyList;
	// 			break;
	// 		case "armor":
	// 			itemObj = tengableItemData.armor;
	// 			itemObjKey = armorKeyList;
	// 			break;
	// 		case "accessory":
	// 			itemObj = tengableItemData.accessory;
	// 			itemObjKey = accessoryKeyList;
	// 			break;
	// 		case "groceries":
	// 			itemObj = tengableItemData.groceries;
	// 			itemObjKey = groceriesKeyList;
	// 			break;
	// 	}
  //
	// 	let idx = _.random(0, itemObjKey.length - 1);
	// 	let detailValue = itemObj[itemObjKey[idx]];
  //
	// 	if (detailValue) {
	// 		data[userKey].inventory[uid] = {};
	// 		data[userKey].inventory[uid].category = itemKey
	// 		data[userKey].inventory[uid].type = detailValue.type;
	// 		data[userKey].inventory[uid].name = itemObjKey[idx];
  //
	// 		data[userKey].inventory[uid].property = {
	// 			hp: detailValue.property.hp.min,
	// 			attackPower: detailValue.property.attackPower.min,
	// 			defence: detailValue.property.defence.min,
	// 			agility: detailValue.property.agility.min
	// 		};
	// 	}
	// });

	// equipment
	// _.forEach(data[userKey].equipment, function(equipValue, equipKey) {
	// 	let uid = crypto.randomBytes(10).toString('hex');
	// 	let itemObj, itemObjKey, partObj;
  //
	// 	switch (equipKey) {
	// 		case "weapon":
	// 			data[userKey].equipment.weapon = {};
  //
	// 			itemObj = wearableItemData.weapon;
	// 			itemObjKey = weaponKeyList;
	// 			break;
	// 		case "armor":
	// 			data[userKey].equipment.armor = {};
  //
	// 			itemObj = wearableItemData.armor;
	// 			itemObjKey = armorKeyList;
	// 			break;
	// 		case "accessory":
	// 			data[userKey].equipment.accessory = {};
  //
	// 			itemObj = wearableItemData.accessory;
	// 			itemObjKey = accessoryKeyList;
	// 			break;
	// 	}
  //
	// 	let idx = _.random(0, itemObjKey.length - 1);
	// 	let detailValue = itemObj[itemObjKey[idx]];
  //
	// 	if (detailValue) {
	// 		data[userKey].equipment[equipKey][uid] = {};
	// 		partObj = data[userKey].equipment[equipKey][uid];
  //
	// 		partObj.name = itemObjKey[idx];
	// 		partObj.property = {
	// 			hp: detailValue.property.hp.min,
	// 			attackPower: detailValue.property.attackPower.min,
	// 			defence: detailValue.property.defence.min,
	// 			agility: detailValue.property.agility.min
	// 		};
	// 	}
	// });

});

module.exports = data;
