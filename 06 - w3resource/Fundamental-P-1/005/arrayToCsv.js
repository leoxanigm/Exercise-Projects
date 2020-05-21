//Write a JavaScript program to convert an array of objects to a
//comma-separated values (CSV) string that contains only the columns specified

let csvObj = [
  { x: 100, y: 200 },
  { x: 300, y: 400, z: 500 },
  { x: 6 },
  { y: 7 }
];

function objToCsv(objArr, col, delimiter = ',') {
  return objArr
    .map( obj => col.map( col => `"${!obj[col] ? '' : obj[col]}"` ))
    .reduce((item, value) => item += '\n' + value, col.toString());
}

console.log(objToCsv(csvObj, ['x', 'y', 'z']));