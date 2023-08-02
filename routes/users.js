var express = require('express');
var router = express.Router();
const responseManager = require('../utilities/responseManager');

router.get('/', function (req, res, next) {
	try {
		responseManager.sendResponse(req, res, {
			result: { status: 200, data: [] },
		});
	} catch (error) {}
});
//just simple post for test events
router.post('/', function (req, res, next) {});

//just simple delete for test events
router.delete('/', function (req, res, next) {});

module.exports = router;
