import { expect, describe, it, beforeEach, vi } from "vitest";
import _ from "../src/01_underdash";

describe("identity 함수는,", function () {
  it("인수로 들어온 값을 그대로 반환해야 한다.", function () {
    const uniqueObject = {};
    expect(_.identity(1)).toBe(1);
    expect(_.identity("string")).toBe("string");
    expect(_.identity(false)).toBe(false);
    expect(_.identity(uniqueObject)).toBe(uniqueObject);
  });
});

describe("each 함수는,", function () {
  it("반환값을 갖지 않아야 한다.", function () {
    const returnValue = _.each([], function () {});
    expect(returnValue).toBeUndefined;
  });

  it("인수로 들어온 배열(참조)을 직접적으로 수정하지 않아야 한다.", function () {
    const input = [1, 2, 3, 4, 5];

    _.each(input, function () {
      /* noop */
    });

    expect(input).toEqual([1, 2, 3, 4, 5]);
  });

  it("주어진 배열을 순회하며 콜백 함수에서 각 요소를 사용할 수 있도록 제공해야 한다.", function () {
    const letters = ["a", "b", "c"];
    const iterations = [];

    _.each(letters, function (letter) {
      iterations.push(letter);
    });

    expect(iterations).toEqual(["a", "b", "c"]);
  });

  it("주어진 배열을 순회하며 콜백 함수에서 각 요소의 인덱스 값을 사용할 수 있도록 제공해야 한다.", function () {
    const letters = ["a", "b", "c"];
    const iterations = [];

    _.each(letters, function (letter, index) {
      iterations.push([letter, index]);
    });

    expect(iterations).toEqual([
      ["a", 0],
      ["b", 1],
      ["c", 2],
    ]);
  });

  it("주어진 배열을 순회하며 콜백 함수에서 원본 배열을 사용할 수 있도록 제공해야 한다.", function () {
    const letters = ["a", "b", "c"];
    const iterations = [];

    _.each(letters, function (letter, index, collection) {
      iterations.push([letter, index, collection]);
    });

    expect(iterations).toEqual([
      ["a", 0, letters],
      ["b", 1, letters],
      ["c", 2, letters],
    ]);
  });

  it("주어진 배열의 숫자 인덱스만 순회해야 한다.", function () {
    const iterations = [];
    const letters = ["a", "b", "c"];
    letters.someProperty = "Do not iterate over me!";

    _.each(letters, function (letter, index, collection) {
      iterations.push(letter);
    });

    expect(iterations).not.toContain("Do not iterate over me!");
  });
});

describe("indexOf 함수는,", function () {
  it("주어진 배열에서 원하는 요소의 인덱스를 찾을 수 있어야 한다.", function () {
    const numbers = [10, 20, 30, 40, 50];

    expect(_.indexOf(numbers, 40)).toBe(3);
  });

  it("주어진 배열에서 찾는 요소가 존재하지 않는 경우에는 -1을 반환해야 한다.", function () {
    const numbers = [10, 20, 30, 40, 50];

    expect(_.indexOf(numbers, 35)).toBe(-1);
  });

  it("주어진 배열에서 찾는 요소가 여러개 존재할 경우에는 첫번째 요소의 인덱스 위치를 반환해야 한다.", function () {
    const numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

    expect(_.indexOf(numbers, 40)).toBe(1);
  });
});

describe("map 함수는,", function () {
  it("새로운 레퍼런스의 배열을 반환해야 한다.", function () {
    const input = [];
    const result = _.map(input, function () {
      /* noop */
    });

    expect(result).toEqual([]);
    expect(result).not.toBe(input);
  });

  it("주어진 배열의 각 요소에게 콜백 함수를 적용시켜야 한다.", function () {
    const doubledNumbers = _.map([1, 2, 3], function (num) {
      return num * 2;
    });

    expect(doubledNumbers).toEqual([2, 4, 6]);
  });

  it("콜백 함수에 필요한 인수를 모두 전달해야 한다.", function () {
    const people = ["ken", "wan", "kim"];
    const list = _.map(people, function (person, index, array) {
      return [person, index, array.join(",")];
    });

    expect(people).toEqual(["ken", "wan", "kim"]);
    expect(list).not.toBe(people);

    expect(list).toEqual([
      ["ken", 0, "ken,wan,kim"],
      ["wan", 1, "ken,wan,kim"],
      ["kim", 2, "ken,wan,kim"],
    ]);
  });
});

