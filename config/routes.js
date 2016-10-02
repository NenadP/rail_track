const trains = require('../modules/trains/trains.routes');
const stations = require('../modules/stations/stations.routes');
module.exports = [].concat(trains, stations);