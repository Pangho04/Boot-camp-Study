import { expect } from "chai";
import balancedBrackets from "../lib/balancedBrackets";

describe("Balanced Brackets", function () {
  it("should return true when brackets are balanced", function () {
    expect(balancedBrackets("(){}[](){}[]")).to.eql(true);
    expect(balancedBrackets("[]{}()[]{}()")).to.eql(true);
    expect(balancedBrackets("({[]})({[]})")).to.eql(true);
    expect(balancedBrackets("({[]})(){}[]({[]})")).to.eql(true);
    expect(balancedBrackets("[{}()][{}()]")).to.eql(true);
  });

  it("should return false when brackets are NOT balanced", function () {
    expect(balancedBrackets("{([)]}")).to.eql(false);
    expect(balancedBrackets("{[(])}")).to.eql(false);
  });

  it("some more random cases", function () {
    expect(balancedBrackets(")))))))")).to.eql(false);
    expect(balancedBrackets("{({()})}")).to.eql(true);
    expect(balancedBrackets("[][][][][][]()()()(){}{}{}")).to.eql(true);
    expect(balancedBrackets("({({({})})}]")).to.eql(false);
  });
});
