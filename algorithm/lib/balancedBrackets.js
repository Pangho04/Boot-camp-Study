/**
 *
 * Detect if the given brackets are balanced
 *
 * balancedBrackets('({[]})({[]})');    // true
 *
 * balancedBrackets('{([)]}');          // false
 *
 *
 */

export default function balancedBrackets(input) {
  let passedIndex = 0;

  if (input.length%2 !== 0) {
    return false;
  }

  function reverseChar (char) {
    let reversedChar = [];
    for (let i = 0; i < char.length; i++) {
      if (char[i] === "(") {
        reversedChar.push(")");
      } else if (char[i] === "{") {
        reversedChar.push("}");
      } else {
        reversedChar.push("]");
      }
    }
    reversedChar.reverse();
      return reversedChar.join('');
  }

  if (input.slice(0, input.length/2) === input.slice(input.length/2)) {
    return true;
  }

  for (let i = 0; i < input.length; i++) {
    let passedInput = input.slice(i - passedIndex, i);
    let compareInput = input.slice(i , i + passedIndex)

    if (input[i] === ")" || input[i] ===  "}" || input[i] === "]") {

      if( reverseChar(passedInput) !== compareInput ) {
        return false;
      } else {
        i = passedIndex + i + 1;
        passedIndex = 0;
      }

    } else {
      passedIndex ++;
    }
  }
  return true;
}
