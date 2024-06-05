/*
 *
 * Generate all permutations of a given string.
 *
 * < Examples >
 *
 * getPermutations("abc")  // ["abc", "acb", "bac", "bca", "cab", "cba"]
 *
 *
 */

export default function getPermutations(str) {
  let result = [];

  if (str.length === 1) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    let targetChar = str[i];
    let restChar = str.slice(0, i) + str.slice(i + 1);

    let permChar = getPermutations(restChar);

    for (let char of permChar) {
      result.push(targetChar + char);
    }
  }

  return result.sort();
}
