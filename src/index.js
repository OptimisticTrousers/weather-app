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

const fetchGeolocationData = async (zipCode, countryCode = "US") => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  );
  return response.json();
};

const fetchData = (zipCode) => {
  fetchGeolocationData(zipCode).then((geolocationData) => {
    console.log(geolocationData);

    const latitude = geolocationData.lat;

    const longitude = geolocationData.lon;

    // console.log(weatherData)
    // renderOverviewData(weatherData);

    const weatherData = fetchWeatherData(latitude, longitude);
    const forecastData = fetchForecast(latitude, longitude);

    Promise.all([weatherData, forecastData]).then((data) => {
      console.log(data);
      renderOverviewData(data[0]);
      renderWeatherDetails(data[0]);
    }).catch(error => console.log(error));
  });
};

export default fetchData;
