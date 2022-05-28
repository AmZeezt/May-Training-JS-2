const destroyer = (arr, ...arr2) => arr.filter(arrObj => arr2.indexOf(arrObj) < 0);


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));