'use strict';

const Hapi = require('hapi');
const http = require('http');
const parseString = require('xml2js').parseString;

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

// Add the route
server.route({
	method: 'GET',
	path: '/current-trains',
	handler: function (request, reply) {
		const options = {
			host: 'api.irishrail.ie',
			path: '/realtime/realtime.asmx/getCurrentTrainsXML'
		};

		http.get(options, function (response) {
			let xml = '';

			response.on('data', (chunk) => {
				xml += chunk;
			});

			response.on('end', () => {
				parseString(xml, (error, result) => reply({message: result}));
			});

		}).on("error", (error) => {
			console.log("Got error: " + error.message);
		});
	}
});

// Start the server
server.start((err) => {
	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});