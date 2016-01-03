'use strict';
const iterator = require('./utils').iterator;

function compress(data, selectors) {
  if (arguments.length > 2) {
    throw new TypeError(`compress() takes at most 2 arguments (${arguments.length} given)`);
  }

  if (arguments.length < 1) {
    throw new TypeError('Required argument \'data\' (pos 1) not found');
  }

  if (arguments.length < 2) {
    throw new TypeError('Required argument \'selectors\' (pos 2) not found');
  }

  const iterable = iterator(data);
  const selector = iterator(selectors);

  return (function*() {
    let iterable_next = iterable.next();
    let selector_next = selector.next();

    while (!iterable_next.done && !selector_next.done) {
      if (selector_next.value) {
        yield iterable_next.value;
      }
      iterable_next = iterable.next();
      selector_next = selector.next();
    }
  })();
}

module.exports = compress;
