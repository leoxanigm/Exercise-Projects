let myString = 'w3resource';

setInterval(function() {
  myString = myString[myString.length - 1] + myString.slice(0, myString.length - 1);
  //Get element with id 'my-text'
  document.getElementById('my-text').textContent = myString;
}, 200);