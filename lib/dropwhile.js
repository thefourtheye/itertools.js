'use strict';
const iterator = require('./utils').iterator;

function dropwhile(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError(`dropwhile expected 2 arguments, got ${arguments.length}`);
  }

  const toStringPred = Object.prototype.toString.call(pred).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError(`'${toStringPred}' object is not callable`);
  }

  const iterable = iterator(seq);

  return (function*() {
    let drop = true;
    for (const value of iterable) {
      drop = drop && pred(value);
      if (!drop) {
        yield value;
      }
    }
  })();
}

module.exports = dropwhile;
