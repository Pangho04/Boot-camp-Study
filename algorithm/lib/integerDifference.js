/*
 *
 * Write a function that accepts an array of random integers and an integer n.
 * Determine the number of times where two integers in the array have the difference of n.
 *
 * < Examples >
 *
 * f(4, [1, 5, 6, 9, 16, 27]) // 2   (Due to [1, 5], and [5, 9])
 * f(2, [1, 3, 5, 4])         // 2   (Due to [1, 3], [3, 5])
 *
 */

export default function integerDifference(n, array) {
  // your code..
// 1(x).arry[i+1] - array[i] 값 확인 반복문 작성.
// 1. arr(i)값과 나머지 모든 값의 차이를 확인해야함.
// 2. array[i] - array[j] 반복문 중첩 작성.
// 3. 차이를 확인해야 하므로 절대값 반환.
// 4. 해당 값이 n과 같으면 [array[i], arr[i+1]] 반환.
// 5. 정답 배열에 전부 push 후, length 값 return.
const answer = [];
for(let i = 0; i < array.length; i++){
  for(let j = i+1; j < array.length; j++){
   if(Math.abs(array[i]-array[j]) === n){
     answer.push([array[i], array[j]])
   };
  };
};
return answer.length;
}
