/*

  문제 설명은 README를 참고하세요.

 */

export default function findCommonElements(arr1, arr2, arr3) {
  const arr = [...arr1, ...arr2, ...arr3].sort((a, b) => b - a);
  let count = 1;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]) {
      count ++;
      if (count === 3 && arr1.includes(arr[i]) && arr2.includes(arr[i]) && arr3.includes(arr[i])) {
        return arr[i];
      }
    } else {
      count = 1;
    }
  };
  return -1;
}
