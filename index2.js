const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPasses } = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPasses(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });