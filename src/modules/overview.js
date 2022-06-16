export default function renderOverviewData(weatherData) {
  const degrees = document.querySelector("p.degrees");
  const city = document.querySelector("p.city");
  const time = document.querySelector("p.time");
  const weatherType = document.querySelector(".weather-type > p");

  const history = document.querySelector('div.cities');

    const cityName = document.createElement('p');
    cityName.classList.add('day');
    cityName.textContent = weatherData.name;
    history.appendChild(cityName);
    history.removeChild(history.firstChild);

  degrees.textContent = `${Math.round(weatherData.main.temp)}°`;
  city.textContent = weatherData.name;
  time.textContent = weatherData.dt;
  weatherType.textContent = weatherData.weather[0].main;
}

