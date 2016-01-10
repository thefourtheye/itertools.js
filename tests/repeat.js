const expect = require('chai').expect;
const repeat = require('../').repeat;
const take = require('./take');

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

describe('[Happy Cases] when repeat is passed', function() {

  it('zero as n, it should return an empty iterable', function() {
    expect(Array.from(repeat(() => 1, 0))).to.deep.equal([]);
  });

  it('a valid integer, it should return a valid iterable', function() {
    expect(Array.from(repeat({}, 5))).to.deep.equal([{}, {}, {}, {}, {}]);
  });

  it('nothing for n, it should return an infinite generator', function() {
    const repeater = repeat(1);
    expect(take(repeater, 5)).to.deep.equal([1, 1, 1, 1, 1]);
    expect(take(repeater, 5)).to.deep.equal([1, 1, 1, 1, 1]);
    expect(take(repeater, 5)).to.deep.equal([1, 1, 1, 1, 1]);
    expect(take(repeater, 5)).to.deep.equal([1, 1, 1, 1, 1]);
  });

});
