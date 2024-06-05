/*

  Ken 넘버란, 자연수 중 인접한 자리의 숫자(digit)들의 차이가 모두 1인 자연수를 의미한다.

  12345 -> true
  43434 -> true
  67898 -> true
  12344 -> false
  12432 -> false
  36739 -> false

  Ken 넘버를 이와 같이 정의했을때, K(1 =< K =< 100,000)번째로 작은 Ken 넘버를 찾는 함수를 작성하라.

  ##### 입출력 예시

  K: 1 -> 1
  K: 2 -> 2
  K: 3 -> 3
  K: 10 -> 10
  K: 11 -> 12
  K: 12 -> 21
  K: 13 -> 23
  K: 14 -> 32
  K: 15 -> 34
  K: 16 -> 43
  K: 100 -> 6765

  < 힌트 >

  자연수를 순차적으로 탐색하기보단 특정한 규칙을 가지는 문자열로 생각해서 탐색법을 고안해보세요.
  (digit 하나를 node로 보았을때 tree의 path가 하나의 숫자와 대응)

 */

export default function kenNumber(K) {
  const baseNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [...baseNum]
  let i = 0;
  let j = 0;

  while (result.length <= K) {
    const num = String(result[j]);
    const lastNum = num[num.length - 1];
    const currentNum = num + lastNum;

    if (currentNum[currentNum.length - 1] === "0") {
      result.push(Number(currentNum) + 1);
    } else if(currentNum[currentNum.length - 1] === "9") {
      result.push(Number(currentNum) - 1);
    } else {
      result.push(Number(currentNum) - 1);
      result.push(Number(currentNum) + 1);
    }

    if (i === 8) {
      i = 0;
      j++;
    } else {
      i++;
      j++;
    }
  }
  return result[K - 1];
}
