'use strict';
const iterator = require('./utils').iterator;

function takewhile(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError(`takewhile expected 2 arguments, got ${arguments.length}`);
  }

  const toStringPred = Object.prototype.toString.call(pred).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError(`\'${toStringPred}\' object is not callable`);
  }

  const iterable = iterator(seq);

  return (function*() {
    for (const value of iterable) {
      if (pred(value)) {
        yield value;
      } else {
        break;
      }
    }
  })();

}

module.exports = takewhile;
