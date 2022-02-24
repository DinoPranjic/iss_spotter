const { fetchMyIp } = require('./iss');

/* TEST CODE
fetchMyIp((err, ip) => {
  if (err) {
    console.log('It didn\'t work!', err);
    return;
  }

  console.log('It worked! IP returned:', ip);
});
*/