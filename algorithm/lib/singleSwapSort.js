/*
 *
 * 주어진 array가 단 한번의 swap으로 non-decreasing order로 sort될 수 있다면 true, 그렇지 않다면 false를 반환하는 함수를 작성하세요.
 *
 * 단, 중복 요소는 없습니다.
 *
 * < Examples >
 *
 * singleSwapSort([3, 2, 1]); // true - 3과 1을 바꾸는 swap
 * singleSwapSort([4, 3, 2, 1]); // false
 *
 */

export default function singleSwapSort(array) {
  // your code..
  let sortedArr = [...array].sort((a, b) => {return a - b});
  let count = 0;

  for (let i = 0; i < array.length; i ++) {
    if (array[i] !== sortedArr[i]) {
      count ++;
    }
  }

  if (count > 2 ) {
    return false;
  }
  return true;
}
