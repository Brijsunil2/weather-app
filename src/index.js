import * as apicalls from './js/apicalls.js';
import * as userLocation from './js/location-finder.js';
import * as domTools from './js/dom-manipulation.js';
import './css/main.scss';

async function run() {
  setInterval(domTools.updateDate, 1000);

  const coords = await userLocation.getLocationLatLng();
  const data = await getDataByCoords(coords.latitude, coords.longitude);

  console.log(data);
  domTools.updateWeather(data);
}

async function getDataByCoords(latitude, longitude) {
  const weatherData = await apicalls.getCurrWeatherByCoords(latitude, longitude);
  if (weatherData.cod != 200) {
    invalidLocationError();
    return {
      location: null,
      weatherData: null,
      forecastData: null
    };
  }

  const location = `${weatherData.name},${weatherData.sys.country}`;

  const forecastData = await apicalls.getCurrForecastByCoords(latitude, longitude);

  const data = {
    location: location,
    weatherData: weatherData,
    forecastData: forecastData
  };

  return data;
}

 async function getDataByLocation(location) {
  const weatherData = await apicalls.getCurrWeather(location);
  if (weatherData.cod != 200) {
    invalidLocationError();
    return {
      location: null,
      weatherData: null,
      forecastData: null
    };
  }

  location = `${weatherData.name},${weatherData.sys.country}`;

  const forecastData = await apicalls.getCurrForecast(location);

  const data = {
    location: location,
    weatherData: weatherData,
    forecastData: forecastData
  };
  return data;
 }

async function onLocationClick() {
  const location = document.querySelector('#location-input').value;

  if (location.length > 0) {
    const data = await getDataByLocation(location);
    
    if (data.location != null) {
      domTools.updateWeather(data);
    }
  
  } else {
    invalidLocationError();
  } 
}

function invalidLocationError() {
  alert("Error: Location not found.");
}

document.addEventListener('DOMContentLoaded', () => {
  const locationBtn = document.querySelector('.enter-btn');
  document.querySelector('.enter-btn').addEventListener('click', onLocationClick);
});

run();