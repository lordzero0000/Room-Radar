var calculator = require('./lib/calculator');

var position = {
    latitude: 20.6579482,
    longitude: -103.3752976
  },
  position2 = {
    latitude: 20.6582422,
    longitude: -103.3756565
  };

console.log(calculator.getDistanceInMeters(position, position2));
