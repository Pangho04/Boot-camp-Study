import { expect } from "chai";
import findMissingElement from "../lib/findMissingElement";

describe("Find missing element", function () {
  it("should pass base cases", function () {
    const result = findMissingElement(
      [4, 1, 0, 2, 9, 6, 8, 7, 5, 3],
      [6, 4, 7, 2, 1, 0, 8, 3, 9]
    );

    expect(result).to.eql(5);
  });

  it("should pass when every element is same", function () {
    const result = findMissingElement(
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    );

    expect(result).to.eql(0);
  });
});
