function myReplace(str, before, after) {
  let regEx = /^[A-Z]/;
  if (regEx.test(before)) {
    let processedAfter = after.split("");
    processedAfter[0] = processedAfter[0].toUpperCase();
    processedAfter = processedAfter.join("");
    return str.replace(before, processedAfter)
  }
  let processedAfter = after.split("");
  processedAfter[0] = processedAfter[0].toLowerCase();
  processedAfter = processedAfter.join("");
  return str.replace(before, processedAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));