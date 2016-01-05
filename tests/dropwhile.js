const expect = require('chai').expect;
const dropwhile = require('../').dropwhile;

describe('[Failure Cases] when dropwhile is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => dropwhile()).to.throw(TypeError, 'dropwhile expected 2 arguments, got 0');
  });

  it('one argument, it should throw an error', function() {
    expect(() => dropwhile(1)).to.throw(TypeError, 'dropwhile expected 2 arguments, got 1');
  });

  it('more than two arguments, it should throw an error', function() {
    expect(() => dropwhile(1, 2, 3)).to.throw(TypeError, 'dropwhile expected 2 arguments, got 3');
  });

  it('an invalid callable object, it should throw an error', function() {
    expect(() => dropwhile(1, [])).to.throw(TypeError, '\'Number\' object is not callable');
  });

  it('an invalid iterable object, it should throw an error', function() {
    expect(() => dropwhile(() => 1, 1)).to.throw(TypeError, '\'Number\' object is not iterable');
  });

});

describe('[Happy Cases] when dropwhile is passed', function() {

  it('an empty iterable, it should return an empty iterable', function() {
    expect(Array.from(dropwhile(() => 1, []))).to.deep.equal([]);
  });

  it('a valid iterable with no predicate failures should return the original items in iterable', function() {
    expect(Array.from(dropwhile(() => false, [1, 2, 3, 4]))).to.deep.equal([1, 2, 3, 4]);
  });

  it('a valid iterable with all predicate failures should return an empty iterable', function() {
    expect(Array.from(dropwhile(() => true, [1, 2, 3, 4]))).to.deep.equal([]);
  });

  it('a valid iterable with predicate failures should return rest of the items from the iterable', function() {
    expect(Array.from(dropwhile((x) => x < 2, [1, 2, 3, 4]))).to.deep.equal([2, 3, 4]);
  });

});
