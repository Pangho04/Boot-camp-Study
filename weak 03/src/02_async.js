/*
 *
 * ✅ 작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 */

const async = {
};

/*
 *
 * map은 비동기 작업의 병렬 처리를 도와주는 유틸 함수입니다.
 *
 * < 함수 소개 >
 *
 * map 함수는 3개의 인자를 받습니다.
 *
 * 첫 번째 인자는 `list`라고 부르는 데이터,
 * 두 번째 인자는 비동기 함수인 `iteratee`,
 * 세 번째 인자는 `finalCallback`이라고 부르는 함수입니다.
 *
 * `list` 배열에는 비동기 작업의 대상이 되는 데이터가 담겨있습니다.
 * `iteratee`는 각각의 데이터에 대해 실행해야 할 비동기 함수입니다.
 * `finalCallback`은 모든 데이터에 대한 비동기 작업이 완료되었을때 실행해야 할 함수입니다.
 * `finalCallback`은 `iteratee`로부터 각 비동기 작업에 대한 결과를 전달받습니다.
 *
 * 자세한 내용은 관련 테스트 코드를 참고하세요!
 *
 * Piece 👍🏻
 */
async.map = function map(list, iteratee, finalCallback) {
  // 변수
  const result = [];
  // 함수
  function iterFunc() {
    for (const num of list) {
      iteratee(num, getResult);
    }
  }
  function getResult(x) {
    result[getIndex(x)] = x;
    if (!isBlank) {
      console.log("INNER RESULT:", result)
      if (result.length === list.length) {
        finalCallback(result);
      }
    }
  }
  function getIndex(x) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === x / 2) {
        return i;
      }
    }
  }
  function isBlank(result) {
    for (let element of result) {
      if (element === undefined) {
        return true;
      }
    }
    // console.log(result.length)
  return false;
  }
  //실행문
  iterFunc();
  // console.log("OUTER RESULT:", result);
};

/*
 *
 * reduce는 비동기 작업의 직렬 처리를 도와주는 유틸 함수입니다.
 *
 * < 함수 소개 >
 *
 * reduce 함수는 4개의 인자를 받습니다.
 *
 * 첫 번째 인자는 `list`라고 부르는 데이터,
 * 두 번째 인자는 초기값인 `initialValue`,
 * 세 번째 인자는 비동기 함수인 `iteratee`,
 * 네 번째 인자는 `finalCallback`이라고 부르는 함수입니다.
 *
 * `list` 배열에는 비동기 작업의 대상이 되는 데이터가 담겨있습니다.
 * `initialValue`는 초기값으로 지정되는 값입니다.
 * `iteratee`는 각각의 데이터에 대해 실행해야 할 비동기 함수입니다.
 * `finalCallback`은 모든 비동기 작업이 완료되었을때 실행해야 할 함수입니다.
 *
 * 자세한 내용은 관련 테스트 코드를 참고하세요!
 *
 * Piece 👍🏻
 */
async.reduce = function reduce(list, initialValue, iteratee, finalCallback) {
  // TODO
};

/*
 *
 * promisify는 비동기 함수의 콜백 패턴 인터페이스를 프러미스로 변환해주는 유틸 함수입니다.
 *
 * < 함수 소개 >
 *
 * promisify 함수는 1개의 인자를 받습니다.
 *
 * `func`은 비동기 작업을 수행하는 함수입니다.
 *
 * 자세한 내용은 관련 테스트 코드를 참고하세요!
 *
 * Piece 👍🏻
 */
async.promisify = function promisify(func) {
  // TODO
};

export default async;
