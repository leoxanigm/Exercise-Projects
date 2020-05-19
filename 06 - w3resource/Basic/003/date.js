let myDate = new Date();
let date = myDate.getDate() > 9
              ? myDate.getDate()
              : '0' + (myDate.getDate());
let month = (myDate.getMonth() + 1) > 9
              ? myDate.getMonth() + 1
              : '0' + (myDate.getMonth() + 1);
let year = myDate.getFullYear();

console.log(`Today is: ${date}/${month}/${year}`);