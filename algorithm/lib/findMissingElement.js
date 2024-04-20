/*
 *
 * Given two arrays,
 * Second array is missing one element from the first array.
 * Find the missing element.
 *
 * Elements are always non-negative numbers
 * Duplicate elements are allowed
 *
 * findMissingElement([4,1,0,2,9,6,8,7,5,3], [6,4,7,2,1,0,8,3,9]); // 5
 *
 * Try to achieve the BEST time complexity.
 *
 */

// 2024.04.20
// 1. arr1배열의 요소가 arr2에 없는 경우 해당 요소가 출력되야함.
// 2. for구문으로 (i = 0), arr1[i]가 arr2.includes에 없을 경우 return
//   => error. 중복되는 경우의 수가 있을 경우 출력하지 못함.

// 1. arr1과 arr2를 모두 오름차순으로 정렬.
// 2. 정렬된 arr1과 arr2를 첫번째 자릿수 부터 비교
// 3. 같지 않은 값이 나온 arr1[i]번째 값을 출력.
//   error. 같지 않은 모든 값이 출력됨.
// 4. 같지 않은 값이 나온 즉시 break;.


export default function findMissingElement(arr1, arr2) {
  let result = [];
  let arr1Sort = arr1.sort(function(a,b){if (a < b){return -1}});
  let arr2Sort = arr2.sort(function(a,b){if (a < b){return -1}});

  for(let i = 0; i < arr1.length; i++) {
    if(arr2Sort[i] !== arr1Sort[i]) {
      return arr1Sort[i];
      break;
    }
  }

}
