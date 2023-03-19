const form = document.querySelector('.form');
const amount = document.querySelector("input[name='amount']");
// const inputs = document.querySelectorAll('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  // inputs.forEach(input => {
  //   input.value = '';
  // });
  createPromise();
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
