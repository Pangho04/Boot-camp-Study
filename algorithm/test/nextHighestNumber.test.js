import { expect } from "chai";
import nextHighestNumber from "../lib/nextHighestNumber";

describe("Next Highest Number", function () {
  it("should find the next highest number", function () {
    expect(nextHighestNumber(1234)).to.eql(1243);
  });

  it("Basic test", function () {
    expect(nextHighestNumber(37451)).to.eql(37514);
    expect(nextHighestNumber(4231)).to.eql(4312);
    expect(nextHighestNumber(627438)).to.eql(627483);
    expect(nextHighestNumber(15432)).to.eql(21345);
    expect(nextHighestNumber(154320)).to.eql(201345);
    expect(nextHighestNumber(21543)).to.eql(23145);
    51543;
    expect(nextHighestNumber(51543)).to.eql(53145);
  });

  it("when input is already highest number", function () {
    expect(nextHighestNumber(54321)).to.eql(54321);
    expect(nextHighestNumber(99999)).to.eql(99999);
    expect(nextHighestNumber(1000)).to.eql(1000);
    expect(nextHighestNumber(0)).to.eql(0);
  });

  it("when input is negative", function () {
    expect(nextHighestNumber(-4321)).to.eql(-4312);
  });
});
