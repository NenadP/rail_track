const http = require('http');
const parseString = require('xml2js').parseString;

module.exports = [
	{
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
					parseString(xml, (error, result) => {
						//needs to go to other place
						const Promise = require('bluebird');
						const mongoose = Promise.promisifyAll(require('mongoose'));
						const Train = mongoose.model('Train');

						var train = new Train({trainCode: 'test'});

						train.saveAsync()
							.then(() =>  {
								console.log('saved')
							})
							.catch((error) => {
								console.log('error')
							});

						for (let i = 0; i < result.length; i++) {
							console.log(result[i].trainCode);
						}
						reply({message: result});
					})
				});

			}).on("error", (error) => {
				console.log("Got error: " + error.message);
			});
		}
	}
];
