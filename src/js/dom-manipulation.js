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

  const forecastList = data.forecastData.list;

  var colCounter = 1;
  forecastList.forEach((forecast, i) => {
    if (forecast.dt_txt.split(" ")[1] == "15:00:00") {
      const colQuery = `.forecast-row .col-${colCounter}`;
      const currQuery = document.querySelector(colQuery);
      currQuery.textContent = "";
      
      var newDiv = document.createElement('div');
      var dateEle = document.createElement('h3');
      var tempEle = document.createElement('h4');
      var imgEle = document.createElement('img');
      var descEle = document.createElement('h6');

      const date = new Date(forecast.dt_txt);
      dateEle.textContent = days[date.getDay()];
      tempEle.textContent = Math.round(utils.kelvinToCelsius(forecast.main.temp)) + '\u00B0C';
      imgEle.src = buildWeatherIconURL(forecast.weather[0].icon);
      imgEle.alt = forecast.weather[0].description + ' image';
      descEle.textContent = forecast.weather[0].description;

      newDiv.appendChild(dateEle);
      newDiv.appendChild(tempEle);
      newDiv.appendChild(imgEle);
      newDiv.appendChild(descEle);
      currQuery.appendChild(newDiv);

      colCounter = colCounter + 1;
    }
  });
}

export {
  updateDate,
  updateWeather
};