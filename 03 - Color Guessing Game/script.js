let colors = generateRanColors(6);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.getElementById('message');
let h1 = document.getElementsByTagName('h1')[0];
let resetBut = document.getElementById('reset');

colorDisplay.textContent = pickedColor;

resetBut.addEventListener('click', function() {
  colors = generateRanColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = 'inherit';
  resetBut.textContent = 'New Colors';

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
})

for (let i = 0; i < squares.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i];

  //add click listeners
  squares[i].addEventListener('click', function() {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetBut.textContent = 'Play Again';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function generateRanColors(n) {
  //make an array
  let arr = [];

  //add n random colors to array
  for (let i = 0; i < n; i++) {
    //get random color and push to array
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor() {
  let r = Math.floor( Math.random() * 256 );
  let g = Math.floor( Math.random() * 256 );
  let b = Math.floor( Math.random() * 256 );

  return `rgb(${r}, ${g}, ${b})`;
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}
