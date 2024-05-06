import { expect } from "chai";
import integerDifference from "../lib/integerDifference";

describe("Integer Difference", function () {
  it("should pass base cases", function () {
    expect(integerDifference(4, [1, 1, 5, 6, 9, 16, 27])).to.eql(3);
    expect(integerDifference(2, [1, 1, 3, 3])).to.eql(4);
  });

  it("when difference is 0", function () {
    expect(integerDifference(0, [1, 1, 5, 6, 9, 16, 27])).to.eql(1);
    expect(integerDifference(0, [4, 4, 4, 4, 1, 3, 3, 3, 2, 2])).to.eql(10);
    expect(integerDifference(0, [1, 1, 1, 1])).to.eql(6);
    expect(integerDifference(0, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7])).to.eql(45);
  });

  it("when array has 3 group", function () {
    expect(integerDifference(2, [1, 1, 1, 5, 5, 5, 3, 3, 3])).to.eql(18);
  });

  it("when array lengh is 2", function () {
    expect(integerDifference(9, [1, 10])).to.eql(1);
  });

  it("when there is zero case matching", function () {
    expect(integerDifference(9, [1, 11, 55, 99, 77, 44])).to.eql(0);
  });

  it("when array is not sorted", function () {
    expect(integerDifference(2, [4, 2, 0, 8, 4, 6, 10])).to.eql(7);
  });
});
