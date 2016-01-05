const expect = require('chai').expect;
const filterfalse = require('../').filterfalse;

describe('[Failure Cases] when filterfalse is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => filterfalse()).to.throw(TypeError, 'filterfalse expected 2 arguments, got 0');
  });

  it('one argument, it should throw an error', function() {
    expect(() => filterfalse(1)).to.throw(TypeError, 'filterfalse expected 2 arguments, got 1');
  });

  it('more than two arguments, it should throw an error', function() {
    expect(() => filterfalse(1, 2, 3)).to.throw(TypeError, 'filterfalse expected 2 arguments, got 3');
  });

  it('an invalid callable object, it should throw an error', function() {
    expect(() => filterfalse(1, [])).to.throw(TypeError, '\'Number\' object is not callable');
  });

  it('an invalid iterable object, it should throw an error', function() {
    expect(() => filterfalse(() => 1, 1)).to.throw(TypeError, '\'Number\' object is not iterable');
  });

});
