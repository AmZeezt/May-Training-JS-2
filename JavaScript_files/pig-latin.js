function translatePigLatin(str) {
  let regEx = /^[aeiou]/;
  console.log()
  if (regEx.test(str)) {
    return str + "way"
  }
  let dummyArray = str.split(/(?=[aeiou])/);
  dummyArray.push(dummyArray.shift());
  return dummyArray.join("") + "ay"
}

console.log(translatePigLatin("glove"));