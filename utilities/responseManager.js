const { getRequestPath } = require('./Utility');
// const KafkaProducer = require('../kafka/Producer'); //uncomment when it use
const pluralize = require('pluralize'); //this package use for conver object name into singular like tasks --> task

const allowedMethods = {
	POST: 'created',
	PUT: 'updated',
	PATCH: 'updated',
	DELETE: 'deleted'
};

exports.sendResponse = function (req, res, controllerResponse) {

	const { result, error } = controllerResponse;

	if (error) {
		res.status(error.status).json({ message: error.message });
	} else if (result) {
        console.log({event: `${pluralize.singular(getRequestPath(req.baseUrl))}_${allowedMethods[req.method]}`});
        // Uncomment when you use it it is kafka producer code
		// if (Object.keys(allowedMethods).includes(req.method) && req.user) {
		// 	KafkaProducer.sendPayload(
		// 		{
		// 			event: `${pluralize.singular(getRequestPath(req.baseUrl))}_${allowedMethods[req.method]}`,
		// 			time_stamp: Date.now(),
		// 			user_id: req.user.id,
		// 			tenant_id: req.user.tenant_id,
		// 			properties: result.data,
		// 		},
		// 		process.env.KAFKA_ANALYTICS_TOPIC, // will be change for analytics topic
		// 		0
		// 	);
		// }

		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}
};
