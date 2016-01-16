const expect = require('chai').expect;
const cycle = require('../').cycle;
const take = require('./take');

describe('[Failure Cases] when cycle is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => cycle()).to.throw(TypeError, 'cycle expected 1 arguments, got 0');
  });

  it('more than one argument, it should throw an error', function() {
    expect(() => cycle([], [])).to.throw(TypeError, 'cycle expected 1 arguments, got 2');
  });

  it('invalid iterables, it should throw error', function() {
    expect(() => cycle(null)).to.throw(TypeError, '\'Null\' object is not iterable');
    expect(() => cycle(undefined)).to.throw(TypeError, '\'Undefined\' object is not iterable');
  });

});

describe('[Happy Cases] when cycle is passed', function() {

  it('an empty iterable, it should return an empty iterator', function() {
    expect(Array.from(cycle([]))).to.deep.equal([]);
  });

  it('valid iterables', function() {
    expect(take(cycle('abcd'), 5)).to.deep.equal(['a', 'b', 'c', 'd', 'a']);
    expect(take(cycle('a'), 5)).to.deep.equal(['a', 'a', 'a', 'a', 'a']);
    expect(take(cycle('abcd'), 3)).to.deep.equal(['a', 'b', 'c']);
    expect(take(cycle('abcd'), 8)).to.deep.equal(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']);
  });

});
