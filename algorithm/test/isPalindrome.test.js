import { expect } from "chai";
import isPalindrome from "../lib/isPalindrome";

describe("Palindrome", function () {
  it("should return true when the given number is palindrome", function () {
    expect(isPalindrome(1)).to.eql(true);
    expect(isPalindrome(3)).to.eql(true);
    expect(isPalindrome(101)).to.eql(true);
    expect(isPalindrome(1001)).to.eql(true);
    expect(isPalindrome(10001)).to.eql(true);
    expect(isPalindrome(10301)).to.eql(true);
    expect(isPalindrome(30003)).to.eql(true);
    expect(isPalindrome(800008)).to.eql(true);
    expect(isPalindrome(99999999999999)).to.eql(true);
  });

  it("should return false when the given number is NOT palindrome", function () {
    expect(isPalindrome(23)).to.eql(false);
    expect(isPalindrome(10)).to.eql(false);
    expect(isPalindrome(103)).to.eql(false);
    expect(isPalindrome(10323301)).to.eql(false);
    expect(isPalindrome(999999997999)).to.eql(false);
  });

  it("should return false when the given number is NOT negative", function () {
    expect(isPalindrome(-23)).to.eql(false);
    expect(isPalindrome(-10)).to.eql(false);
    expect(isPalindrome(-103)).to.eql(false);
    expect(isPalindrome(-10323301)).to.eql(false);
    expect(isPalindrome(-999999997999)).to.eql(false);
    expect(isPalindrome(-1)).to.eql(false);
    expect(isPalindrome(-3)).to.eql(false);
    expect(isPalindrome(-101)).to.eql(false);
    expect(isPalindrome(-1001)).to.eql(false);
    expect(isPalindrome(-10001)).to.eql(false);
    expect(isPalindrome(-10301)).to.eql(false);
    expect(isPalindrome(-30003)).to.eql(false);
    expect(isPalindrome(-800008)).to.eql(false);
    expect(isPalindrome(-99999999999999)).to.eql(false);
  });

  it("self test", function () {
    expect(isPalindrome(343)).to.eql(true);
    expect(isPalindrome(981238)).to.eql(false);

  });
});
