/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 * // 1. 주어진 단어를 한 글자씩 나누기.
 * // 2. 첫번째 글자부터 해당 번째의 글자가 직전 글자와 같은지 확인.
 * // 3. 다르다면 ['해당 글자', n]
 * // 4. 같다면 ['해당 글자', n + 1]
 * // 5. 글자의 길이 만큼 반복.
 * // 6. 각 글자별 n을 비교하여 내림차 순으로 정렬(방법은 모름)
 * // 7. 정렬 된 글자별 n이 동일할 시, 각 글자별 비교.
 * // 8. 글자별 올림차 순으로 정렬.(방법은 모름)
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */

  // 1. 주어진 단어를 한 글자씩 나누기.
  //  2(x). 첫번째 글자부터 해당 번째의 글자가 직전 글자와 같은지 확인.
  // 2. 반복문 및 조건문, 첫번째 글자부터 해당글자 filter 하여 새 배열 만들기.
  //    2-1. 해당 글자가 직전 글자(x)include 해당 반복 continue
  //    2-2. 해당 글자 배열.length = n
  //  3(x). 다르다면 ['해당 글자', n]
  //  4(x). 같다면 ['해당 글자', n + 1]
  // 3. 글자의 길이 만큼 반복.
  // 4. 각 글자별 n을 비교하여 내림차 순으로 정렬(방법은 모름)
  // 5. 정렬 된 글자별 n이 동일할 시, 각 글자별 비교.
  // 6. 글자별 올림차 순으로 정렬.(방법은 모름)

export default function characterFrequency(string) {
  const words = string.split('');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words.filter((word)=>words[i])
    if  (words[i] === words[i-1]) {
      continue;
    } else {
      [words[i], word.length]
    }; result.join(',');
  };
  return [
    ["i", 4],
    ["s", 4],
    ["p", 2],
    ["m", 1],
  ];
}
