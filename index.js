/* TEST CODE
const { fetchMyIp, fetchCoordsByIp } = require('./iss');
fetchMyIp((err, ip) => {
  if (err) {
    console.log('It didn\'t work!', err);
    return;
  }

  console.log('It worked! IP returned:', ip);
});


fetchCoordsByIp('24.57.142.32', (err, coordinates) => {
  if (err) {
    console.log('It didn\'t work!', err)
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
})

const { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');
const testCoordinates = { latitude: 42.265, longitude: -83.0283 };

fetchISSFlyOverTimes(testCoordinates, (err, passes) => {
  if (err) {
    console.log('It didn\'t work!', err);
    return;
  }

  console.log('It worked! Returned passes of ISS:', passes);
})
*/
