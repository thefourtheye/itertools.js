'use strict';

function accumulate(iterable, func) {

  if (arguments.length === 1) {
    // default accumulator function, addition
    func = (operand1, operand2) => operand1 + operand2;
  }

  if (arguments.length >= 2 && typeof func !== 'function') {
    throw new TypeError('second argument to accumulate must be a function object');
  }

  function iterator() {
    let previous;
    let isFirst = true;

    return function(value) {
      if (isFirst) {
        previous = value;
        isFirst = false;
      } else {
        previous = func(previous, value);
      }
      return previous;
    };
  }

  if (Object.prototype.toString.call(iterable) === '[object Object]') {
    return (function*() {
      const it = iterator();
      for (const key in iterable) {
        yield it([key, iterable[key]]);
      }
    })();
  }

  return (function*() {
    const it = iterator();
    for (const value of iterable) {
      yield it(value);
    }
  })();

}

module.exports = accumulate;
