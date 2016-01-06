'use strict';

function repeat(object, n) {
  if (arguments.length > 2) {
    throw new TypeError(`repeat() takes at most 2 arguments (${arguments.length} given)`);
  }

  if (arguments.length === 0) {
    throw new TypeError('Required argument \'object\' (pos 1) not found');
  }

  if (arguments.length === 1) {
    n = Infinity;
  }

  if (typeof n !== 'number') {
    const toStringObj = Object.prototype.toString.call(n).replace(/\[object |\]/ig, '');
    throw new TypeError(`'${toStringObj}' cannot be interpreted as an integer`);
  }

  if (!Number.isInteger(n)) {
    throw new TypeError(`integer argument expected`);
  }

  return (function*() {
    if (n === Infinity) {
      for (;;) {
        yield object;
      }
    } else {
      for (let i = 0; i < n; i += 1) {
        yield object;
      }
    }
  })();
}

module.exports = repeat;
