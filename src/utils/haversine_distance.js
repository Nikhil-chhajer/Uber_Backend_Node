function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers

  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);

  const radLat1 = degToRad(lat1);
  const radLat2 = degToRad(lat2);

  // 'a' variable in the Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radLat1) * Math.cos(radLat2) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  // 'c' variable (angular distance)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Final distance 'd'
  const distance = R * c;

  return distance;
}
module.exports=haversineDistance;