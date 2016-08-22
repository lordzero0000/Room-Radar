const deg2rad = (deg) => deg * (Math.PI/180);
const R = 6371;

exports.getDistanceInMeters = (initialPosition, currentPosition) => {
  var
    dLat = deg2rad(currentPosition.latitude - initialPosition.latitude),
    dLon = deg2rad(currentPosition.longitude - currentPosition.longitude),
    a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(initialPosition.latitude)) *
      Math.cos(deg2rad(currentPosition.latitude)) *
      Math.sin(dLon/2) * Math.sin(dLon/2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (d = R * c) * 1000;
};
