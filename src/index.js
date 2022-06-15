const API_KEY = "ee8c332cbd72a23de5f8e2a32d0e2337";

let latitude;
let longtitude;

const fetchWeatherData = (units = "imperial", lang = "EN") => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fetchGeolocationData = (zipCode, countryCode = "US") => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      latitude = data.lat;
      longtitude = data.lon;
      fetchWeatherData();
      console.log(data, latitude, longtitude);
    });
};

fetchGeolocationData("07087");
