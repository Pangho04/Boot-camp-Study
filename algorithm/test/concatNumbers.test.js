import { expect } from "chai";
import concatNumber from "../lib/concatNumbers";

describe("Concat Number", function () {
  it("should return a concatenated version of the given number", function () {
    expect(concatNumber(10)).to.eql(1);
    expect(concatNumber(456789)).to.eql(3);
    expect(concatNumber(0)).to.eql(0);
    expect(concatNumber(66)).to.eql(3);
    expect(concatNumber(342)).to.eql(9);
    expect(concatNumber(99999)).to.eql(9);
    expect(concatNumber(999999999999)).to.eql(9);
    expect(concatNumber(100000000009)).to.eql(1);
  });
});
