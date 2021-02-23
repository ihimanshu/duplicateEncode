"use strict";

function duplicateEncode(word) {
  const toLowerStr = word.toLowerCase();
  let result = [];
  for (let i = 0; i < toLowerStr.length; i++) {
    const temp = toLowerStr.charAt(i);
    let check = [];
    for (let j = 0; j < toLowerStr.length; j++) {
      if (temp === toLowerStr.charAt(j)) {
        // console.log('Equal', i, j);
        check.push(j);
        result[j] = "(";
      }
    }
    // console.log(check);
    for (let k = 0; k < check.length; k++) {
      if (check.length > 1) {
        result[check[k]] = ")";
      }
    }
  }
  return result.join("");
}

console.log(duplicateEncode("Himanshu"));
