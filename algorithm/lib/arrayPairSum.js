/*
 *
 * Given an integer array, output the number of pairs that sum up to a specific value k.
 * Consider the fact that the same number can add up to k with its duplicates in the array.
 *
 * < Examples >
 *
 * f(10, [3, 4, 5, 6, 7])  // 2     Due to [6, 4], [7, 3]
 * f(8, [3, 4, 5, 4, 4])   // 4     Due to [3, 5], [4, 4], [4, 4], [4, 4]
 *
 */


// 1. 첫번째 자릿 수 부터 '자신의 다음 수와 더했을 시 k가 되는 값' 구해야함.
// 2. 반복문 구축하기.
// 3. 해당 조합을 찾았을 경우: i번째 자신과 더하면 k가 되는 해당 값을 배열에 넣기.
// 4. 해당 배열들을 재차 정답 모음 배열에 넣기
// 5. 배열의 길이 반환.
export default function arrayPairSum(k, array) {
  // your code..
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    findFirst(array[i]);
    function findFirst (e) {
      for (let j = i + 1; j < array.length; j++) {
        if (e + array[j] === k) {
          answer.push([e, array[j]]);
        }
      };
      return answer;
     };
  };
  return answer.length;
}
