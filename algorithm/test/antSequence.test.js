import { expect } from "chai";
import antSequence from "../lib/antSequence";

describe("Ant Sequence", function () {
  it("should generate nth sequence number", function () {
    expect(antSequence(1)).to.eql("1");
    expect(antSequence(5)).to.eql("122111");
    expect(antSequence(6)).to.eql("112213");
  });
});
