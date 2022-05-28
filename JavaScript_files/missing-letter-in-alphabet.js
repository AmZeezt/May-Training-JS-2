function fearNotLetter(str) {
  let processedStr = str.slice();
  for (let i = 0; i < processedStr.length - 1; i++) {
    if (processedStr.lengt == 1) {
      return undefined;
    }
    if (processedStr[i + 1].charCodeAt() != processedStr[i].charCodeAt() + 1) {
     return String.fromCharCode(processedStr[i].charCodeAt() + 1)
    };
  }
  return undefined ;
}

console.log(fearNotLetter("abce"));