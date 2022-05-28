function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let checkNumber = arr[1] - arr[0];
  for (checkNumber; checkNumber >= 0; checkNumber--) {
    sum += arr[0] + checkNumber
  }
  return sum
}

console.log(sumAll([4, 1]));