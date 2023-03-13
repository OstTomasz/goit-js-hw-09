function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let interval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1);
});
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
});