describe("reduce 함수는,", function () {
  it("인수로 받은 iterator 함수에게 (memo, item) 값을 전달해야 한다.", function () {
    let memoInCallback;
    let itemInCallback;

    _.reduce(
      ["item"],
      function (memo, item) {
        memoInCallback = memo;
        itemInCallback = item;
      },
      "memo"
    );

    expect(memoInCallback).toBe("memo");
    expect(itemInCallback).toBe("item");
  });

  it("초기값이 주어졌을때, 배열의 각 요소를 순차적으로 iterator 함수에게 전달해야 한다.", function () {
    const orderTraversed = [];

    const result = _.reduce(
      [1, 2, 3, 4],
      function (memo, item) {
        orderTraversed.push(memo);
        orderTraversed.push(item);
        return item + memo;
      },
      10
    );

    expect(orderTraversed).toEqual([10, 1, 11, 2, 13, 3, 16, 4]);
    expect(result).toBe(20);
  });

  it("초기값이 주어지지 않았을때, 배열의 각 요소를 순차적으로 iterator 함수에게 전달해야 한다.", function () {
    const orderTraversed = [];

    const result = _.reduce([1, 2, 3, 4], function (memo, item) {
      orderTraversed.push(memo);
      orderTraversed.push(item);
      return item + memo;
    });

    expect(orderTraversed).toEqual([1, 2, 3, 3, 6, 4]);
    expect(result).toBe(10);
  });

  it("iterator 함수가 undefined를 반환하더라도 계속 실행을 진행해야 한다.", function () {
    let callCount = 0;

    function returnFalsy(memo, item) {
      callCount++;

      if (callCount === 1) {
        return;
      } else {
        return item + 1;
      }
    }

    const total = _.reduce([1, 1, 2], returnFalsy);
    expect(total).toBe(3);
  });

  it("초기값이 falsy인 값이라도, memo 값으로 처리가 가능해야 한다.", function () {
    const result = _.reduce(
      [1, 2, 3],
      function (memo, item) {
        return memo * item;
      },
      0
    );

    expect(result).toBe(0);
  });

  it("인수로 들어온 배열(참조)을 직접적으로 수정하지 않아야 한다.", function () {
    const input = [1, 2, 3, 4, 5];

    _.reduce(input, function (memo, item) {
      return memo + item;
    });

    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("includes 함수는,", function () {
  it("주어진 배열에서 원하는 요소를 찾을 경우에는 true를 반환해야 한다.", function () {
    const array = [1, 2, 3];
    const value = 1;
    expect(_.includes(array, value)).toBe(true);
  });

  it("주어진 배열에서 원하는 요소를 찾지 못한 경우에는 false를 반환해야 한다.", function () {
    const array = [1, 2, 3];
    const value = 4;
    expect(_.includes(array, value)).toBe(false);
  });

  it("인수로 들어온 배열(참조)을 직접적으로 수정하지 않아야 한다.", function () {
    const input = [1, 2, 3, 4, 5];

    _.includes(input, 4);

    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("flatten 함수는,", function () {
  it("중첩된 배열을 깊이에 관계없이 모두 평탄화할 수 있어야 한다.", function () {
    const nestedArray = [
      1,
      [2],
      [3, [[[4]]]],
      [[5], [6], [7, 8, 9, [10], [[11]], 12, 13, [14], 15]],
    ];

    expect(_.flatten(nestedArray)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
  });

  it("인수로 들어온 배열(참조)을 직접적으로 수정하지 않아야 한다.", function () {
    const input = [1, [2], [3], [4], 5];

    _.flatten(input);

    expect(input).toEqual([1, [2], [3], [4], 5]);
  });
});

describe("extend 함수는,", function () {
  it("원본 객체를 반환한다.", function () {
    const destination = {};
    const source = {};
    const extended = _.extend(destination, source);

    expect(extended).toBe(destination);
  });

  it("주어진 다른 객체의 키/밸류를 이용해 확장한다.", function () {
    const destination = {};
    const source = { a: "b" };
    const extended = _.extend(destination, source);

    expect(extended.a).toBe("b");
  });

  it("원본 객체에 동일한 값이 있을 경우, 새로운 값으로 덮어쓰도록 한다.", function () {
    const destination = { a: "x" };
    const source = { a: "b" };
    const extended = _.extend(destination, source);

    expect(extended.a).toBe("b");
  });

  it("주어진 다른 객체에 없는 키/밸류 값은 덮어쓰지 않고 기존 값을 유지하도록 한다.", function () {
    const destination = { x: "x" };
    const source = { a: "b" };
    const extended = _.extend(destination, source);

    expect(extended.x).toBe("x");
  });

  it("여러 개의 다른 객체가 주어졌을 경우에도 확장 가능해야 한다.", function () {
    const extended = _.extend({ x: 1 }, { a: 2 }, { b: 3 });

    expect(extended).toEqual({ x: 1, a: 2, b: 3 });
  });

  it("여러 개의 다른 객체가 주어졌고 중복된 키 값이 존재할 경우, 마지막 값으로 확장하도록 한다.", function () {
    const extended = _.extend({ x: "x" }, { a: "a", x: 2 }, { a: 1 });

    expect(extended).toEqual({ x: 2, a: 1 });
  });
});

describe("throttle 함수는,", function () {
  let callback;

  beforeEach(function () {
    vi.useFakeTimers();
    callback = vi.fn();
  });

  it("최초 100ms 동안 1번 호출 가능한 함수를 반환해야 한다.", function () {
    const fn = _.throttle(callback, 100);

    fn(); // callback 호출 O.

    setTimeout(fn, 50); // callback 호출 X.
    setTimeout(fn, 99); // callback 호출 X.

    setTimeout(fn, 100); // 이전 호출 시점으로부터 100ms 경과했으므로 callback 호출 O.

    vi.advanceTimersByTime(110);

    expect(callback.mock.calls.length).toBe(2);
  });

  it("최초 200ms 동안 1번 호출 가능한 함수를 반환해야 한다.", function () {
    const fn = _.throttle(callback, 200);

    fn(); // callback 호출 O.

    setTimeout(fn, 50); // callback 호출 X.
    setTimeout(fn, 100); // callback 호출 X.
    setTimeout(fn, 150); // callback 호출 X.
    setTimeout(fn, 199); // callback 호출 X.

    setTimeout(fn, 200); // 이전 호출 시점으로부터 200ms 경과했으므로 callback 호출 O.

    vi.advanceTimersByTime(210);

    expect(callback.mock.calls.length).toBe(2);
  });
});

describe("memoize 함수는,", function () {
  let add;
  let memoAdd;

  beforeEach(function () {
    add = function (a, b) {
      return a + b;
    };

    memoAdd = _.memoize(add);
  });

  it("memoize 되지 않은 함수와 동일한 결과를 도출해야 한다.", function () {
    expect(add(1, 2)).toBe(3);
    expect(memoAdd(1, 2)).toBe(3);
  });

  it("다른 인수를 받으면 다른 결과를 도출해야 한다.", function () {
    expect(memoAdd(1, 2)).toBe(3);
    expect(memoAdd(3, 4)).toBe(7);
    expect(memoAdd(1, 3)).toBe(4);
  });

  it("원시값이 인수로 들어올 경우, 기존 연산 결과를 기억해야 한다.", function () {
    const spy = vi.fn(function () {
      return "Dummy output";
    });
    const memoSpy = _.memoize(spy);

    memoSpy(10); // 10이라는 인자가 최초로 주어져 실행한다.
    expect(spy.mock.calls.length).toBe(1);
    memoSpy(10); // 기존 연산 결과를 사용한다.
    expect(spy.mock.calls.length).toBe(1);
  });

  it("참조값이 인수로 들어올 경우, 기존 연산 결과를 기억해야 한다.", function () {
    const spy = vi.fn(function () {
      return "Dummy output";
    });
    const memoSpy = _.memoize(spy);

    /*
     * 아래 두 케이스는 "참조"가 다른 인자가 주어졌지만, spy 함수가 총 1번 실행되어야 합니다.
     */

    // [1, 2, 3]이라는 인자가 최초로 주어져 실행되므로 spy 함수 실행 및 연산결과 저장.
    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);

    // (앞선 케이스와 참조가 다른) [1, 2, 3] 인자가 주어져 실행되지만, 기존 연산결과를 이용.
    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);
  });

  it("인수에 대한 처리가 정확하게 이루어져야 한다.", function () {
    const spy = vi.fn(function () {
      return "Dummy output";
    });
    const memoSpy = _.memoize(spy);

    /*
     * 아래 두 케이스는 다른 인자가 주어졌기 때문에 spy 함수가 2번 실행되어야 합니다.
     */

    // 배열 [1, 2, 3]이 주어진 케이스
    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);

    // 1, 2, 3 숫자가 각각 주어진 케이스
    memoSpy(1, 2, 3);
    expect(spy.mock.calls.length).toBe(2);
  });
});
