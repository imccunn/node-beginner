function start() {
  console.log('Request handler \'start\' was called');
}

function stop() {
  console.log('Request handler \'upload\' was called');
}

module.exports.start = start;
module.exports.stop = stop;


