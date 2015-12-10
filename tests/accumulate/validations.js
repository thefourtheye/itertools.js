var expect = require('chai').expect;
var accumulate = require('../../').accumulate;

describe('when accumulate is passed', function() {
  it('an invalid function, it should throw an error', function() {
    expect(() => accumulate([], [])).to.throw(TypeError, /second argument to accumulate must be a function object/);
  });

  it('an invalid iterable (undefined), it should throw an error', function() {
    expect(() => accumulate()).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

  it('an invalid iterable (null), it should throw an error', function() {
    expect(() => accumulate()).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

  it('an invalid iterable (number), it should throw an error', function() {
    expect(() => accumulate(1)).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

});
