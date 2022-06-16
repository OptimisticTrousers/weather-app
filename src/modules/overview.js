import fromUnixTime from 'date-fns/fromUnixTime'

export default function renderOverviewData(weatherData) {
  const degrees = document.querySelector("p.degrees");
  const city = document.querySelector("p.city");
  const time = document.querySelector("p.time");
  const weatherType = document.querySelector(".weather-type > p");
  const weatherIcon = document.querySelector(".weather-type > img");

  const condition = weatherData.weather[0].main;

  degrees.textContent = `${Math.round(weatherData.main.temp)}°`;
  city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  time.textContent = fromUnixTime(weatherData.dt);
  weatherType.textContent = condition;
}

function renderIcon(condition){
}
