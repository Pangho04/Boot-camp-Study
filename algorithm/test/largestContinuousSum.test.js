import { expect } from "chai";
import largestContinuousSum from "../lib/largestContinuousSum";

describe("Largest Continuous Sum", function () {
  it("should return largest continuous sum from the given array", function () {
    expect(largestContinuousSum([1, 3, -10, 2, 7])).to.eql(9);
    expect(largestContinuousSum([3, 2, 6, -3, 4, -2, 99, 0, -2, 1])).to.eql(
      109
    );
    expect(largestContinuousSum([3, 2, 6, -1, 3, -2, 9])).to.eql(20);
  });

  it("when every element is zero", function () {
    expect(largestContinuousSum([0, 0, 0, 0, 0, 0])).to.eql(0);
  });

  it("when every element is negative integer", function () {
    expect(largestContinuousSum([-1, -3, -2, -99, -75, -34])).to.eql(-1);
    expect(largestContinuousSum([-99, -43, -25, -456, -2, -23, -25])).to.eql(
      -2
    );
  });
});
