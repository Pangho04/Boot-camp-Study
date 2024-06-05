/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time?
 * There is an algorithm that uses O(n) time.
 *
 */

String.prototype.isAnagram = function (string) {
  let targetChars = String(this).toLowerCase().split('').sort().filter((x) => x !== '.' && x !=='?'&& x !== '!' && x !== ',' && x !== ' ');
  let argumentChars = string.toLowerCase().split('').sort().filter((x) => x !== '.' && x !=='?'&& x !== '!' && x !== ',' && x !== ' ');

  for(let i = 0; i < string.length; i++) {
    if (targetChars[i] !== argumentChars[i]) {
      return false;
    } else if (i === string.length - 1) {
      return true;
    }
  }
};
