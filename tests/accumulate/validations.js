var expect = require('chai').expect;
var accumulate = require('../../').accumulate;

describe('when accumulate is passed invalid', function() {
  it('function, it should throw an error', function() {
    expect(() => accumulate([], [])).to.throw(TypeError, /second argument to accumulate must be a function object/);
  });

  it('iterable (undefined), it should throw an error', function() {
    expect(() => accumulate()).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

  it('iterable (null), it should throw an error', function() {
    expect(() => accumulate()).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

  it('iterable (number), it should throw an error', function() {
    expect(() => accumulate(1)).to.throw(TypeError, /first argument to accumulate must be an iterable object/);
  });

});
