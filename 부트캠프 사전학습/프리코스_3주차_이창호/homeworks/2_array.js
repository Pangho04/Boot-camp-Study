(function () {
  "use strict";

  describe("배열 다루기 📶", function () {
    describe("코드 에디터에서 homeworks/2_array.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("배열 만들기 #1", function () {
        const result = [1, 2, 3];
        const guess = [1, 2, 3];

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #2", function () {
        const result = [];

        let guess = [1, 2, 3];
        guess = [];

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #3", function () {
        const result = [];

        const guess = [1, 2, 3];
        guess.length = 0;

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #4", function () {
        const result = [];

        const guess = [1, 2, 3];
        guess.splice(0, guess.length);

        expect(result).to.eql(guess);
      });

      it("배열 요소 추가하기", function () {
        const result = [1, 2, 3, 4];

        const guess = [1, 2, 3];
        guess.push(4);

        expect(result).to.eql(guess);
      });

      it("배열 요소 추가하기", function () {
        const result = [1, 2, 3];
        result.unshift(5);

        const guess = [5, 1, 2, 3];

        expect(result).to.eql(guess);
      });

      it("배열 요소 제거하기", function () {
        const result = [1, 2, 3];
        result.pop();

        const guess = [1, 2];

        expect(result).to.eql(guess);
      });

      it("배열 요소 제거하기", function () {
        const result = [1, 2, 3];
        result.shift();

        const guess = [2, 3];

        expect(result).to.eql(guess);
      });

      it("배열에서 원하는 요소 인덱스 찾기", function () {
        const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
        const result = arr.indexOf(2, 2);
        const guess = 5;

        expect(result).to.eql(guess);
      });

      it("배열에서 원하는 요소 찾기", function () {
        const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
        const result = arr.includes(2, 2);
        const guess = true;

        expect(result).to.eql(guess);
      });

      it("배열 합치기", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 4, 2];
        const result = arr1.concat(arr2);

        const guess = [1, 2, 3, 1, 4, 2];

        expect(result).to.eql(guess);
      });

      it("배열 여부 확인하기", function () {
        const arr = [1, 2, 3];
        const result = Array.isArray(arr);
        const guess = true;

        expect(result).to.eql(guess);
      });

      it("배열 요소 문자열로 만들기", function () {
        const arr = ["010", 1234, 5678];
        const result = arr.join("-");

        const guess = "010-1234-5678";

        expect(result).to.eql(guess);
      });

      it("배열 뒤집기", function () {
        const arr = ["셋", "둘", "하나"];
        const result = arr.reverse();

        const guess = ["하나", "둘", "셋"];

        expect(result).to.eql(guess);
      });
    });
  });
})();
