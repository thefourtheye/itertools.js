const expect = require('chai').expect;
const islice = require('../').islice;

describe('[Failure Cases] when islice is passed', function() {

  it('no arguments, it should throw an error', function() {
    expect(() => islice()).to.throw(TypeError, 'islice expected at least 2 arguments, got 0');
  });

  it('one argument, it should throw an error', function() {
    expect(() => islice(1)).to.throw(TypeError, 'islice expected at least 2 arguments, got 1');
  });

  it('more than four arguments, it should throw an error', function() {
    expect(() => islice(1, 2, 3, 4, 5)).to.throw(TypeError, 'islice expected at most 4 arguments, got 5');
  });

  it('an invalid iterable, it should throw an error', function() {
    expect(() => islice(1, 1)).to.throw(TypeError, '\'Number\' object is not iterable');
  });

  it('an invalid value for start, it should throw an error', function() {
    expect(() => islice([], -1)).to.throw(TypeError, 'start must be a positive integer or undefined');
    expect(() => islice([], null)).to.throw(TypeError, 'start must be a positive integer or undefined');
  });

  it('an invalid value for stop, it should throw an error', function() {
    expect(() => islice([], 0, -1)).to.throw(TypeError, 'stop must be a positive integer or undefined');
    expect(() => islice([], 0, null)).to.throw(TypeError, 'stop must be a positive integer or undefined');
  });

  it('an invalid value for step, it should throw an error', function() {
    expect(() => islice([], 0, 1, -1)).to.throw(TypeError, 'step must be a non-zero positive integer or undefined');
    expect(() => islice([], 0, 1, 0)).to.throw(TypeError, 'step must be a non-zero positive integer or undefined');
    expect(() => islice([], 0, 1, null)).to.throw(TypeError, 'step must be a non-zero positive integer or undefined');
  });

});
