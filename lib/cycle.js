'use strict';
const iterator = require('./utils').iterator;

function cycle(iterable) {
  if (arguments.length !== 1) {
    throw new TypeError(`cycle expected 1 arguments, got ${arguments.length}`);
  }
  return (function*() {
    const iter = iterator(iterable);
    const items = [];
    for (const value of iter) {
      items.push(value);
      yield value;
    }
    while (items) {
      for (let i = 0; i < items.length; i += 1) {
        yield items[i];
      }
    }
  })();
}

module.exports = cycle;
