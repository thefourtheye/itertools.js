module.exports = function take(iterable, n) {
  return Array.from(require('../').islice(iterable, n));
};
