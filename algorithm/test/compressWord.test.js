import { expect } from "chai";
import compressWord from "../lib/compressWord";

describe("compressWord", function () {
  it("should pass base cases", function () {
    expect(compressWord("aba", 2)).to.eql("aba");
    expect(compressWord("cabbac", 2)).to.eql("");
    expect(compressWord("aabbcccbb", 3)).to.eql("aab");
    expect(compressWord("aabbcccaaab", 3)).to.eql("aa");
  });

  it("should pass edge cases", function () {
    expect(compressWord("", 2)).to.eql("");
    expect(compressWord("aaa", 0)).to.eql("aaa");
  });

  it("should pass big string", function () {
    expect(compressWord("abb".repeat(10001), 2)).to.eql("a");
  });
});
