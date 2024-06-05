import { expect } from "chai";
import characterFrequency from "../lib/characterFrequency";
// 이런.. import에 대해 아직 공부해보지 않으셨나요?
// import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// export: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

describe("Character Frequency", function () {
  it("should pass base cases", function () {
    expect(characterFrequency("mississippi")).to.eql([
      ["i", 4],
      ["s", 4],
      ["p", 2],
      ["m", 1],
    ]);
    expect(characterFrequency("miaaiaaippi")).to.eql([
      ["a", 4],
      ["i", 4],
      ["p", 2],
      ["m", 1],
    ]);
  });

  it("hee's TC", function () {
    expect(characterFrequency("a")).to.eql([["a", 1]]);
    expect(characterFrequency("pppppppppp")).to.eql([["p", 10]]);
    expect(characterFrequency("abcdefghijklmnopqrstuvwxyz")).to.eql([
      ["a", 1],
      ["b", 1],
      ["c", 1],
      ["d", 1],
      ["e", 1],
      ["f", 1],
      ["g", 1],
      ["h", 1],
      ["i", 1],
      ["j", 1],
      ["k", 1],
      ["l", 1],
      ["m", 1],
      ["n", 1],
      ["o", 1],
      ["p", 1],
      ["q", 1],
      ["r", 1],
      ["s", 1],
      ["t", 1],
      ["u", 1],
      ["v", 1],
      ["w", 1],
      ["x", 1],
      ["y", 1],
      ["z", 1],
    ]);
  });
});
