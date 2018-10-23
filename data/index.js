/**
 * 해당 폴더내의 테스트 데이터 자동 로딩 & Object 구성
 * Created by KIMSEONHO on 2016-08-16.
 */
"use strict";

var fs = require("fs");
var path = require("path");
var data = {};
var dirPath = [__dirname, path.join(__dirname, process.env.ENV_FLAG)];

let readFile = function (dirname) {
	fs
		.readdirSync(dirname)
		.filter(function (file) {
			let fullDirPath = path.join(dirname, file);
			if (fs.lstatSync(fullDirPath).isDirectory()) {
				return false;
			} else {
				return (file.indexOf(".") !== 0) && (file !== "index.js");
			}
		})
		.forEach(function (file) {
			let extname = path.extname(file);

			if (extname === ".js") {
				let model = require(path.join(dirname, file));
				let basename = path.basename(file, extname);

				data[basename] = model;
			}
		});
}

dirPath.forEach(dirname => {
	console.log("Load data: " + dirname);
	readFile(dirname);	// overwrite data when exist in subfolder
});

module.exports = data;
