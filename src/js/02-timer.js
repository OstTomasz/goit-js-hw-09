// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const dataPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

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
  dateFormat: 'd-m-y H:i',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    let defaultDate = new Date();
    console.log(selectedDates[0]);
    if (selectedDate < defaultDate) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dataPicker, options);
