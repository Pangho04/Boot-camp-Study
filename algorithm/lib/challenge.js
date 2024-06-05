/*

  문제가 N개 수록되어있는 문제집을 A, B 두 사람이 각각 한 권씩 사서 풀기로 했습니다.
  각 문제에는 1부터 N까지 번호가 붙어있습니다. A, B 두 사람은 각자 열심히 문제를 풀었고, 각자 자기가 푼 문제의 번호를 공개했습니다.
  이때, A, B 두 사람은 둘 다 푼 문제는 몇 개인지, 자신만 푼 문제는 몇 개인지 궁금해졌습니다.
  문제집의 전체 문제 수 N, A가 푼 문제의 번호가 들어있는 배열 A, B가 푼 문제의 번호가 들어있는 배열 B가 매개변수로 주어질 때,
  A만 푼 문제 수, B만 푼 문제 수, A와 B 둘 다 푼 문제 수를 순서대로 담은 배열을 반환하도록 함수를 완성해주세요.

  < 제한사항 >
  - N은 1이상 500,000이하인 자연수입니다.
  - A는 A가 푼 문제의 번호가 중복 없이 들어있는 배열입니다.
  - B는 B가 푼 문제의 번호가 중복 없이 들어있는 배열입니다.
  - 배열 A, B의 길이는 각각 1 이상 N 이하입니다.
  - return 하는 배열은 [A만 푼 문제 수, B만 푼 문제 수, A, B 둘 다 푼 문제 수] 순이어야 합니다.

  < 입출력 예 #1 >

  N: 7
  A: [1,3,6]
  B: [2,1,4,6]

  A만 푼 문제 번호 : 3
  B만 푼 문제 번호 : 2, 4
  A와 B 둘 다 푼 문제 번호 : 1, 6
  따라서 [1, 2, 2]를 return 하면 됩니다.

  < 입출력 예 #2 >

  N: 10
  A: [1,2,3,4,5]
  B: [7,8,9]

  A만 푼 문제 번호 : 1, 2, 3, 4, 5
  B만 푼 문제 번호 : 7, 8, 9
  A와 B 둘 다 푼 문제 번호 : 없음
  따라서 [5, 3, 0]을 return 하면 됩니다.

 */

export default function challenge(N, A, B) {
  let answer = [];
  let count = 0;
  let same = 0;

  for (let solveQ of A) {
    if (!B.includes(solveQ)) {
      count ++;
    } else {
      same ++;
    }
  }

  answer.push(count);

  count = 0;
  for (let solveQ of B) {
    if (!A.includes(solveQ)) {
      count ++;
    } else {
      same ++;
    }
  }

  answer.push(count);
  answer.push(same/2);

  return answer;
}
