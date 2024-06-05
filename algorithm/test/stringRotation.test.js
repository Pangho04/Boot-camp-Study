import { expect } from "chai";
import isRotation from "../lib/stringRotation";

describe("String Rotation", function () {
  it("should find out if a string A is a rotation of another string B", function () {
    expect(isRotation("ABCD", "BCDA")).to.eql(true);
    expect(isRotation("ABCD", "ACBD")).to.eql(false);
  });

  it("when length of a,b is different", function () {
    expect(isRotation("ABCD", "BC")).to.eql(false);
  });

  it("when one of string is empty", function () {
    expect(isRotation("ABCD", "")).to.eql(false);
    expect(isRotation("", "ASFISDV")).to.eql(false);
  });

  it("when both of string are empty", function () {
    expect(isRotation("", "")).to.eql(true);
  });

  it("when string contains special characters or spaces", function () {
    expect(isRotation("ASDG@#)$@#*", "@#*ASDG@#)$")).to.eql(true);
    expect(isRotation("ASDG@#)  $@#*", "@#*ASDG@#)  $")).to.eql(true);
  });

  it("when string contains same characters", function () {
    expect(isRotation("AAAAAABAAA", "AAAAAAABAA")).to.eql(true);
  });
});
