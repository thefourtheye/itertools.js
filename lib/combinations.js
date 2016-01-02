'use strict';

function combinations(p, r) {
  if (!Number.isInteger(r)) {
    throw new TypeError(`${r} cannot be interpreted as an integer`);
  }
}

module.exports = combinations;
