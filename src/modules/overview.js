import addCityToHistory from "./history";

export default function renderOverviewData(weatherData) {
  const degrees = document.querySelector("p.degrees");
  const city = document.querySelector("p.city");
  const time = document.querySelector("p.time");
  const weatherType = document.querySelector(".weather-type > p");

  const weatherName = weatherData.name;

  if(weatherName !== city.textContent){

    addCityToHistory(weatherName);
  }

  degrees.textContent = `${Math.round(weatherData.main.temp)}°`;
  city.textContent = weatherName;
  time.textContent = weatherData.dt;
  weatherType.textContent = weatherData.weather[0].main;
}
