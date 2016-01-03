'use strict';

const util = require('util');

function iterator(iterable) {
  if (Object.prototype.toString.call(iterable) === '[object Object]') {
    return (function*() {
      for (const key in iterable) {
        yield ([key, iterable[key]]);
      }
    })();
  }

  if (iterable === null || iterable === undefined || !iterable[Symbol.iterator]) {
    throw new TypeError(util.format('\'%j\' object is not iterable',
      Object.prototype.toString.call(iterable)).replace(/"\[object |\]"/g, ''));
  }

  return (function*() {
    for (const value of iterable) {
      yield value;
    }
  })();

}

module.exports = iterator;
