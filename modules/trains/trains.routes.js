const http = require('http');
const _ = require('lodash');
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
						const trains = result.ArrayOfObjTrainPositions.objTrainPositions;
						_.each(trains, item => {
							const train = new Train({ trainCode: item.TrainCode });
							train.saveAsync()
								.then(() =>  {
									console.log('saved Train position')
								})
								.catch((error) => {
									console.log('error saving Train position')
								});
						});

						reply({message: result});
					})
				});

			}).on("error", (error) => {
				console.log("Got error: " + error.message);
			});
		}
	}
];
