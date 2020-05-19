function area(a, b, c) {
  if (typeof a && typeof b && typeof c !== 'number') {
    return console.error('All the arguments must be numbers');
  }
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - b));
  console.log(area);
  return false;
}
