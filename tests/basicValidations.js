var expect = require('chai').expect;
var itertools = require('../');

describe('when itertools items\' types are checked', function() {
  it('they should be functions', function() {
    expect(typeof itertools.accumulate).to.equal('function');
    expect(typeof itertools.chain).to.equal('function');
    expect(typeof itertools.combinations_with_replacement).to.equal('function');
    expect(typeof itertools.combinations).to.equal('function');
    expect(typeof itertools.compress).to.equal('function');
    expect(typeof itertools.count).to.equal('function');
    expect(typeof itertools.cycle).to.equal('function');
    expect(typeof itertools.dropwhile).to.equal('function');
    expect(typeof itertools.filterfalse).to.equal('function');
    expect(typeof itertools.groupby).to.equal('function');
    expect(typeof itertools.islice).to.equal('function');
    expect(typeof itertools.permutations).to.equal('function');
    expect(typeof itertools.product).to.equal('function');
    expect(typeof itertools.repeat).to.equal('function');
    expect(typeof itertools.starmap).to.equal('function');
    expect(typeof itertools.takewhile).to.equal('function');
    expect(typeof itertools.tee).to.equal('function');
    expect(typeof itertools.zip_longest).to.equal('function');
  });
});
