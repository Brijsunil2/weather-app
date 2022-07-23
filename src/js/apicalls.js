const key = '37faff95420ed4780f103a874897a346';

function getAPIWeatherURL(location) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`;
}

function getAPIForecastURL(location) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}`;
}

async function getCurrWeather(location) {
  const url = getAPIWeatherURL(location);
  const response = await fetch(url);
  const currWeatherData = await response.json();

  console.log(currWeatherData);
  return currWeatherData;
}

async function getCurrForecast(location) {
  const url = getAPIForecastURL(location);
  const response = await fetch(url);
  const currForecastData = await response.json();

  console.log(currForecastData);
  return currForecastData;
}

export {getCurrWeather, getCurrForecast};