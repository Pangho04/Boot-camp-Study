import { expect } from "chai";
import findCommonElements from "../lib/commonElements/commonElements";

describe("Common Elements", function () {
  it("should pass base cases", function () {
    expect(
      findCommonElements(
        [10, 20, 51, 66, 78, 99, 99],
        [5, 6, 20, 35, 44, 66, 100, 200],
        [1, 2, 10, 20, 40, 50, 66, 77]
      )
    ).to.eql(66);
    expect(
      findCommonElements(
        [1, 3, 5, 7, 9, 11, 11],
        [1, 2, 3, 3, 4, 5, 6, 7],
        [2, 4, 6, 6, 8, 10, 12, 14, 16]
      )
    ).to.eql(-1);
  });
});
