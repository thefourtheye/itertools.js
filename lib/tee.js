'use strict';

const iterator = require('./utils').iterator;

function tee(it, n) {
  if (arguments.length > 2) {
    throw new TypeError(`tee() takes at most 2 arguments (${arguments.length} given)`);
  }

  if (arguments.length === 0) {
    throw new TypeError('Required argument \'iterator\' (pos 1) not found');
  }

  if (arguments.length === 1) {
    n = 2;
  }

  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a positive integer');
  }

  const iter = iterator(it);
  const values = (Array.apply(null, {length: n})).map(() => []);

  function updateArray(array) {
    const next = iter.next();
    if (!next.done) {
      values.forEach((currentArray) => currentArray.push(next.value));
    }
  }

  function valuesProducer(array) {
    return (function*() {

      while (true) {

        if (!array.length) {
          updateArray(array);
        }

        if (!array.length) {
          break;
        }

        yield array.shift();

      }
    })();
  }

  return values.map(valuesProducer);

}

module.exports = tee;
