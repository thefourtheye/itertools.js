'use strict';
const iterator = require('./utils').iterator;

function islice(seq, start, stop, step) {
  if (arguments.length < 2) {
    throw new TypeError(`islice expected at least 2 arguments, got ${arguments.length}`);
  }
  if (arguments.length > 4) {
    throw new TypeError(`islice expected at most 4 arguments, got ${arguments.length}`);
  }
  if (!(start === undefined || (Number.isInteger(start) && start >= 0))) {
    throw new TypeError('start must be a positive integer or undefined');
  }
  if (!(stop === undefined || (Number.isInteger(stop) && stop >= 0))) {
    throw new TypeError('stop must be a positive integer or undefined');
  }
  if (!(step === undefined || (Number.isInteger(step) && step > 0))) {
    throw new TypeError('step must be a non-zero positive integer or undefined');
  }

  const iter = iterator(seq);
  step = step || 1;
  if (arguments.length === 2) {
    stop = start;
    start = 0;
  } else {
    stop = stop === undefined ? Infinity : stop;
  }

  return (function*() {
    let counter = 0;
    for (const value of iter) {
      if (start > stop || start + step > stop) {
        return [];
      }
      if (counter === start) {
        yield value;
        start += step;
      }
      counter += 1;
    }
  })();
}

module.exports = islice;
