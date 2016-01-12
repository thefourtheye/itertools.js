'use strict';
const iterator = require('./utils').iterator;

function starmap(func, seq) {
  if (arguments.length !== 2) {
    throw new TypeError(`starmap expected 2 arguments, got ${arguments.length}`);
  }

  const toStringPred = Object.prototype.toString.call(func).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError(`'${toStringPred}' object is not callable`);
  }

  const iter = iterator(seq);

  return (function*() {
    for (const value of iter) {
      yield func.apply(this, Array.from(iterator(value)));
    }
  })();
}

module.exports = starmap;
