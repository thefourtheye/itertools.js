const expect = require('chai').expect;
const accumulate = require('../').accumulate;

describe('[Failure Cases] when accumulate is passed', function() {

  it('an invalid function, it should throw an error', function() {
    expect(() => accumulate([], [])).to.throw(TypeError, /second argument to accumulate must be a function object/);
  });

  it('an invalid iterable (undefined), it should throw an error', function() {
    expect(() => accumulate()).to.throw(TypeError, '\'Undefined\' object is not iterable');
  });

  it('an invalid iterable (null), it should throw an error', function() {
    expect(() => accumulate(null)).to.throw(TypeError, '\'Null\' object is not iterable');
  });

  it('an invalid iterable (number), it should throw an error', function() {
    expect(() => accumulate(1)).to.throw(TypeError, '\'Number\' object is not iterable');
  });

});

describe('[Happy Cases] when accumulate is passed', function() {

  it('a valid numbers array, it should accumulate and add them by default', function() {
    expect(Array.from(accumulate([1, 2, 3]))).to.deep.equal([1, 3, 6]);
  });

  it('a valid strings array, it should accumulate and concatenate them by default', function() {
    expect(Array.from(accumulate(['a', 'b', 'c']))).to.deep.equal(['a', 'ab', 'abc']);
  });

  it('a valid empty array, it should return an empty iterable', function() {
    expect(Array.from(accumulate([]))).to.deep.equal([]);
  });

  it('a valid empty object, it should return an empty iterable', function() {
    expect(Array.from(accumulate({}))).to.deep.equal([]);
  });

  it('a valid string object, it should return an accumulated strings array', function() {
    expect(Array.from(accumulate('abcd'))).to.deep.equal(['a', 'ab', 'abc', 'abcd']);
  });

  it('a valid empty string object, it should return an empty iterable', function() {
    expect(Array.from(accumulate(''))).to.deep.equal([]);
  });

  it('a valid object, it should accumulate and return keys and values arrays', function() {
    expect(Array.from(accumulate({
      'a': 'b'
    }))).to.deep.equal([['a', 'b']]);
  });

  it('a valid object with more than one key, with custom function, it should accumulate keys and values', function() {
    expect(Array.from(accumulate({
      'a': 'b',
      'c': 'd',
      'e': 'f'
    }, (a, b) => a.concat(b))))
      .to.deep.equal([['a', 'b'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e', 'f']]);
  });

});
