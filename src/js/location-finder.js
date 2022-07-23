function getLocationLatLngPromise() {
  if (navigator.geolocation) {
    return new Promise((resolve, _) => {
      navigator.geolocation.getCurrentPosition(resolve, handleError);
    }); 

  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

async function getLocationLatLng() {
  var position = await getLocationLatLngPromise();
  return {latitude: position.coords.latitude, longitude: position.coords.longitude};
}

function handleError(error) {
  let errorStr;
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorStr = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      errorStr = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      errorStr = 'The request to get user location timed out.';
      break;
    default:
      errorStr = 'An unknown error occurred.';
  }
  console.error('Error: ' + errorStr);
}

export {getLocationLatLng};