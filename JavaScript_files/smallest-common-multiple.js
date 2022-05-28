function smallestCommons(arr) {

  //sort and create range

  arr.sort((a, b) => a - b);
  let dummyArray = []
  for (let i = arr[0]; i <= arr[1]; i++) {
    dummyArray.push(i)
  }

  // is divadable by range

  const isDividableByRange = (range, number) => {
    return ! range.every(currentValue => number % currentValue == 0)
  }

  // find common multiplayer

  let j = 1;
  while (isDividableByRange(dummyArray, j)) {j++}
  return j;
  
}

console.log(smallestCommons([1,5]));