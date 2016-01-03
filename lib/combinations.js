'use strict';
const ValueError = require('./utils').ValueError;
const iterator = require('./utils').iterator;

function combinations(p, r) {
  if (!Number.isInteger(r)) {
    throw new TypeError(`${r} cannot be interpreted as an integer`);
  }

  if (r < 0) {
    throw new ValueError('r must be non-negative');
  }

  if (r === 0) {
    return [];
  }

  const tuple = Array.from(iterator(p));
  return (function* recursive(current, result) {
    for (let i = current; i < tuple.length; i += 1) {
      if (result.length + 1 === r) {
        yield result.concat(tuple[i]);
      } else {
        yield* recursive(i + 1, result.concat(tuple[i]));
      }
    }
  })(0, []);
}

module.exports = combinations;
