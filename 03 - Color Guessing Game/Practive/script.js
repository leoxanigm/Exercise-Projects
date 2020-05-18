const init = () => {
  let header = document.getElementsByTagName('header')[0];
  let blocks = document.querySelectorAll('.block');
  let currentColorEl = document.querySelector('.current-color');
  let resetBut = document.querySelector('.rest');
  let modeBut = document.querySelectorAll('.mode');
  let message = document.querySelector('.message');
  let colors = [];
  let num = 6;

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function() {
      if (this.style.backgroundColor === currentColorEl.textContent) {
        blocks.forEach(
          block => (block.style.backgroundColor = this.style.backgroundColor)
        );
        header.style.backgroundColor = this.style.backgroundColor;
        message.textContent = 'You Win!';
        resetBut.textContent = 'Play Again';
      } else {
        this.style.backgroundColor = 'inherit';
        message.textContent = 'Try Again!';
      }
    });
  }

  const generateRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const assignColor = num => {
    header.style.backgroundColor = 'teal';
    colors = [];

    for (let i = 0; i < blocks.length; i++) {
      let currColor = generateRandomColor();
      if (i < num) {
        blocks[i].style.display = 'block';
        blocks[i].style.backgroundColor = currColor;
        colors.push(currColor);
      } else {
        blocks[i].style.display = 'none';
      }
    }

    currentColorEl.textContent = colors[Math.floor(Math.random() * num)];
    message.textContent = '';
    resetBut.textContent = 'New Colors';
  };

  resetBut.addEventListener('click', function() {
    assignColor(num);
  });

  modeBut.forEach(but =>
    but.addEventListener('click', function() {
      modeBut.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (this.classList.contains('easy')) {
        num = 3;
        assignColor(num);
      } else {
        num = 6;
        assignColor(num);
      }
    })
  );

  assignColor(num);
};

init();