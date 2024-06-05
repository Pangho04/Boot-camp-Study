import { expect } from "chai";
import challenge from "../lib/challenge";

describe("Challenge", function () {
  it("should pass base cases", function () {
    expect(challenge(7, [1, 3, 6], [2, 1, 4, 6])).to.eql([1, 2, 2]);
    expect(challenge(10, [1, 2, 3, 4, 5], [7, 8, 9])).to.eql([5, 3, 0]);
  });
});
