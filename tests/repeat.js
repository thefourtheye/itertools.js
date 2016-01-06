const expect = require('chai').expect;
const repeat = require('../').repeat;

describe('[Failure Cases] when repeat is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => repeat()).to.throw(TypeError, 'Required argument \'object\' (pos 1) not found');
  });

  it('more than two arguments, it should throw an error', function() {
    expect(() => repeat(1, 2, 3)).to.throw(TypeError, 'repeat() takes at most 2 arguments (3 given)');
  });

  it('an invalid number, it should throw an error', function() {
    expect(() => repeat(1, [])).to.throw(TypeError, '\'Array\' cannot be interpreted as an integer');
  });

  it('an invalid integer, it should throw an error', function() {
    expect(() => repeat(() => 1, 3.14)).to.throw(TypeError, 'integer argument expected');
  });

});
