'use strict';

function count(start, step) {
  if (arguments.length > 2) {
    throw new TypeError(`count() takes at most 2 arguments (${arguments.length} given)`);
  }

  if (arguments.length < 2) {
    step = 1;
  }
  if (arguments.length < 1) {
    start = 0;
  }

  if (!Number.isFinite(start) || !Number.isFinite(step)) {
    throw new TypeError(`a number is required`);
  }

  return (function*() {
    for (;;) {
      yield start;
      start += step;
    }
  })();
}

module.exports = count;
