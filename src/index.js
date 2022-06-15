const API_KEY = "ee8c332cbd72a23de5f8e2a32d0e2337";

const fetchWeatherData = (
  latitude,
  longtitude,
  units = "imperial",
  language = "en"
) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&units=${units}&lang=${language}&lon=${longtitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default fetchGeolocationData = (zipCode, countryCode = "US") => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      const latitude = data.lat;
      const longtitude = data.lon;
      fetchWeatherData(latitude, longtitude);
      console.log(data, latitude, longtitude);
    });
};

fetchGeolocationData("07087");
