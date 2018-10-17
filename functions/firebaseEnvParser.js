'use strict';

const spawn = require('child_process').spawn;
const jsonfilePromise = require('promise-jsonfile');

function read() {
	if (!process.env.FIREBASE_ENV_PATH) {
		console.log("Usage: " + __filename + " FIREBASE_ENV_PATH=SOME_PARAM");
		process.exit(-1);
	}

	var firebaseEnv = process.env.FIREBASE_ENV_PATH;
	console.log("FIREBASE_ENV_PATH: " + firebaseEnv);

	return jsonfilePromise.read(firebaseEnv);
}

function isObj(x) {
    return x !== null && typeof x === 'object';
}

function parse(tree) {
    const values = [];
    const properties = Object.keys(tree);
    properties.forEach(prop => {
        if (isObj(tree[prop])) {
            const childrens = parse(tree[prop]);
            childrens.forEach(child => {
                const value = prop + "." + child;
                values.push(value);
            });
        } else {
            const value = prop + "=" + "\"" + tree[prop] + "\"";
            values.push(value);
        }
    });
    return values;
}

function runFirebaseConfigSet(properties) {
    return new Promise((resolve, reject) => {
        const args = ["functions:config:set"].concat(properties);
        const cmd = spawn("firebase", args, { shell: true });
        cmd.stdout.setEncoding('utf8');
        cmd.stdout.on('data', data => { console.log(data); });
        cmd.stderr.on('data', data => { console.error(`${data}`); });
        cmd.on('close', code => {
            console.log(`Exit code: ${code}`);
            resolve(code);
        });
    });
}

read()
    .then(input => {
        const properties = parse(input);
        console.log("Found properties:\n", properties.map(it => "\t▷ " + it).join("\n"));
        return properties;
    })
    .then((properties) => runFirebaseConfigSet(properties));
