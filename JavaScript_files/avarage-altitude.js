function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const piDubble = 2 * Math.PI;
  return arr.map(procesed => {
    let a = Math.pow(procesed.avgAlt + earthRadius, 3);
    let orbPer = piDubble * Math.sqrt(a / GM);
    orbPer = Math.round(orbPer)
    return {name: procesed.name, orbitalPeriod: orbPer}
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));