function truthCheck(collection, pre) {
  return collection.every(procesed => !! procesed[pre]);
}

console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"))