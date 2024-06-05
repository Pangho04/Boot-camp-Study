import { expect } from "chai";
import kthNumber from "../lib/kthNumber";

describe("kthNumber", function () {
  it("should pass base cases", function () {
    expect(kthNumber(6, 8, 8)).to.eql(32);
    expect(kthNumber(1, 2, 3)).to.eql(3);
    expect(kthNumber(2, 4, 8)).to.eql(16);
  });

  it("should pass big number case", function () {
    const { MAX_SAFE_INTEGER } = Number;
    const result = kthNumber(999999, 1000000, 1000000);

    expect(MAX_SAFE_INTEGER >= result).to.eql(true);
    expect(result).to.eql(500000000000);
  });
});
