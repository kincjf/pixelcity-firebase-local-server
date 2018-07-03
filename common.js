const Promise = require("bluebird");

exports.objectToArray = (stats) => {
	return Object.keys(stats).map(key => ({
		key: key, value: stats[key]
	}));
}

/**
 *
 * @param admin
 * @param users
 * @param nextPageToken
 * @returns {Promise<admin.auth.ListUsersResult>}
 */
function listAllUsers(admin, users, nextPageToken) {
	// List batch of users, 1000 at a time.;

	return admin.auth().listUsers(1000, nextPageToken).then(function (listUsersResult) {
		listUsersResult.users.forEach(function (userRecord) {
			// console.log("user", userRecord.toJSON());
			users.push(userRecord.toJSON());
		});
		if (listUsersResult.pageToken) {
			// List next batch of users.
			return listAllUsers(admin, users, listUsersResult.pageToken);
		} else {
			return Promise.resolve(users);
		}
	}).catch(function (error) {
		console.log("Error listing users:", error);
	});
}
exports.listAllUsers = listAllUsers;
