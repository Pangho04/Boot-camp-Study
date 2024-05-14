/*

  A student decides to perform some operations on big words to compress them, so they become easy to remember.
  An operation consists of choosing a group of K consecutive equal characters and removing them.
  The student keeps performing this operation as long as it's possible.
  What would be the final word after the operation is performed?

  Your goal is to help the student find the final word that will remain.

  Consider, for example, the string word = "abbcccb" and K = 3.

  - We can remove "c", now word = "abbb".
  - Now we can remove "b", so the final word will be "a".

  It can be easily proven that the final word will be unique.
  Also, it is guaranteed that the final word consists of at least one character.

  Complete the function `compressWord`. The function must return a string denoting the final word.

  `compressWord` has the following parameters:
  - word: a string of lowercase English letters
  - K: an integer

  ##### Sample input

  - word: "aba"
  - K: 2

  ##### Sample output

  - "aba"

 */

export default function compressWord(word, K) {
  let count = 1;
  let targetIndex = null;
  let filterdString = null;

  for (let j = 0; j < word.length; j++) {
    if (word[j] === word[j + 1]) {
      count ++;
      if (count === K) {
        targetIndex = j - (K - 2)
        filterdString = word.slice(0, targetIndex) + word.slice(targetIndex + K);
        word = filterdString;
        j = -1;
        count = 1;
      } else if (!word[j + 1] === word[j + 2]) {
        count = 1;
      }
    } else {
      count = 1;
    }
  }
  if (!filterdString) {
    return word;
  } else {
    return filterdString;
  }
}
