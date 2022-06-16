export default function renderInformationData(weatherData, forecastData) {

    const description = document.querySelector('.weahter-detail:nth-child(1) > p:nth-child(1)');
  const cloudy = document.querySelector(
    ".weather-detail:nth-child(2) > p:nth-child(1)"
  );

  const humidity = document.querySelector(
    ".weather-detail:nth-child(3) > p:nth-child(1)"
  );

  const wind = document.querySelector(
    ".weather-detail:nth-child(4) > p:nth-child(1)"
  );

  description.textContent = weatherData.weather.description;

  cloudy.textContent = weatherData.clouds.all;

  humidity.textContent = weatherData.main.humidity;

  wind.textContent = `${weatherData.wind.speed}mi/hr`;
}
