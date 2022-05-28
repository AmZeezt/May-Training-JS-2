function uniteUnique(...arr) {

  return arr
  .flat()
  .filter((arg, indx, array)=> array.indexOf(arg) == indx );
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));