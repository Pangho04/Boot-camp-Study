/*

  자연수 A, B (1 ≤ A < B ≤ 1,000,000)가 주어졌을때
  A의 배수 집합과 B의 배수 집합의 합집합의 원소들을 오름차순으로 나열한 수열을 S라 하자

  (S는 당연하게도 무한수열이며 합집합에서 만들어졌으므로 중복된 공배수 역시 수열에 한 번만 나온다.
   예를 들어 A가 6이고 B가 8인 경우 S: 6, 8, 12, 16, 18, 24, 30, 32, ... (공배수인 24도 한번만 나온다)
   와 같이 생겼다.)

  이러한 수열 S의 K (1 ≤ K ≤ 1,000,000)번째 원소를 구하라.

  ##### 입출력 예시

  A: 6,  B: 8, K: 8 => 32

 */
// 1. A의 배수 배열 만들기.
// 2. B의 배수 배열 만들기.
//  2-1. A의 배수 배열 중, 동일 항목 제외 후 합입.
// 3(X). A, B의 배수 배열 합치기.
//  3-1(X). 같은 숫자는 하나만 남긴다.
// 3. A,B 배수 배열 오름차순 정렬.
// 4. 배수 배열에서 index [k-1] 번째 원소 출력.
// 5. Error, 배열이 너무 김.

export default function kthNumber(A, B, K) {
  // Your code..
  let arr = []

  for (let i = 0; i <= K; i++) {
        arr.push( A + A * i);
  }

  for(let i = 0; i <= K; i++) {
    if  (arr.includes((B+B*i))) {
       continue; 
      } else {
        arr.push( B + B * i);
      }
  }
  arr.sort(function(a,b){
    return a-b
  });

  for(let i = 0; i <= K-2; i++) {
    arr.shift()
  }
return arr[0];
}
