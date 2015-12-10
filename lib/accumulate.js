'use strict';

const iterator = require('./utils').iterator;

function accumulate(iterable, func) {

  if (arguments.length === 1) {
    // default accumulator function, addition
    func = (operand1, operand2) => operand1 + operand2;
  }

  if (arguments.length >= 2 && typeof func !== 'function') {
    throw new TypeError('second argument to accumulate must be a function object');
  }

  return (function*(it) {
    let previous;
    let isFirst = true;
    for (const value of it) {
      previous = isFirst ? value : func(previous, value);
      isFirst = false;
      yield previous;
    }
  })(iterator(iterable));
}

module.exports = accumulate;
