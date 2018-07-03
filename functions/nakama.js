require('jsdom-global')();
const nakamajs = require("@heroiclabs/nakama-js");
const Promise = require('bluebird');

// nakama-js 사용을 위한 설정
require("./set-global-variable");

var nakamaClient;
var nakamaSession;

const getNakamaClient = () => {
	if (!nakamaClient) {
		if (process.env.NODE_ENV === "development") {
			nakamaClient = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
			nakamaClient.ssl = false;
		} else {	// production
			nakamaClient = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
			nakamaClient.ssl = false;
		}
	}

	return nakamaClient;
}
exports.getNakamaClient = getNakamaClient;

/**
 *
 * @param uid
 * @returns {Promise<*>}
 */
const getNakamaSession = function (uid, nickname) {
	let options, client;
	if (!uid) {
		return Promise.reject(new Error("getNakamaSession: no uid"));
	}

	if (!nakamaSession) {
		if (nickname) {
			options = {id: uid, create: true, username: nickname};
		} else {
			options = {id: uid};
		}

		client = getNakamaClient();
		// 브라우저 fetch()를 사용하기 위해서 강제 inject 실행
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
		return client.authenticateCustom(options).then(session => {
			nakamaSession = session;
			return Promise.resolve(nakamaSession);
		});
	} else {
		return Promise.resolve(nakamaSession);
	}
}
exports.getNakamaSession = getNakamaSession;

