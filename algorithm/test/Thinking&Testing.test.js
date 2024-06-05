import { expect } from 'chai';
import testit from '../lib/Thinking&Testing.js';

describe('Report about something', () => {
  it('A report, about something...', () => {
    expect(testit("")).to.eql([0,0,0,0,0]);
    expect(testit("1")).to.eql([0,1,0,0,0]);
    expect(testit("2")).to.eql([0,1,0,0,0]);
    expect(testit("3")).to.eql([0,1,0,0,0]);
    expect(testit("a")).to.eql([1,0,0,1,0]);
    expect(testit("b")).to.eql([1,0,0,0,1]);
    expect(testit("c")).to.eql([1,0,0,0,1]);
    expect(testit("?")).to.eql([0,0,1,0,0]);
    expect(testit("!")).to.eql([0,0,1,0,0]);
    expect(testit(".")).to.eql([0,0,1,0,0]);
  });
});
//click "Submit" try more testcase...