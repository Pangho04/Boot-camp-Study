// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// ## **Special recommendation**

// Another series, innovative and interesting, medium difficulty. People who like challenges, can try these kata:

// - [**Play Tetris : Shape anastomosis**](http://www.codewars.com/kata/56c85eebfd8fc02551000281)
// - [**Play FlappyBird : Advance Bravely**](http://www.codewars.com/kata/56cd5d09aa4ac772e3000323)

export default function testit(s){
  let result = [0,0,0,0,0];
  const argArray = s.toLowerCase().split("");
  
  for (let i = 0; i < argArray.length; i++) {
    
    if(Number(argArray[i]) >= 0 && argArray[i] !== " ") {
      result[1]++;
    } else if (["a","e","i","o","u"].includes(argArray[i])) {
      result[0]++;
      result[3]++;
    } else if (["b", "c", "d", "f", "g", "h", "y", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"].includes(argArray[i])) {
      result[0]++;
      result[4]++;     
    } else {
      result[2]++;
    }
  }
    return result;
}