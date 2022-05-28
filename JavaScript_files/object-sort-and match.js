function whatIsInAName(collection, source) {
  const arr = collection.filter(object => {
    for (let i = 0; i < Object.keys(source).length; i++) {
      //console.log(Object.values(source)[i]);
      if (object[Object.keys(source)[i]] == Object.values(source)[i]) { 
        
      } else {
        return false
      }
    } return true
  });

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));