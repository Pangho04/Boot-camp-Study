import { expect } from "chai";
import getBeautifulYear from "../lib/beautifulYear";

describe("Beautiful Year", function () {
  it("should return the next beautiful year.", function () {
    expect(getBeautifulYear(2015)).to.eql(2016);
    expect(getBeautifulYear(1987)).to.eql(2013);
    expect(getBeautifulYear(9876)).to.eql(10234);
    expect(getBeautifulYear(2198)).to.eql(2301);
    expect(getBeautifulYear(987)).to.eql(1023);
    expect(getBeautifulYear(98)).to.eql(102);
    expect(getBeautifulYear(9)).to.eql(10);
  });
});
