const expect = require('chai').expect;
const count = require('../').count;
const take = require('./take');

describe('[Failure Cases] when count is passed', function() {

  it('an invalid number for first argument, it should throw an error', function() {
    expect(() => count(null, 1)).to.throw(TypeError, /a number is required/);
  });

  it('an invalid number for second argument, it should throw an error', function() {
    expect(() => count(1, null)).to.throw(TypeError, /a number is required/);
  });

  it('NaN as arguments, it should throw an error', function() {
    expect(() => count(NaN, 1)).to.throw(TypeError, /a number is required/);
    expect(() => count(1, NaN)).to.throw(TypeError, /a number is required/);
  });

  it('Infinity as arguments, it should throw an error', function() {
    expect(() => count(Infinity, 1)).to.throw(TypeError, /a number is required/);
    expect(() => count(1, Infinity)).to.throw(TypeError, /a number is required/);
    expect(() => count(-Infinity, 1)).to.throw(TypeError, /a number is required/);
    expect(() => count(1, -Infinity)).to.throw(TypeError, /a number is required/);
  });

  it('an invalid number for second argument, it should throw an error', function() {
    expect(() => count(1, null)).to.throw(TypeError, /a number is required/);
  });

  it('greater than two arguments, it should throw an error', function() {
    expect(() => count([], [], [])).to.throw(TypeError, 'count() takes at most 2 arguments (3 given)');
  });

});

describe('[Happy Cases] when count is passed', function() {

  it('no start and step values, the default values 0 and 1 should be assumed respectively', function() {
    expect(take(count(), 10)).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('no step value, the default value 1 should be assumed', function() {
    expect(take(count(1), 5)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('both valid start and step value as integers', function() {
    expect(take(count(1, 5), 5)).to.deep.equal([1, 6, 11, 16, 21]);
  });

  it('step as a negative integer', function() {
    expect(take(count(1, -1), 5)).to.deep.equal([1, 0, -1, -2, -3]);
  });

  it('both start and step as a floating point values', function() {
    expect(take(count(0.5, 0.25), 5)).to.deep.equal([0.5, 0.75, 1.0, 1.25, 1.5]);
  });

});
