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

  it('invalid iterable objects, it should throw error', function() {
    expect(() => islice(null, 0)).to.throw(TypeError, '\'Null\' object is not iterable');
    expect(() => islice(undefined, 0)).to.throw(TypeError, '\'Undefined\' object is not iterable');
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

describe('[Happy Cases] when islice is passed', function() {

  it('an empty iterable, it should return an empty iterable', function() {
    expect(Array.from(islice([], 0))).to.deep.equal([]);
  });

  it('only the start value, it should be treated as the stop value', function() {
    expect(Array.from(islice([1, 2, 3, 4, 5, 6], 3))).to.deep.equal([1, 2, 3]);
  });

  it('only the start and the stop value, step value should be assumed to be 1', function() {
    expect(Array.from(islice('abcdefgh', 2, 5))).to.deep.equal(['c', 'd', 'e']);
  });

  it('all start, stop and step values, it should properly slice', function() {
    expect(Array.from(islice('abcdefgh', 2, 8, 2))).to.deep.equal(['c', 'e', 'g']);
  });

  it('undefined as start value, it should be assumed as zero', function() {
    expect(Array.from(islice('abcdefgh', undefined, 8, 2))).to.deep.equal(['a', 'c', 'e', 'g']);
  });

  it('undefined as stop value, it should be assumed as Infinity', function() {
    expect(Array.from(islice('abcdefgh', 0, undefined, 2))).to.deep.equal(['a', 'c', 'e', 'g']);
  });

  it('start value greater than stop value, an empty iterable should be returned', function() {
    expect(Array.from(islice('abcdefgh', 5, 4, 2))).to.deep.equal([]);
  });

  it('zero as stop value, an empty iterable should be returned', function() {
    expect(Array.from(islice('abcdefgh', 0, 0, 2))).to.deep.equal([]);
  });

  it('start value same as stop value, an empty iterable should be returned', function() {
    expect(Array.from(islice('abcdefgh', 4, 4, 2))).to.deep.equal([]);
  });

  it('step value same as the stop value, first element should be returned', function() {
    expect(Array.from(islice('abcdefgh', 4, 6, 2))).to.deep.equal(['e']);
  });

  it('step value greater than the stop value, first element should be returned', function() {
    expect(Array.from(islice('abcdefgh', 4, 6, 8))).to.deep.equal(['e']);
  });

});
