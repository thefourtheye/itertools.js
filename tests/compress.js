const expect = require('chai').expect;
const compress = require('../').compress;

describe('[Failure Cases] when compress is passed', function() {

  it('an invalid iterable for first argument, it should throw an error', function() {
    expect(() => compress(null, [])).to.throw(TypeError, /not a valid iterable object \[Null\]/);
  });

  it('an invalid iterable for second argument, it should throw an error', function() {
    expect(() => compress([], null)).to.throw(TypeError, /not a valid iterable object \[Null\]/);
  });

  it('lesser than two arguments, it should throw an error', function() {
    expect(() => compress()).to.throw(TypeError, /Required argument 'data' \(pos 1\) not found/);
    expect(() => compress([])).to.throw(TypeError, /Required argument 'selectors' \(pos 2\) not found/);
  });

  it('greater than two arguments, it should throw an error', function() {
    expect(() => compress([], [], [])).to.throw(TypeError, /compress\(\) takes at most 2 arguments \(3 given\)/);
  });

});

describe('[Happy Cases] when compress is passed', function() {

  it('empty iterables, it should return an empty iterable', function() {
    expect(Array.from(compress([], []))).to.deep.equal([]);
  });

  it('data bigger than selectors, stop at the limit of the selectors', function() {
    expect(Array.from(compress([1, 2, 3], [null, true]))).to.deep.equal([2]);
  });

  it('selectors bigger than data, stop at the limit of the data', function() {
    expect(Array.from(compress([1, 2], [false, true, true, true]))).to.deep.equal([2]);
  });

  it('selectors and data of equal size and all selectors are falsy', function() {
    expect(Array.from(compress([1, 2, 3, 4, 5, 6, 7], [false, null, undefined, 0, +0, -0, '']))).to.deep.equal([]);
  });

  it('selectors and data of equal size and all selectors are truthy', function() {
    expect(Array.from(compress([1, 2, 3, 4, 5, 6, 7], [true, [0], 1, 3.14, ' ', {}, []])))
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

});
