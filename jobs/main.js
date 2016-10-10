const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
const Station = mongoose.model('Station');
const http = require('http');
const parseString = require('xml2js').parseString;

module.exports = [
	{
		name: 'default',
		enabled: true,
		auth: false,
		schedule: 'on the first day of the week',
		method(data, callback) {
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
						const stations = result.ArrayOfObjStation.objStation;
						for (let i = 0; i < stations.length; i++) {
							const station = new Station(stations[i]);
							station.saveAsync()
								.then(() =>  {
									console.log('saved', station.StationDesc)
								})
								.catch((error) => {
									console.log('error', error)
								});
						}
					})
				});

			}).on("error", (error) => {
				console.log("Got error: " + error.message);
			});
		},

	}
]