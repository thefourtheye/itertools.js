'use strict';

function accumulate(iterable, func) {

  if (arguments.length === 1) {
    // default accumulator function, addition
    func = (operand1, operand2) => operand1 + operand2;
  }

  if (arguments.length >= 2 && typeof func !== 'function') {
    throw new TypeError('second argument to accumulate must be a function object');
  }

  function accumulator() {
    let previous;
    let isFirst = true;

    return function(value) {
      previous = isFirst ? value : func(previous, value);
      isFirst = false;
      return previous;
    };
  }

  if (Object.prototype.toString.call(iterable) === '[object Object]') {
    return (function*(it) {
      for (const key in iterable) {
        yield it([key, iterable[key]]);
      }
    })(accumulator());
  }

  return (function*(it) {
    for (const value of iterable) {
      yield it(value);
    }
  })(accumulator());

}

module.exports = accumulate;
