'use strict';

const util = require('util');

function iterator(iterable) {
  if (iterable == null) {
    throw new TypeError(util.format('\'%j\' object is not iterable',
      Object.prototype.toString.call(iterable)).replace(/"\[object |\]"/g, ''));
  }
  if (iterable[Symbol.iterator]) {
    return (function*() {
      for (const value of iterable) {
        yield value;
      }
    })();
  } else {
    return (function*() {
      for (const key in iterable) {
        yield key;
      }
    })();
  }
}

module.exports = iterator;
