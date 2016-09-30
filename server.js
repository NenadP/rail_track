'use strict';

require('dotenv').load();
require('./database');

const Hapi = require('hapi');
const routes = require('./config/routes');
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

// Add the route
server.route(routes);

// Start the server
server.start((err) => {
	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});



