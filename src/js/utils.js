function kelvinToCelsius(tempK) {
  return tempK - 273.15;
}

function kelvinToFahrenheit(tempK) {
  return 1.8 * (tempK - 273) + 32;
}

export {
  kelvinToCelsius,
  kelvinToFahrenheit
};