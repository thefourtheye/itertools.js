'use strict';
const iterator = require('./utils').iterator;

function filterfalse(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError(`filterfalse expected 2 arguments, got ${arguments.length}`);
  }

  const toStringPred = Object.prototype.toString.call(pred).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError(`\'${toStringPred}\' object is not callable`);
  }

  const iterable = iterator(seq);
}

module.exports = filterfalse;
