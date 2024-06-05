import { expect } from "chai";
import deepEquals from "../lib/deepEquals";

describe("Deep Equals", function () {
  it("should pass basic case 1", function () {
    expect(
      deepEquals({ name: "ken", age: 33 }, { name: "ken", age: 33 })
    ).to.eql(true);
  });

  it("should pass basic case 2", function () {
    const original = {
      name: "ken",
      work: { company: "vanilla coding", since: 2017 },
    };
    const target = {
      name: "ken",
      work: { company: "vanilla coding", since: 2017 },
    };

    expect(deepEquals(original, target)).to.eql(true);
  });

  it("should pass deeply nested case 1", function () {
    const original = {
      name: "ken",
      work: { company: "vanilla coding", since: 2017 },
    };
    const target = {
      name: "ken",
      work: { company: "vanilla coding", since: 2016 },
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 2", function () {
    const original = { name: "ken", work: ["vanilla coding", 2017] };
    const target = { name: "ken", work: ["vanilla coding", 2016] };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 3", function () {
    const original = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: 3 }],
    };
    const target = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: 4 }],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 4", function () {
    const original = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: 3 }],
    };
    const target = {
      name: "ken",
      work: ["vanilla coding", 2017, { d: 1, e: 2, f: 4 }],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 5", function () {
    const original = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: 3 }],
    };
    const target = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: 3 }],
    };

    expect(deepEquals(original, target)).to.eql(true);
  });

  it("should pass deeply nested case 6", function () {
    const original = {
      name: "ken",
      work: [
        "vanilla coding",
        2017,
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const target = {
      name: "ken",
      work: ["vanilla coding", 2017, { a: 1, b: 2, c: [1, 2, 3, {}] }],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 7", function () {
    const original = {
      name: "ken",
      work: [
        "vanilla coding",
        2017,
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const target = {
      name: "ken",
      work: [
        "vanilla coding",
        2017,
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 5 }] },
      ],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass deeply nested case 8", function () {
    const original = {
      name: "ken",
      work: [
        "vanilla coding",
        2017,
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const target = {
      name: "ken",
      work: [
        "vanilla coding",
        2017,
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };

    expect(deepEquals(original, target)).to.eql(true);
  });
});
