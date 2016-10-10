const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
	trainCode: {
		type: String,
		required: true
	},
};

const MongooseSchema = new mongoose.Schema(schema);
mongoose.model('Train', MongooseSchema);
exports.schema = schema;
