const expect = require('chai').expect;
const combinations = require('../').combinations;

describe('[Failure Cases] when combinations is passed', function() {

  it('an invalid integer, it should throw an error', function() {
    expect(() => combinations('abcd', 'abcd')).to.throw(TypeError, /abcd cannot be interpreted as an integer/);
  });

});
