// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let dataDays = document.querySelector('[data-days]');
let dataHours = document.querySelector('[data-hours]');
let dataMinutes = document.querySelector('[data-minutes]');
let dataSeconds = document.querySelector('[data-seconds]');

dataPicker.style.fontSize = '18px';
const timer = document.querySelector('.timer');
timer.style.display = 'flex';
timer.style.marginTop = '10px';
timer.style.gap = '10px';

const labels = document.querySelectorAll('.label');
labels.forEach(label => {
  label.style.textTransform = 'uppercase';
});
const values = document.querySelectorAll('.value');
values.forEach(value => {
  value.style.fontSize = '40px';
  value.style.lineHeight = '1';
});
const fields = document.querySelectorAll('.field');
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
});

const options = {
  enableTime: true,
  time_24hr: true,
  dateFormat: 'Y-m-d H:i',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    let defaultDate = new Date();
    console.log(selectedDates[0]);
    if (selectedDate < defaultDate) {
      startBtn.disabled = true;
      Notiflix.Report.failure(
        'Error!',
        'Please choose a date in the future!',
        'Got it!'
      );
      //   window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dataPicker, options);

dataPicker.addEventListener('change', () => {
  let input = dataPicker.value;
  let pickedDate = new Date(input).getTime();
  let defaultDate = new Date().getTime();
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    dataPicker.disabled = true;
    let milliseconds = pickedDate - defaultDate;
    let interval = setInterval(() => {
      milliseconds = milliseconds - 1000;
      convertMs(milliseconds);
      if (milliseconds < 1000) {
        clearInterval(interval);
        startBtn.disabled = false;
        dataPicker.disabled = false;
      }
      if (dataDays.innerHTML) {
        dataDays.innerHTML = dataDays.innerHTML.padStart(2, '0');
      }
      if (dataHours.innerHTML) {
        dataHours.innerHTML = dataHours.innerHTML.padStart(2, '0');
      }
      if (dataMinutes.innerHTML) {
        dataMinutes.innerHTML = dataMinutes.innerHTML.padStart(2, '0');
      }
      if (dataSeconds.innerHTML) {
        dataSeconds.innerHTML = dataSeconds.innerHTML.padStart(2, '0');
      }
    }, 1000);
  });
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  dataDays.innerHTML = Math.floor(ms / day);
  // Remaining hours
  dataHours.innerHTML = Math.floor((ms % day) / hour);
  // Remaining minutes
  dataMinutes.innerHTML = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  dataSeconds.innerHTML = Math.floor((((ms % day) % hour) % minute) / second);

  return { dataDays, dataHours, dataMinutes, dataSeconds };
}
