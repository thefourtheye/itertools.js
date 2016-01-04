'use strict';
const iterator = require('./utils').iterator;

function cycle(iterable) {
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
