'use strict';

const util = require('util');

function iterator(iterable) {
  if (Object.prototype.toString.call(iterable) === '[object Object]') {
    return (function*() {
      for (const key in iterable) {
        yield [key, iterable[key]];
      }
    })();
  }

  if (iterable === null || iterable === undefined || !iterable[Symbol.iterator]) {
    throw new TypeError(util.format('not a valid iterable object %j', iterable));
  }

  return (function*() {
    for (const value of iterable) {
      yield value;
    }
  })();

}

module.exports = iterator;
