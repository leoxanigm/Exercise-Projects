let numSquares = 6;
let colors = generateRanColors(numSquares);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.getElementById('message');
let h1 = document.getElementsByTagName('h1')[0];
let resetBut = document.getElementById('reset');
let modeBtn = document.querySelectorAll('.mode');

init();

function init() {
  colorDisplay.textContent = pickedColor;

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

  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function() {
      modeBtn.forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');

      if (this.classList.contains('easy')) {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset(numSquares);
    });
  }
}

function reset(numSquares) {
  colors = generateRanColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = 'steelblue';
  resetBut.textContent = 'New Colors';
  messageDisplay.textContent = '';

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
}

resetBut.addEventListener('click', function() {
  reset(numSquares);
});

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
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

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
