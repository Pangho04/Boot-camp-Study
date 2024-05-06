/*
 *
 * 자연수 n의 각 자리 숫자를 더하면 새로운 자연수 n'을 만들 수 있습니다.
 * 또 새로운 자연수 n'의 각 자릿수를 더하여 새로운 자연수 n''을 만들 수 있습니다.
 * 이 과정을 계속 반복하면 최종적으로 한 자리 숫자를 만들 수 있습니다.
 *
 * - 456789의 각 자리 숫자를 더하면 4 + 5 + 6 + 7 + 8 + 9 = 39
 * - 39는 3 + 9 = 12
 * - 12는 1 + 2 = 3
 *
 * 위와 같이 반복하여 한 자리 숫자 3을 얻을 수 있습니다.
 *
 * 자연수 n이 주어졌을 때 각 자릿수를 더하는 과정을 반복하여 한 자리 숫자를 만들어 반환하는 함수를 완성해 주세요.
 *
 * < Examples >
 *
 * concatNumber(10);      // 1
 * concatNumber(456789);  // 3
 *
 */


// 1.k배열의 각 인덱스 숫자를 차례로 더하는 반복문 실행
//   1-1. 인덱스 인식 하기 위해 각 문자열로 변환.
// 2.실행 결과 10보다 같거나 클 경우, 자리수 더하기 반복문 재실행
//   2-1. 비교를 위해 숫자로 변환.
//   2-2. 비교 후, 10보다 클 경우 문자열로 재변환.
// 3. 숫자로 변환 후, 10보다 작을 경우 해당 값 반환.

export default function concatNumber(k) {
  // your code..
  let sumArr = 0;
  let result = 0;
  const arr = String(k)
  for (let i = 0; i < arr.length; i++) {
     sumArr += Number(arr[i]);
  }

  let strsa = String(sumArr)

  do{
    result = 0;
    for (let i = 0; i < strsa.length; i++) {
    result += Number(strsa[i])
    };

    strsa = String(result);

  } while (result >= 10);

  return result;
}
