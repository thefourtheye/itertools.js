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

});
