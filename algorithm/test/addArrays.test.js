import { expect } from "chai";
import addArrays from "../lib/addArrays";

describe("Add arrays", function () {
  it("should add arrays with single digits", function () {
    expect(addArrays([3, 5, 7, 2, 1], [6, 2, 2, 2, 2])).to.eql([9, 7, 9, 4, 3]);
    expect(addArrays([2, 4, 6, 8, 1], [5, 4, 3, 1])).to.eql([7, 8, 9, 9, 1]);
    expect(
      addArrays(
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      )
    ).to.eql([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  });

  it("should split numbers with two digits", function () {
    expect(addArrays([5, 5, 5], [5, 5, 5])).to.eql([1, 0, 1, 0, 1, 0]);
    expect(addArrays([7, 7, 7, 7, 7], [3, 3, 3])).to.eql([
      1, 0, 1, 0, 1, 0, 7, 7,
    ]);
    expect(addArrays([70, 5, 11, 3, 8], [2, 10, 3])).to.eql([
      7, 2, 1, 5, 1, 4, 3, 8,
    ]);
  });
});
