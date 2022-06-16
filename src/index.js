const API_KEY = "ee8c332cbd72a23de5f8e2a32d0e2337";

const fetchWeatherData = (
  latitude,
  longitude,
  units = "imperial",
  language = "en"
) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&units=${units}&lang=${language}&lon=${longitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function fetchForecast(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const fetchGeolocationData = (zipCode, countryCode = "US") => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      const latitude = data.lat;
      const longitude = data.lon;
      fetchWeatherData(latitude, longitude);
      fetchForecast(latitude, longitude);
    });
};
export default fetchGeolocationData;

const button = document.querySelector('button');

button.addEventListener('click', ()=> {

    const input = document.querySelector('input');

    console.log(fetchGeolocationData(input.value));

})
fetchGeolocationData("07087");
