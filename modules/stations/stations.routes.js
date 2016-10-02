const http = require('http');
const parseString = require('xml2js').parseString;

module.exports = [
	{
		method: 'GET',
		path: '/all-stations',
		handler: function (request, reply) {
			const options = {
				host: 'api.irishrail.ie',
				path: '/realtime/realtime.asmx/getAllStationsXML'
			};

			http.get(options, function (response) {
				let xml = '';

				response.on('data', (chunk) => {
					xml += chunk;
				});

				response.on('end', () => {
					parseString(xml, (error, result) => {
						reply( {message: result });
					})
				});

			}).on("error", (error) => {
				console.log("Got error: " + error.message);
			});
		}
	}
];
