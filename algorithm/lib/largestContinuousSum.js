/*
 *
 * Given an array of integers (positive and negative) find the largest continuous sum.
 *
 * < Examples >
 *
 * f([ 1, 3, -10, 2, 7 ])  // 9  (from 2 to 7)
 *
 */

export default function findLargestContinuousSum(array) {
    let result = [];
    let sumArray = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        sumArray = array.slice(i, j + 1);
        result.push(sumArray.reduce((a, b) => a + b ));
      }
    }

    return Math.max(...result, ...array);
}
