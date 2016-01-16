'use strict';

function iterator(iterable) {
  if (iterable == null) {
    throw new TypeError(
      `'${Object.prototype.toString.call(iterable).replace(/\[object |\]/g, '')}' object is not iterable`);
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
