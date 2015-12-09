var expect = require('chai').expect;
var accumulate = require('../../').accumulate;

describe('when accumulate is passed invalid', function() {
  it('function, it should throw an error', function() {
    expect(() => accumulate([], [])).to.throw(TypeError, /second argument to accumulate must be a function object/);
  });
});
