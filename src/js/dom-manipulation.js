import * as utils from './utils.js'; 

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November', 
  'December'
];

function updateDate() {
  const currDate = new Date();
  const day = days[currDate.getDay()];
  const month = months[currDate.getMonth()];
  const date = `${day}., ${month} ${currDate.getDate()}, ${currDate.getFullYear()}`;

  var hour = currDate.getHours();
  var temp = 'PM';
  if (hour >= 13) {
    hour = hour - 12;
  } else if (hour < 12) {
    temp = 'AM';
  }

  var mins = currDate.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`; 
  }

  const time = `${hour}:${mins} ${temp}`;

  document.querySelector('.date-label').textContent = date;
  document.querySelector('.time-label').textContent = time;
}

function buildWeatherIconURL(code) {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

function updateWeather(data) {
  document.querySelector('.location-label').textContent = data.location;
  document.querySelector('.temperature-label').textContent = Math.round(utils.kelvinToCelsius(data.weatherData.main.temp)) + '\u00B0C';
  document.querySelector('.weather-container img').src = buildWeatherIconURL(data.weatherData.weather[0].icon);
  document.querySelector('.condition-label').textContent = data.weatherData.weather[0].description;
}

export {
  updateDate,
  updateWeather
};