//Write a JavaScript program to convert a comma-separated values (CSV)
//string to a 2D array of objects. The first row of the string is used as the title row.

let csv = 'head1,head2\na,b\nc,d';

function csvToArr(str) {
  return str.split('\n').map(a => a.split(','));
}

console.log(csvToArr(csv));