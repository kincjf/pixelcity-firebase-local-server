require('jsdom-global')();

const functions = require('firebase-functions');
const nakamajs = require("@heroiclabs/nakama-js");
const Promise = require('bluebird');

// nakama-js 사용을 위한 설정
require("./set-global-variable");

const FUNCTIONS_CONFIG = functions.config().service;

/**
 * firebase cloud function 사용시 공유 전역변수를 최소화 해야겠다.
 * @returns {*}
 */
const getNakamaClient = () => {
	let client;

	if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "alpha-test" || process.env.NODE_ENV === "production") {
		client = new nakamajs.Client(process.env.NAKAMA_SERVER_KEY, process.env.NAKAMA_HOST, process.env.NAKAMA_PORT);
		client.ssl = false;
	} else {	// production
		client = new nakamajs.Client(FUNCTIONS_CONFIG.nakama.serverkey, FUNCTIONS_CONFIG.nakama.host, FUNCTIONS_CONFIG.nakama.port);
		client.ssl = false;
	}

	return client;
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
		let log = `getNakamaSession: no uid: ${uid}`;
		console.warn(log);
		return Promise.reject(log);
	}

	if (nickname) {
		options = {id: uid, create: true, username: nickname};
	} else {
		options = {id: uid};
	}

	console.log(`getNakamaSession(): options ${JSON.stringify(options)}`);

	client = getNakamaClient();
	return client.authenticateCustom(options).then(session => {
		return Promise.resolve(session);
	}).catch(err => {
		console.error(err);
		return Promise.reject(err);
	});
}
exports.getNakamaSession = getNakamaSession;

