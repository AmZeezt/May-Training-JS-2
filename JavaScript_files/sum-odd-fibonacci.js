const sumFibs = num => {
  let fibbonaciList = [1, 1];
  if (num == 1) {
    return 2;
  }
  let currPushing = 2;
  for (let i = 2; currPushing <= num; i++) {
    fibbonaciList.push(currPushing);
    currPushing = currPushing + fibbonaciList[i - 1];
  }
  return fibbonaciList.filter(procesed => procesed % 2 != 0).reduce((sum, processed) => sum + processed, 0)
}

console.log(sumFibs(10));