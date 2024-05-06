import { expect } from "chai";
import firstNonRepeatedCharacter from "../lib/firstNonRepeatedCharacter";
// import는 무엇일까요?
// import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// export: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

describe("First Non-repeated Characters", function () {
  it("should pass base cases", function () {
    expect(firstNonRepeatedCharacter("ABA")).to.eql("B");
    expect(firstNonRepeatedCharacter("AABCABD")).to.eql("C");
    expect(firstNonRepeatedCharacter("ABCDEFG")).to.eql("A");
  });

  it("should handle special characters", function () {
    expect(firstNonRepeatedCharacter(" ABCD")).to.eql(" ");
    expect(firstNonRepeatedCharacter("A!ABBCCDEF")).to.eql("!");
    expect(firstNonRepeatedCharacter("AAKIE;KIEF")).to.eql(";");
  });
});
