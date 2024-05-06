/*
 * Given two arrays of positive integers,
 * add their elements into a new array.
 * The solution should add both arrays,
 * one by one starting from the 0'th index,
 * and split the sum into individual digits if it is a 2–digit number.
 *
 * Input : [23, 5, 2, 7, 87], [4, 67, 2, 8]
 * Output: [2, 7, 7, 2, 4, 1, 5, 8, 7]
 *
 * Input : [], [4, 67, 2, 8]
 * Output: [4, 6, 7, 2, 8]
 *
 */

// 1. 자리마다 더한 문자열로 이어넣기
//  1-1. 두 배열 중, 큰 배열의 길이 만큼 반복.
//  1-2. 두 배열 중, 작은 배열을 초과하는 반복일 경우 0 반환 조건문.
// 2. 합하여 두자리가 넘는 숫자도 있으므로, 모든 숫자들 ''으로 나누기
//  2-1. 각 자리 수 숫자로 변환하여 결과 배열에 넣기.
// 3. 결과 배열 출력.

export default function addArrays(arrayA, arrayB) {
  let result = [];
  let sum = '';
  let len;

  if (arrayA.length > arrayB.length) {
    len = arrayA.length;
  } else {
    len = arrayB.length;
    }

  for (let i = 0; i < len; i++) {
    sum += `${((arrayA[i] !== undefined ? arrayA[i] : 0 ) + (arrayB[i] !== undefined ? arrayB[i] : 0))}`
  }

  sum = sum.split('');

  for(let i = 0; i < sum.length; i++){
  result.push(Number(sum[i]));
  }

  return result;
}
