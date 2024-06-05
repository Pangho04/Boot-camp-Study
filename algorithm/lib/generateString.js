/*
 *
 * Write a function solution that,
 * given two integers N and K,
 * returns a string containing exactly N letters of 'a' and exactly K letters of 'b'
 * with no 3 consecutive letters being the same
 * (in other words, neither "aaa" nor "bbb" may occur in the returned string).
 *
 * 1. Given A = 5 and B = 3, your function may return "aabaabab".
 *    Note that "abaabbaa" would ALSO be a correct answer.
 *    Your function may return ANY correct answer.
 * 2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb"
 *    or any of several other strings.
 * 3. Given A = 1 and B = 4, your function should return "bbabb",
 *    which is the only correct answer in this case.
 *
 * Assume that:
 * - A and B are integers within the range [0..100];
 * - at least one solution exists for the given A and B.
 *
 * In your solution, focus on correctness.
 * The performance of your solution will not be the focus of the assessment.
 *
 */

export default function generateString(N, K) {
  // Your code..
  let origin = 'a'.repeat(N) + 'b'.repeat(K);
  let countA = 0;
  let countB = 0;
  let result = '';

  if (!origin.includes("bbb") && !origin.includes("aaa")) {
    return origin;
  }

  while (origin.length > 0) {
    for (let i = 0; i < origin.length; i++) {
      if (origin[i] === 'a') {
        countA ++;
      } else if (origin[i] === 'b') {
        countB ++;
      }
    }

    if (countA === countB) {
      removeA();
      removeB();
    }

    if (countB > countA) {
      removeBB();
      removeA();
    } else if (countA > countB) {
      removeAA();
      removeB();
    } else {
      removeA();
      removeB();
    }

    countA = 0;
    countB = 0;
  }

  function removeA() {
    const findA = origin.indexOf('a');
    result += origin.slice(findA, findA + 1);
    origin = origin.replace("a",'');
  }
    function removeB() {
    const findB = origin.indexOf('b')
    result += origin.slice(findB, findB + 1);
    origin = origin.replace("b",'');
  }
  function removeAA() {
    const findAA = origin.indexOf('aa')
    result += origin.slice(findAA, findAA + 2);
    origin = origin.replace("aa",'');
  }
  function removeBB() {
    const findBB = origin.indexOf('bb')
    result += origin.slice(findBB, findBB + 2);
    origin = origin.replace("bb",'');
  }

  return result;
}
