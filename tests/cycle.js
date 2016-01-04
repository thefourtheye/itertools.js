const expect = require('chai').expect;
const cycle = require('../').cycle;

describe('[Failure Cases] when cycle is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => cycle()).to.throw(TypeError, 'cycle expected 1 arguments, got 0');
  });

  it('more than one argument, it should throw an error', function() {
    expect(() => cycle([], [])).to.throw(TypeError, 'cycle expected 1 arguments, got 2');
  });

  it('an invalid iterable, it should throw an error', function() {
    expect(() => cycle(1)).to.throw(TypeError, '\'Number\' object is not iterable');
  });

});
