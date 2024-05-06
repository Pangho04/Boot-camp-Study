/*
 *
 * Find out if a string is a rotation of another string.
 *
 * < Examples >
 *
 * isRotation("ABCD", "BCDA"); // true
 * isRotation("ABCD", "ACBD"); // false
 *
 */

export default function isRotation(a, b) {
  // your code..
  // 1. a, b 문구가 주어진다.
  // 2. a 문구가 순환한 것이 2번 문구 이다.
    // 3(x). 첫번째 자릿수는 이동할 시 인덱스가 글자수-1 만큼 이동한다.
    // 4(x). 나머지 자릿수는 인덱스가 -1만큼 이동한다.
    // 5(x). 현재 인덱스에서 -1할 시, 음수가 되면 글자수-1 만큼 이동한다.
    // 6(x). 주어진 a 문자의 모든 순환 경우를 정답 배열에 넣는다.
    // 7(x). 첫번째 인덱스는 글자길이 -1 인덱스로 이동한다.
    // 8(x). 나머지 인덱스는 -1씩 이동한다.
  // 3. 빈 정답 배열을 만든다.
  // 4. 문자열을 나눈 배열을 만든다.
  // 5. 첫 문자를 기존 문자열에 push(맨뒷자리 추가)한다.
  // 6. 첫 문자를 지운다(shift())
  // 7. 결과 문자열을 join('')하여 정답 배열에 넣는다.
  // 8. 위 과정을 글자수 만큼 반복한다.
  // 9. b값이 정답배열에 포함돼있는지 여부를 반환한다.(includes())
  const example = [];
  const strArr = a.split('');
  let i = 0;
  do {
    strArr.push(strArr[0]);
    strArr.shift();
    example.push(strArr.join(''));
    i++;
  } while (i < a.length);
  return example.includes(b);
}
