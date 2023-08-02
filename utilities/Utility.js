
/**
 *
 * @summary this function will map request path to object name
 * @param {string} requestPath Request url path
 * @returns
 */
const getRequestPath = function (requestPath) {
	return requestPath.replace('/v1/', '').split('/')[0];
};
module.exports = {
	getRequestPath
};
