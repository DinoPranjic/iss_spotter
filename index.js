const { nextISSTimesForMyLocation } = require('./iss');

const printPasses = function(passes) {
  for (const pass of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((err, passes) => {
  if (err) {
    return console.log('It didn\'t work!', err);
  }

  printPasses(passes);

});

/* ORIGINAL TEST CODE
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
