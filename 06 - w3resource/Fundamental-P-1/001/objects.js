//Write a JavaScript program to compare two objects to determine
//if the first one contains equivalent property values to the second one.

let firstObj = { age: 25, hair: 'long', beard: true };
let secondObj = { hair: 'long', beard: true };

function checkObj(obj1, obj2) {
  return Object.keys(obj2).every(key => obj2.hasOwnProperty(key) && Object.keys(obj1).indexOf(key) > -1 );
}

console.log(checkObj(firstObj, secondObj));