const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
	StationDesc: {
		type: String,
		required: false,
	},
	StationAlias: {
		type: String,
		required: false,
	},
	StationLatitude: {
		type: String,
		required: false,
	},
	StationLongitude: {
		type: String,
		required: false,
	},
	StationCode: {
		type: String,
		required: true,
	},
	StationId: {
		type: String,
		required: true,
	}
};

const MongooseSchema = new mongoose.Schema(schema);
mongoose.model('Station', MongooseSchema);
exports.schema = schema;