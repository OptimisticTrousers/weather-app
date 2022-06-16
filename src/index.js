import addCityToHistory from "./modules/history";
import renderOverviewData from "./modules/overview";
import renderWeatherDetails from "./modules/weatherDetails";

const API_KEY = "ee8c332cbd72a23de5f8e2a32d0e2337";

const fetchWeatherData = async (
  latitude,
  longitude,
  units = "imperial",
  language = "en"
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&units=${units}&lang=${language}&lon=${longitude}&appid=${API_KEY}`
  );
  return response.json();
};

const fetchForecast = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  return response.json();
};

const fetchGeolocationData = async (cityName , stateCode, countryCode, limit="5") => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${API_KEY}`
  );
  return response.json();
};

const fetchData = (cityName = "Berlin", stateCode = "", countryCode = "") => {
  fetchGeolocationData(cityName, stateCode, countryCode).then((geolocationData) => {

    const latitude = geolocationData[0].lat;

    const longitude = geolocationData[0].lon;

    // console.log(weatherData)
    // renderOverviewData(weatherData);

    const weatherData = fetchWeatherData(latitude, longitude);
    const forecastData = fetchForecast(latitude, longitude);

    Promise.all([weatherData, forecastData]).then((data) => {
      renderOverviewData(data[0]);
      renderWeatherDetails(data[0], latitude, longitude);
      addCityToHistory(data[0]);
    }).catch(error => console.log(error));
  });
};

export default fetchData;
