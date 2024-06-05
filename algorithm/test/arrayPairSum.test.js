import { expect } from "chai";
import arrayPairSum from "../lib/arrayPairSum";

describe("Array Pair Sum", function () {
  it("should return number of pairs sum up to the given number.", function () {
    expect(arrayPairSum(10, [3, 4, 5, 6, 7])).to.eql(2);
    expect(arrayPairSum(8, [3, 4, 5, 4, 4])).to.eql(4);
  });

  it("when answer is 0", function () {
    expect(arrayPairSum(0, [3, 4, 5, 6, 7])).to.eql(0);
    expect(arrayPairSum(2, [3, 4, 5, 6, 7])).to.eql(0);
  });

  it("when same number exist in array", function () {
    expect(arrayPairSum(0, [0, 0, 0, 0, 0])).to.eql(10);
    expect(arrayPairSum(2, [1, 1, 1, 1, 1])).to.eql(10);
    expect(arrayPairSum(2, [1, 1, 1, 1, 1, 2, 3, 4])).to.eql(10);
  });

  it("when array is not sorted", function () {
    expect(arrayPairSum(4, [3, 1, 1, 2, 4, 2, 6, 8])).to.eql(3);
    expect(arrayPairSum(5, [5, 3, 1, 4, 5, 7, 8, 20, 2, 0])).to.eql(4);
  });

  it("when array has negative element", function () {
    expect(arrayPairSum(3, [6, -3, 2, 1, 5, -2, 2])).to.eql(4);
    expect(arrayPairSum(5, [4, 1, 10, 4, 2, 6, -5, -1])).to.eql(4);
  });

  it("when k is negative integer", function () {
    expect(arrayPairSum(-2, [4, 5, 2, -4, -7, 3, -6])).to.eql(3);
    expect(arrayPairSum(-5, [-8, 3, 4, 0, -1, -5, 8])).to.eql(2);
  });
});
