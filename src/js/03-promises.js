import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const button = document.querySelector('button');

form.addEventListener('submit', e => {
  e.preventDefault();
  button.disabled = true;
  let amount = Number(document.querySelector(`input[name="amount"]`).value);
  let delay = Number(document.querySelector(`input[name="delay"]`).value);
  let step = Number(document.querySelector(`input[name="step"]`).value);
  let i = 0;
  let jump = 0;
  setTimeout(() => {
    createPromise(1, delay);
    i++;
    jump = delay + step;
    const interval = setInterval(() => {
      if (i === amount) {
        clearInterval(interval);
        button.disabled = false;
      } else {
        createPromise(i + 1, jump);
        jump = jump + step;
        i++;
      }
    }, step);
  }, delay);
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//
//   })
//   .catch(({ position, delay }) => {

//   });

// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   input.value = '';
// });

// for (let i = 1; i <= amount; i++) {
//   let time;
//   if (i === 1) {
//     time = delay;
//   } else {
//     time = step;
//   }
//   setTimeout(() => {
//     createPromise();
//   }, time);
// }
