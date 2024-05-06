import { expect } from "chai";
import longestRun from "../lib/longestRun";

describe("Longest Run", function () {
  it("should pass base cases", function () {
    expect(longestRun("abbbcc")).to.eql([1, 3]);
    expect(longestRun("aabbc")).to.eql([0, 1]);
    expect(longestRun("abcd")).to.eql([0, 0]);
  });

  it("Longest Run이 문자열의 마지막에 존재하는 경우", function () {
    expect(longestRun("ababaa")).to.eql([4, 5]);
    expect(longestRun("aabbccc")).to.eql([4, 6]);
  });

  it("Longest Run이 문자열의 중간에 존재하는 경우", function () {
    expect(longestRun("adaaaaada")).to.eql([2, 6]);
  });

  it("Longest Run이 문자열의 처음에 존재하는 경우", function () {
    expect(longestRun("aaaaacccccddddd")).to.eql([0, 4]);
    expect(longestRun("aaaaa")).to.eql([0, 4]);
  });

  it("문자열이 하나의 문자로 구성된 경우", function () {
    expect(longestRun("aaaaa")).to.eql([0, 4]);
  });

  it("문자열이 특수문자를 포함하는 경우", function () {
    expect(longestRun("a! asdgfa#@$@#^)))))")).to.eql([15, 19]);
  });
});
