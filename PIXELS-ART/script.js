function eraseColors() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function pixelColor(event) {
  const colorSquare = document.querySelector('.choosedColor').value;
  console.log(colorSquare);
  const color = colorSquare;
  event.target.style.backgroundColor = color;
}

function createPixels() {
  let size = document.querySelector('#board-size').value;
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  for (let i = 0; i < size; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let k = 0; k < size; k += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
  }
}

function changeBoardSize() {
  document.getElementById('pixel-board').innerHTML = '';
  createPixels();
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', pixelColor);
  }
}

function changeColor(event) {
  const colorBox = document.querySelector('.color');
  colorBox.style.backgroundColor = event.target.value;
}

const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pixelColor);
}

const buttonErase = document.getElementById('clear-board');
buttonErase.addEventListener('click', eraseColors);

const buttonSize = document.getElementById('generate-board');
buttonSize.addEventListener('click', changeBoardSize);

const colorInput = document.querySelector('#colorInput');
colorInput.addEventListener('keyup', changeColor);
