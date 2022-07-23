import * as apicalls from './js/apicalls.js';
import * as userLocation from './js/location-finder.js';

run();

async function run() {
  const coords = await userLocation.getLocationLatLng();
  const weatherData = await apicalls.getCurrWeatherByCoords(coords.latitude, coords.longitude);
  const forcastData = await apicalls.getCurrForecastByCoords(coords.latitude, coords.longitude);

}