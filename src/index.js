const API_KEY = "ee8c332cbd72a23de5f8e2a32d0e2337";

function fetchGeolocationData(zipCode, countryCode = "US") {
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
fetchGeolocationData("07087");
