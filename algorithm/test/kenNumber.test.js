import { expect } from "chai";
import kenNumber from "../lib/kenNumber";

describe("kenNumber", function () {
  it("should pass base cases", function () {
    expect(kenNumber(1)).to.eql(1);
    expect(kenNumber(2)).to.eql(2);
    expect(kenNumber(3)).to.eql(3);
    expect(kenNumber(9)).to.eql(9);
    expect(kenNumber(10)).to.eql(10);
    expect(kenNumber(11)).to.eql(12);
    expect(kenNumber(12)).to.eql(21);
    expect(kenNumber(13)).to.eql(23);
    expect(kenNumber(14)).to.eql(32);
    expect(kenNumber(15)).to.eql(34);
    expect(kenNumber(16)).to.eql(43);
    expect(kenNumber(100)).to.eql(6765);
  });

  it("should pass big number", function () {
    expect(kenNumber(10000)).to.eql(65456545456);
  });
});
