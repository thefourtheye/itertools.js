'use strict';
const ValueError = require('./utils').ValueError;

function combinations(p, r) {
  if (!Number.isInteger(r)) {
    throw new TypeError(`${r} cannot be interpreted as an integer`);
  }

  if (r < 0) {
    throw new ValueError('r must be non-negative');
  }

}

module.exports = combinations;
