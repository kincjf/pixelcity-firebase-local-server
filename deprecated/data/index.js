/**
 * 해당 폴더내의 테스트 데이터 자동 로딩 & Object 구성
 * Created by KIMSEONHO on 2016-08-16.
 */
"use strict";

var fs = require("fs");
var path = require("path");
var data = {};
var dirPath = [__dirname, path.join(__dirname, process.env.DIR_PATH)];

let readFile = function (dirname) {
	fs
		.readdirSync(dirname)
		.filter(function (file) {
			let fullDirPath = path.join(dirname, file);
			if (fs.lstatSync(fullDirPath).isDirectory()) {
				dirPath.push(fullDirPath);
				return false;
			} else {
				return (file.indexOf(".") !== 0) && (file !== "index.js");
			}
		})
		.forEach(function (file) {
			var model = require(path.join(dirname, file));
			var extname = path.extname(file);
			var basename = path.basename(file, extname);

			data[basename] = model;
		});
}

for (let i=0; i<dirPath.length; i++) {
	let dirname = dirPath.shift();
	console.log("Load data: " + dirname);
	readFile(dirname);
}

module.exports = data;
