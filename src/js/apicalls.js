const key = '37faff95420ed4780f103a874897a346';

function getAPIWeatherURL(location) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`;
}

function getAPIForecastURL(location) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}`;
}

function getAPIWeatherURLByCoords(latitude, longitude) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
}

function getAPIForecastURLByCoords(latitude, longitude) {
  return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
}

async function getCurrWeather(location) {
  const url = getAPIWeatherURL(location);
  var currWeatherData = {};

  try {
    const response = await fetch(url);
    currWeatherData = await response.json();
  } catch(err) {
    console.log('Error: Unable to fetch weather data - ', err);
  }

  // console.log(currWeatherData);
  return currWeatherData;
}

async function getCurrWeatherByCoords(latitude, longitude) {
  const url = getAPIWeatherURLByCoords(latitude, longitude);
  var currWeatherData = {};

  try {
    const response = await fetch(url);
    currWeatherData = await response.json();
  } catch(err) {
    console.log('Error: Unable to fetch weather data - ', err);
  }

  // console.log(currWeatherData);
  return currWeatherData;
}

async function getCurrForecast(location) {
  const url = getAPIForecastURL(location);
  var currForecastData = {};

  try {
    const response = await fetch(url);
    currForecastData = await response.json();
  } catch(err) {
    console.log('Error: Unable to fetch forecast data - ', err);
  }

  // console.log(currForecastData);
  return currForecastData;
}

async function getCurrForecastByCoords(latitude, longitude) {
  const url = getAPIForecastURLByCoords(latitude, longitude);
  var currForecastData = {};

  try {
    const response = await fetch(url);
    currForecastData = await response.json();
  } catch(err) {
    console.log('Error: Unable to fetch forecast data - ', err);
  }

  // console.log(currForecastData);
  return currForecastData;
}

export {
  getCurrWeather,
  getCurrWeatherByCoords,
  getCurrForecast,
  getCurrForecastByCoords
};