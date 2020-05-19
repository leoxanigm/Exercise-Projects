let myDate = new Date();
let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday'
];
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
hour = hour >= 12 ? hour - 12 + ' PM' : hour + ' AM';
console.log('Today is: ' + daysOfWeek[myDate.getDay()]);
console.log('Current time is: ' + hour + ' : ' + minute + ' : ' + second);
