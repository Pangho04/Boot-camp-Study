/*
 *
 * 2016년은 아름다운 연도입니다.
 * 아름다운 연도란, 연도를 구성하는 0부터 9까지의 숫자가 중복 없이 사용된 연도를 의미합니다.
 *
 * 즉, 2016년도는 2가 1번, 0이 1번, 1이 1번, 6이 1번씩 사용되었기 때문에 아름다운 연도라 부릅니다.
 * 하지만 2344년도는 4가 2번씩 사용되었기 때문에 아름다운 연도라고 하지 않습니다.
 *
 * 아름다운 연도는 2015년도, 2016년도처럼 연속해서 존재하는 경우도 있지만,
 * 특정 연도 이후로 굉장히 오랫동안 나오지 않을 때도 있습니다.
 *
 * 예를 들어, 1987년도 이후 처음 등장하는 아름다운 연도는 2013년도입니다.
 *
 * 특정 연도 year가 매개변수로 주어질 때,
 * 해당 연도보다 큰 아름다운 연도 중 가장 작은 아름다운 연도를 반환하도록 함수를 완성해주세요.
 *
 * < Example >
 *
 * getBeautifulYear(1987); // 2013
 * getBeautifulYear(2015); // 2016
 *
 */

export default function getBeautifulYear(year) {
  // your code..
  let count = 0;

  for (let i = 1;;i++) {
    const newYear = year + i;
    const newStr = String(newYear).split("");
    count = 0;

    for (let j = 0; j < newStr.length; j++) {
      if (newStr.includes(newStr[j], j + 1)) {
        count++;
        break;
      } else if (j === (newStr.length - 1) && count === 0) {
        return newYear;
      }
    }
  }
}
