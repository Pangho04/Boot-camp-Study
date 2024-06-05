import { expect } from "chai";
import generateString from "../lib/generateString";

function consecutiveCountValidator(str) {
  return str.match(/(.)\1\1/) === null;
}

function totalLettersCountValidator(str, N, K) {
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      countA++;
    } else if (str[i] === "b") {
      countB++;
    }
  }

  return countA === N && countB === K;
}

describe("String Generator", function () {
  it("should generate a string which has no 3 consecutive letters being the same", function () {
    const N = 5;
    const K = 3;
    const result = generateString(N, K);

    const hasValidConsecutiveLetters = consecutiveCountValidator(result);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });

  it("should generate a string which has N letters of 'a' and K letters of 'b'", function () {
    const N = 5;
    const K = 5;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    expect(hasValidTotalLetters).to.eql(true);
  });

  it("Extra Case 1", function () {
    const N = 10;
    const K = 10;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    const hasValidConsecutiveLetters = consecutiveCountValidator(result, N, K);

    expect(hasValidTotalLetters).to.eql(true);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });

  it("Extra Case 2", function () {
    const N = 6;
    const K = 14;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    const hasValidConsecutiveLetters = consecutiveCountValidator(result, N, K);

    expect(hasValidTotalLetters).to.eql(true);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });

  it("Extra Case 3", function () {
    const N = 1;
    const K = 4;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    const hasValidConsecutiveLetters = consecutiveCountValidator(result, N, K);

    expect(hasValidTotalLetters).to.eql(true);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });

  it("Extra Case 4", function () {
    const N = 0;
    const K = 0;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    const hasValidConsecutiveLetters = consecutiveCountValidator(result, N, K);

    expect(hasValidTotalLetters).to.eql(true);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });

  it("Extra Case 5", function () {
    const N = 0;
    const K = 2;
    const result = generateString(N, K);

    const hasValidTotalLetters = totalLettersCountValidator(result, N, K);
    const hasValidConsecutiveLetters = consecutiveCountValidator(result, N, K);

    expect(hasValidTotalLetters).to.eql(true);
    expect(hasValidConsecutiveLetters).to.eql(true);
  });
});
