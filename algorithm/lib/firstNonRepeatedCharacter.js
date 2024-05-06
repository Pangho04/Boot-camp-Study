/**
 * Given an arbitrary input string, return the first non-repeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AABCABD'); // => 'C'
 */

export default function firstNonRepeatedCharacter(str) {
  // TODO: code here..
  const getSame = {};

  for (let i = 0; i < str.length; i++) {
    if (getSame[str[i]] === undefined) {
      getSame[str[i]] = 1;
    } else {
      getSame[str[i]]++;
    }
  }
  
  for (const x in getSame) {
    if (getSame[x] === 1) {
      return x;
    }
  }
}