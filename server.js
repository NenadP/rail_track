'use strict';

require('dotenv').load();
require('./database');

const jobs = require('./jobs/main');
const Hapi = require('hapi');
const routes = require('./config/routes');
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});


// Add the route
server.route(routes);

server.register([
	{
		register: require('hapi-job-queue'),
		options: {
			connectionUrl: 'mongodb://127.0.0.1:27017/rail_track',
			endpoint: '',
			auth: false,
			jobs
		}
	}
], function () {
	server.start((err) => {
		if (err) {
			throw err;
		}
		console.log('Server is running at:', server.info.uri);
	});
});




