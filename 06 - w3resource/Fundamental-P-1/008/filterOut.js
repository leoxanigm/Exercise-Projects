//Write a JavaScript program to filter out the specified
//values from a specified array. Return the original array
//without the filtered values.

let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
const filterArr = (arr, ...val) => {
  let myArr = arr.filter( item => !val.includes(item));
  return myArr;
}
console.log(arra1, filterArr(arra1, 'b'));