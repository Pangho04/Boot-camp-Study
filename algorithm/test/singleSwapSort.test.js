import { expect } from "chai";
import singleSwapSort from "../lib/singleSwapSort";

describe("Single Swap Sort", function () {
  it("should find out if the given array can be sorted in a single swap.", function () {
    expect(singleSwapSort([3, 2, 1])).to.eql(true);
    expect(singleSwapSort([4, 3, 2, 1])).to.eql(false);
    expect(singleSwapSort([1, 2, 3, 4, 5, 7, 6])).to.eql(true);
    expect(singleSwapSort([5, 1, 2, 3, 4])).to.eql(false);
    expect(singleSwapSort([1, 2, 3, 4, 5, 6])).to.eql(true);
    expect(singleSwapSort([2, 4, 12, 8, 10, 6])).to.eql(true);
    expect(singleSwapSort([6, 5, 4, 2, 1])).to.eql(false);
    expect(singleSwapSort([100, 1])).to.eql(true);
    expect(singleSwapSort([])).to.eql(true);
  });
});
