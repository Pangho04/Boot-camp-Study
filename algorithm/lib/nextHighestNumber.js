/*
 *
 * Given a number, find the next higher number using only the digits in the given number.
 *
 * < Examples >
 *
 * f(1234)  // 1243
 *
 */

export default function nextHighestNumber(number) {
  // your code..
  let numStr = String(number);
  let result = [];
  let getMinHighest = [];
  let MinHighest;
  let restOfNum;
  const numArr = numStr.split("");

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[0] === "-" && numStr[i] < numStr[i - 1] && i === numStr.length - 1){
      result.push(numStr.slice(0, i - 1));
      return Number(result + numStr[i] + numStr[i - 1]);
    }
    if (numStr[i] > numStr[i - 1] && i === numStr.length - 1) {
      result.push(numStr.slice(0, i - 1));
      return Number(result + numStr[i] + numStr[i - 1]);
    } else if (numStr[i] > numStr[i - 1]) {
      for (let j = i; j < numStr.length; j++) {
        if (numStr[j] > numStr[i - 1]) {
          getMinHighest.push(numStr[j])
        }
      }
      MinHighest = Math.min(...getMinHighest);
      restOfNum = numStr.slice(i - 1).replace(MinHighest,'').split('');
      if (MinHighest > numStr[i - 1]) {
        result.push(numStr.slice(0, i - 1));
        result.push(MinHighest + restOfNum.sort((a,b) => a - b).join(''));
        return Number(result.join(''));
      }
    }
  }
  return number;
}

