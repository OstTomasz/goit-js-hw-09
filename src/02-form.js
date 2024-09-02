const form = document.querySelector('form.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
});
const storageVal = localStorage.getItem(localStorageKey);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value !== '' && form.elements.message.value !== '') {
    console.log({
      email: form.elements.email.value,
      message: form.elements.message.value,
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('fill up both inputs!');
  }
});

if (storageVal !== '' && storageVal !== null) {
  const parsedStorageVal = JSON.parse(storageVal);
  form.elements.email.value = parsedStorageVal.email;
  form.elements.message.value = parsedStorageVal.message;
}
