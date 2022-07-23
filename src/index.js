import * as apicalls from './js/apicalls.js';
import * as userLocation from './js/location-finder.js';
import * as utils from './js/utils.js';
import * as domTools from './js/dom-manipulation.js';
import './css/main.scss';

run();

async function run() {
  var location = 'London,uk';

  const coords = await userLocation.getLocationLatLng();
  const weatherData = await apicalls.getCurrWeatherByCoords(coords.latitude, coords.longitude);
  location = `${weatherData.name},${weatherData.sys.country}`;

  const forcastData = await apicalls.getCurrForecastByCoords(coords.latitude, coords.longitude);

  const data = {
    location: location,
    weatherData: weatherData,
    forcastData: forcastData
  };

  console.log(data);
  setInterval(domTools.updateDate, 1000);
}