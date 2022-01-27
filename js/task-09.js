function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonCol = document.querySelector('.change-color');
const spanCol = document.querySelector('.color');

buttonCol.addEventListener('click', changeColor);

function changeColor(event){
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanCol.textContent = `${color}`;
}