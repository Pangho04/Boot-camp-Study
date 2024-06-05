function testit(s) {
  let result = [0, 0, 0, 0, 0];
  const argArray = s.split("");

  for (let i = 0; i < argArray.length; i++) {

    if (Number(argArray[i])) {
      result[1]++;
    } else if (["a", "e", "i", "o", "u", "y"].includes(argArray[i])) {
      result[0]++;
      result[3]++;
    } else if (["?", "!", ".", " "].includes(argArray[i])) {
      result[2]++;
    } else {
      result[0]++;
      result[4]++;
    }
  }
  return result;
}

console.log(testit("?"))