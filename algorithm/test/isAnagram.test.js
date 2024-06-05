import { expect } from "chai";
import "../lib/isAnagram";

describe("Is Anagram", function () {
  it("should pass base cases", function () {
    expect("finder".isAnagram("friend")).to.eql(true);
    expect("solver".isAnagram("lovers")).to.eql(true);
    expect("book".isAnagram("boot")).to.eql(false);
  });

  it("should ignore special characters", function () {
    expect("Funeral".isAnagram("Real fun")).to.eql(true);
    expect("React DOM".isAnagram("demo")).to.eql(false);
    expect("School master".isAnagram("The classroom")).to.eql(true);
    expect("its you.".isAnagram("suit yoh!")).to.eql(false);
    expect("Are you study?".isAnagram("your tuesday.")).to.eql(true);
  });

  // TODO: Add more test cases on your own!
});
