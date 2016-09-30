'use strict';

const mongodbUri = require('mongodb-uri');
const requireDirectory = require('require-directory');
const mongoose = require('bluebird')
	.promisifyAll(require('mongoose'));

const models = [];

exports.models = requireDirectory(module, './models');

const uri = mongodbUri.formatMongoose({
	hosts: JSON.parse(process.env.MONGO_HOSTS),
	database: process.env.MONGO_DATABASE,
});

mongoose.connect(uri);

mongoose.connection.on('error', (error) => console.log(error));
mongoose.connection.once('open', function () {
	console.log('mongodb connection established.');
});

