const expect = require('chai').expect;
const combinations = require('../').combinations;
const ValueError = require('../lib/utils').ValueError;

describe('[Failure Cases] when combinations is passed', function() {

  it('an invalid integer, it should throw an error', function() {
    expect(() => combinations('abcd', 'abcd')).to.throw(TypeError, /abcd cannot be interpreted as an integer/);
  });

  it('a negative integer, it should throw an error', function() {
    expect(() => combinations('abcd', -3)).to.throw(ValueError, /r must be non-negative/);
  });

  it('an invalid iterable, it should throw an error', function() {
    expect(() => combinations(() => 1, 1)).to.throw(TypeError, /\'Function\' object is not iterable/);
  });

});

describe('[Happy Cases] when combinations is passed', function() {

  it('an invalid number of elements, it should return an empty iterable', function() {
    expect(Array.from(combinations('abcd', 5))).to.deep.equal([]);
  });

  it('an invalid number of elements (zero), it should return an empty iterable', function() {
    expect(Array.from(combinations('abcd', 0))).to.deep.equal([]);
  });

  it('valid iterables and number of elements, it should return proper combinations', function() {
    expect(Array.from(combinations('abcd', 1))).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
    expect(Array.from(combinations(['a', 'b', 'c', 'd'], 2))).to.deep.equal(
      [['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd'], ['c', 'd']]);
    expect(Array.from(combinations((function*() {
      for (var val of ['a', 'b', 'c', 'd']) yield val;
    })(), 3))).to.deep.equal([['a', 'b', 'c'], ['a', 'b', 'd'], ['a', 'c', 'd'], ['b', 'c', 'd']]);
    expect(Array.from(combinations('abcd', 4))).to.deep.equal([['a', 'b', 'c', 'd']]);
  });

});
