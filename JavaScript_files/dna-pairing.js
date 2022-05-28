const pairElement = str => {
  const pair = element => {
    switch (element) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "G":
        return ["G", "C"];
      case "C":
        return ["C", "G"];
    }
  }
  return str.split("").map(letter => pair(letter));
}

console.log(pairElement("GCG"));