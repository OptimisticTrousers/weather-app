export default function renderOverviewData(weatherData) {
  const degrees = document.querySelector("p.degrees");
  const city = document.querySelector("p.city");
  const time = document.querySelector("p.time");
  const weatherType = document.querySelector(".weather-type > p");

  degrees.textContent = `${Math.round(weatherData.main.temp)}°`;
  city.textContent = weatherData.name;
  time.textContent = weatherData.dt;
  weatherType.textContent = weatherData.weather[0].main;
}
