/**
 *
 * Detect if the given two JSON-like objects are equal.
 *
 * [DO NOT USE] JSON.parse or JSON.stringify
 *
 * deepEquals({ name: 'ken', age: 33 }, { name: 'ken', age: 33 }); // true
 *
 * deepEquals({ name: 'ken', work: { company: 'vanilla coding', since: 2017 } }, { name: 'ken', work: { company: 'vanilla coding', since: 2017 } }); // true
 *
 */

export default function deepEquals(original, target) {
  // TODO: your code here..
  const originalArr = Object.values(original);
  const targetArr = Object.values(target);
  let criteriaLen = null;

  if (originalArr.length > targetArr.length) {
    criteriaLen = originalArr.length;
  } else {
    criteriaLen = targetArr.length;
  };

  for (let i = 0; i < criteriaLen; i++) {
    if (originalArr[i] === targetArr[i]) {
      continue;
    } else if (typeof originalArr[i] === "string" || typeof originalArr[i] === "number") {
      if (originalArr[i] !== targetArr[i]) {
        return false;
      }
    } else if (typeof originalArr[i] === "array" || typeof originalArr[i] === "object") {
      if (!deepEquals(originalArr[i], targetArr[i])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
