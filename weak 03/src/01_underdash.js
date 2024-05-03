/*
 *
 * ✅작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */

// import { aR } from "vitest/dist/reporters-MmQN-57K.js";



const _ = {};

/**
 *
 * "identity"
 *
 * https://lodash.com/docs/4.17.15#identity
 *
 */
_.identity = function (value) {
  return value;
};

/**
 *
 * "each"
 *
 * https://lodash.com/docs/4.17.15#forEach
 *
 * 자바스크립트 배열의 forEach 메소드와 거의 동일한 함수입니다.
 *
 */
_.each = function (array, iterator) {
  for (let i = 0; i < array.length; i++) {
    iterator(array[i], i, array);
  }
};

/**
 *
 * [수정하지 마세요.] "indexOf"
 *
 * https://lodash.com/docs/4.17.15#indexOf
 *
 * 자바스크립트 배열의 indexOf 메소드와 거의 동일한 함수입니다.
 *
 */
_.indexOf = function (array, target) {
  let result = -1;

  _.each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
};

/**
 *
 * "map"
 *
 * https://lodash.com/docs/4.17.15#map
 *
 * 자바스크립트 배열의 map 메소드와 거의 동일한 함수입니다.
 *
 */
_.map = function (array, iterator) {
  let result = [];
  let sumArr = array.join();
  for (let i = 0; i < array.length; i++) {
    result.push(iterator(array[i], i, [sumArr]));
  }
  return result;
};

/**
 *
 * "reduce"
 *
 * https://lodash.com/docs/4.17.15#reduce
 *
 * 자바스크립트 배열의 reduce 메소드와 거의 동일한 함수입니다.
 *
 * 아래 한글 MDN 문서에서 매개변수, 반환값, 작동방식 부분을 반드시 꼼꼼히 읽고 이해한 후, 도전하세요.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 */
_.reduce = function (array, iterator, accumulator) {
  for (let i = 0; i < array.length; i++) {
    let memo;
    let item;
    if (accumulator === undefined) {
      memo = array[i];
      item = array [i+1];
      i++;
    } else {
      memo = accumulator;
      item = array [i];
    }

    accumulator = iterator(memo, item);

    if (accumulator === undefined) {
      accumulator = item;
    }
  }
  return accumulator;
};

/**
 *
 * [수정하지 마세요] "includes"
 *
 * 자바스크립트 배열의 includes 메소드와 거의 동일한 함수입니다.
 *
 * `reduce`가 성공적으로 완성된다면, `includes` 또한 통과됩니다.
 * 만약 `includes` 테스트가 실패한다면, `reduce`에 작성한 로직이 잘못 되었을 수 있습니다.
 *
 */
_.includes = function (array, target) {
  // TIP: Many iteration problems can be most easily expressed in
  // terms of reduce(). Here's a freebie to demonstrate!
  return _.reduce(
    array,
    function (wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    },
    false
  );
};

/**
 *
 * "flatten"
 *
 * https://lodash.com/docs/4.17.15#flatten
 *
 *
 */
_.flatten = function (nestedArray) {
  // Hint: Use Array.isArray to check if something is an array
  const answer = [];
  for(let i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) {
      answer.push(nestedArray[i]);
    } else {
      for (const element of this.flatten(nestedArray[i])) {
        answer.push(element);
      }
    }
  }
  return answer;
};

/**
 *
 * "extend"
 *
 * https://lodash.com/docs/4.17.15#assignIn
 *
 *
 */
_.extend = function (obj) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    for (const prop in source) {
      if (obj[prop] === source[prop]) {
        obj[prop] = source[prop];
      } else {
        obj = {...obj, ...source};
      }
    }
  }
  return obj;
};

/**
 *
 * "throttle"
 *
 * https://lodash.com/docs/4.17.15#throttle
 *
 *
 */
_.throttle = function (func, wait) {
  let result = false;

  const timer = function () {
    if (!result) {
      func();
      result = true;
    }
    setTimeout(function () {
      result = false;
    }, wait);
  };

  return timer;
  };
/**
 *
 * "memoize"
 *
 * https://lodash.com/docs/4.17.15#memoize
 *
 *
 */
_.memoize = function (func) {
  const save = {};

  const some = function (...arg) {
    if (!save.hasOwnProperty(...arg)) {
      save[arg] = func(...arg);
      return save[arg];
    } else {
      return save[arg];
    }
  };
  return some;
};

export default _;
