'use strict';
const SaneGenerator = require('sane-generator');

function iterator(iterable) {
  if (iterable == null) {
    throw new TypeError(
      `'${Object.prototype.toString.call(iterable).replace(/\[object |\]/g, '')}' object is not iterable`);
  }
  if (iterable[Symbol.iterator]) {
    return SaneGenerator((function*() {
      for (const value of iterable) {
        yield value;
      }
    })());
  } else {
    return SaneGenerator((function*() {
      for (const key in iterable) {
        yield key;
      }
    })());
  }
}

module.exports = iterator;
