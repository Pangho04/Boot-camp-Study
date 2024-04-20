/*
 *
 * Given an integer x, return `true` if x is a palindrome, and `false` otherwise.
 *
 * < Example 1 >
 * Input: 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * < Example 2 >
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
 * Therefore it is NOT a palindrome.
 *
 * < Example 3 >
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is NOT a palindrome.
 *
 */
export default function isPalindrome(x) {
  // 1(x). a=주어진 x를 왼쪽에서 오른쪽으로 읽음. => 불필요 x === a
  // 1. a=주어진 x를 오른쪽에서 왼쪽으로 읽음.
  //  1-1 인덱스를 참조하기 위해, 문자열로 변환.
  // 2. do...while문으로 x를 오른쪽에서 왼쪽으로 병합.
  //  2-1. 문자열 끝부터 참조하기 위해, 'i에 x(문자열 변환)의 길이-1' 할당.
  //  2-2. i가 0보다 작아질 경우 중지.
  // 3. a = b의 참, 거짓 여부를 판별.
  // 4. 3의 참거짓 값을 반환.

  let a = '';
  let strX = String(x)
  let i = String(x).length - 1

  do{
    a += strX[i]

    i--
  } while(i >= 0);

  if(x === Number(a)) {
    return true;
  } return false;
}
