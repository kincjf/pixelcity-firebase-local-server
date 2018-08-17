/*
 * enables browser(window) variable globally to use javascript library.
 */

// @heroiclabs/nakama-js 사용을 위한 설정
module.exports = (function () {
	if (window || global.window) {
		global.fetch = window.fetch || global.window.fetch;
		global.FileReader = window.FileReader || global.window.FileReader;
	} else {
		console.error("not found global.window cause fail to use nakama-js");
	}
})();
