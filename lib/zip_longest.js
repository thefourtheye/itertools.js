'use strict';

const iterator = require('./utils').iterator;

function zip_longest() {
  const fillvalue = arguments[0];
  const iterators = Array.from(arguments).slice(1).map(iterator);
  return (function*() {

    while (1) {

      const result = iterators.map(function(iterator) {

        if (iterator.__done) {
          return fillvalue;
        }

        const result = iterator.next();
        if (result.done) {
          iterator.__done = true;
          result.value = fillvalue;
        }
        return result.value;

      });

      if (iterators.every((iterator) => iterator.__done)) {
        return;
      } else {
        yield result;
      }

    }

  })();
}

module.exports = zip_longest;
