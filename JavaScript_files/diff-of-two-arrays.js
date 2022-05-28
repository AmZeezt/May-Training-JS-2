const diffArray = (arr1, arr2) => arr1.filter(arrObj => arr2.indexOf(arrObj) < 0).concat(arr2.filter(arrObj => arr1.indexOf(arrObj) < 0));

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));