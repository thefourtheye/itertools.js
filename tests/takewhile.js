const expect = require('chai').expect;
const takewhile = require('../').takewhile;

describe('[Failure Cases] when takewhile is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => takewhile()).to.throw(TypeError, 'takewhile expected 2 arguments, got 0');
  });

  it('one argument, it should throw an error', function() {
    expect(() => takewhile(1)).to.throw(TypeError, 'takewhile expected 2 arguments, got 1');
  });

  it('more than two arguments, it should throw an error', function() {
    expect(() => takewhile(1, 2, 3)).to.throw(TypeError, 'takewhile expected 2 arguments, got 3');
  });

  it('an invalid callable object, it should throw an error', function() {
    expect(() => takewhile(1, [])).to.throw(TypeError, '\'Number\' object is not callable');
  });

  it('invalid iterables, it should throw error', function() {
    expect(() => takewhile(() => 1, null)).to.throw(TypeError, '\'Null\' object is not iterable');
    expect(() => takewhile(() => 1, undefined)).to.throw(TypeError, '\'Undefined\' object is not iterable');
  });

});

describe('[Happy Cases] when takewhile is passed', function() {

  it('an empty iterable, it should return an empty iterable', function() {
    expect(Array.from(takewhile(() => 1, []))).to.deep.equal([]);
  });

  it('a valid iterable with no predicate failures should return the original items in iterable', function() {
    expect(Array.from(takewhile(() => true, [1, 2, 3, 4]))).to.deep.equal([1, 2, 3, 4]);
  });

  it('a valid iterable with all predicate failures should return an empty iterable', function() {
    expect(Array.from(takewhile(() => false, [1, 2, 3, 4]))).to.deep.equal([]);
  });

  it('a valid iterable with predicate failures should return rest of the items from the iterable', function() {
    expect(Array.from(takewhile((x) => x < 2, [1, 2, 3, 4]))).to.deep.equal([1]);
  });

});
