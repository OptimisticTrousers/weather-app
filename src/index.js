import { format } from "prettier";

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
  const json = await response.json();
  console.log(json);
  return json;
};

const fetchForecast = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  const json = await response.json();
  console.log(json);
  return json;
};

const fetchGeolocationData = async (zipCode, countryCode = "US") => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${API_KEY}`
  );
  return response.json();
};

const fetchData = (zipCode) => {
  fetchGeolocationData(zipCode).then((data) => {

    console.log(data);

    const latitude = data.lat;

    const longitude = data.lon;

    fetchWeatherData(latitude, longitude);

    fetchForecast(latitude, longitude);
  });
};
export default fetchData;
