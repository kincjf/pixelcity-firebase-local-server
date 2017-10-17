/**
 * 해당 폴더내의 테스트 데이터 자동 로딩 & Object 구성
 * Created by KIMSEONHO on 2016-08-16.
 */
"use strict";

var fs        = require("fs");
var path      = require("path");
var data        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, file));
     var extname = path.extname(file);
     var basename = path.basename(file, extname);

     data[basename] = model;
  });

module.exports = data;
