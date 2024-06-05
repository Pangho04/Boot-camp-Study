import { expect } from "chai";
import transformString from "../lib/stringTransform";

describe("String Transformation", function () {
  it("should return a possible transformation of the given string.", function () {
    expect(transformString("AABBCC")).to.eql("AC");
    expect(transformString("ABAACBCCABABACBCCABAA")).to.eql("ACACA");
    expect(transformString("AAAAAAA")).to.eql("A");
    expect(transformString("BBBBBBB")).to.eql("BBBBBBB");
    expect(transformString("CCCCCCC")).to.eql("C");
  });
});
