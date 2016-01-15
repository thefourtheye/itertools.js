'use strict';
const iterator = require('./utils').iterator;

function product() {
  let repeat = 1;
  const args = Array.prototype.slice.call(arguments);

  if (args.length !== 0) {
    if (Number.isInteger(args[args.length - 1])) {
      repeat = args.pop(-1);
    }
  }

  const iters = args.map(iterator).map(x => Array.from(x));
  const iterators = [];
  for (let i = 0; i < repeat; i += 1) {
    iters.forEach(x => iterators.push(x));
  }

  return (function* recursive(current, result) {
    for (let i = current; i < iterators.length; i += 1) {
      for (const value of iterators[i]) {
        result.length + 1 === iterators.length ?
          yield result.concat(value) :
          yield * recursive(i + 1, result.concat(value));
      }
    }
  }(0, []));
}

module.exports = product;
