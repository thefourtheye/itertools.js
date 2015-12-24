'use strict';

const iterator = require('./utils').iterator;

function chain() {
  const args = Array.from(arguments);
  return (function*() {
    for (let i = 0; i < args.length; i += 1) {
      for (const item of iterator(args[i])) {
        yield item;
      }
    }
  })();
}

chain.from_iterable = function from_iterable(iterable) {
  if (arguments.length !== 1) {
    throw new TypeError(`from_iterable() takes exactly one argument (${arguments.length} given)`)
  }
  return chain.apply(this, Array.from(iterator(iterable)));
};

module.exports = chain;
