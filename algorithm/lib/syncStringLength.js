/*
 *
 * 주어진 배열 내의 모든 문자열이 가장 긴 문자열의 길이와
 * 동일한 길이를 가지도록 하고 싶습니다.
 *
 * 만약 어떤 문자열의 길이가 가장 긴 문자열의 길이보다 짧다면,
 * 길이가 가장 긴 문자열의 길이와 같아 질때 까지,
 * 그 문자열의 앞에 빈 문자를 추가합니다.
 *
 * 위 규칙대로 변환된 문자열 배열을 반환하는 함수를 작성하세요.
 *
 * < 제약 >
 * - 배열의 요소인 문자열은 영문 대문자 만으로 구성됩니다.
 * - 배열의 요소인 문자열의 길이는 1이상 50이하입니다.
 *
 * < Examples >
 *
 * syncStringLength([ "AAA", "BBBBB", "CC" ]); // [ "  AAA", "BBBBB", "   CC" ]
 *
 */

// 1. array 내 모든 요소의 길이를 잰다.
// 2. 모든 요소들의 길이로 된, 새로운 배열(arrayLen)을 만든다.
// 3. 최댓값과 최소값(x)의 index를 구한다. => 문제 오이해.
// 4(x). 최소값과 최대값의 차를 구한다. => 문제 오이해.
// 5. 새로운 배열을 만든다.(result)
// 6. 인덱스별 차례대로, array[i]문자를 result에 넣는다.
// 7. 해당 차례가 최솟값일 경우, 4.에서 구한 값 만큼 공백을 넣어준다.
// 8. result 배열을 반환한다.

export default function syncStringLength(array) {
  // your code..
  const arrayLen = [];
  const result = [];

  for (let i = 0; i < array.length; i++) {
    arrayLen.push(array[i].length);
  }

  const maxLen = Math.max(...arrayLen);

  for (let i = 0; i < array.length; i++) {
    if (arrayLen[i] < maxLen) {
      const setBlank = maxLen - arrayLen[i];
      let blank = " "
      let blanks= "";
      let j = 0;
      console.log(setBlank)
      while (j < setBlank) {
        blanks += blank
        j++;
      }
      result.push(blanks + array[i]);
    } else {result.push(array[i]);}
  }
  return result;
}
