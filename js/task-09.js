function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

const changeColor = () => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

changeBtn.addEventListener("click", changeColor);
