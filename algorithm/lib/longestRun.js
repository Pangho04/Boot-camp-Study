/**
 * Write a function that, given a string, finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 */

export default function longestRun(string) {
  // TOD: Your code here!
  let sameChar = [];
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else if (string[i + 1] === undefined) {
      if (sameChar[1] >= count) {
        break;
      } else {
        sameChar = [];
        sameChar.push(i, count);
        break;
      }
    } else if (sameChar[1] === undefined || sameChar[1] < count) {
      sameChar = [];
      sameChar.push(i, count);
      count = 1;
    } else {
      count = 1;
    }
  }
  return [sameChar[0] - (sameChar[1] - 1) , sameChar[0]];
}

