const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let wholeName = firstAndLast;

  this.getFullName = function() {
    return wholeName;
  };
  this.getFirstName = () => {
    return wholeName.split(" ")[0]
  };
  this.getLastName = () => {
    return wholeName.split(" ")[1]
  };
  this.setFirstName = (first) => {
    wholeName = wholeName.replace(wholeName.split(" ")[0], first)
  };
  this.setLastName = (last) => {
    wholeName = wholeName.replace(wholeName.split(" ")[1], last)
  };
  this.setFullName = (firstAndLast) => {
    wholeName = firstAndLast;
  };


  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getLastName());
console.log(bob.setFirstName("Jazzo"));
console.log(bob.getFirstName());
console.log(bob.setLastName("Jazzo"));
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFullName("Ducker Hucker"));
console.log(bob.getFullName());