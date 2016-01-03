const expect = require('chai').expect;
const chain = require('../').chain;

describe('[Failure Cases] when chain is passed', function() {

  it('an invalid iterable, it should throw an error', function() {
    expect(() => Array.from(chain(1))).to.throw(TypeError, '\'Number\' object is not iterable');
  });

  it('a function, it should throw an error', function() {
    expect(() => Array.from(chain(() => 1))).to.throw(TypeError, '\'Function\' object is not iterable');
  });

});

describe('[Happy Cases] when chain is passed', function() {

  it('no arguments, it should return an empty iterable', function() {
    expect(Array.from(chain())).to.be.deep.equal([]);
  });

  it('valid iterables, it should return a valid chained iterable', function() {
    expect(Array.from(chain([1], [2, 3, 4]))).to.be.deep.equal([1, 2, 3, 4]);
    expect(Array.from(chain([1], [2, 3, 4], [[5, 6, 7], [8, 9]]))).to.be.deep.equal([1, 2, 3, 4, [5, 6, 7], [8, 9]]);
  });

});

describe('[Failure Cases] when chain.from_iterable is passed', function() {

  it('an invalid iterable, it should throw an error', function() {
    expect(() => Array.from(chain.from_iterable(1))).to.throw(TypeError, '\'Number\' object is not iterable');
  });

  it('no arguments, it should throw an error', function() {
    expect(() => Array.from(chain.from_iterable()))
      .to.throw(TypeError, 'from_iterable() takes exactly one argument (0 given)');
  });

  it('more than one arguments, it should throw an error', function() {
    expect(() => Array.from(chain.from_iterable([1], [2], [3])))
      .to.throw(TypeError, 'from_iterable() takes exactly one argument (3 given)');
  });

  it('a function, it should throw an error', function() {
    expect(() => Array.from(chain.from_iterable(() => 1)))
      .to.throw(TypeError, '\'Function\' object is not iterable');
  });

});

describe('[Happy Cases] when chain.from_iterable is passed', function() {

  it('valid iterables, it should return a valid chained iterable', function() {
    expect(Array.from(chain.from_iterable([[1], [2, 3, 4]]))).to.be.deep.equal([1, 2, 3, 4]);
    expect(Array.from(chain.from_iterable([[1], [2, 3, 4], [[5, 6, 7], [8, 9]]])))
      .to.be.deep.equal([1, 2, 3, 4, [5, 6, 7], [8, 9]]);
  });

});
