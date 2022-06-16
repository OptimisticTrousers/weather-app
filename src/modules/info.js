export default function renderInformationData(weatherData, forecastData) {
  const description = document.querySelector(
    ".weather-detail.description > p:nth-child(1)"
  );
  const cloudy = document.querySelector(
    ".weather-detail.cloudy > p:nth-child(2)"
  );
  const humidity = document.querySelector(
    ".weather-detail.humidity > p:nth-child(2)"
  );
  const wind = document.querySelector(".weather-detail.wind> p:nth-child(2)");

  description.textContent += weatherData.weather[0].description;

  cloudy.textContent = `${weatherData.clouds.all}%`;

  humidity.textContent = `${weatherData.main.humidity}%`;

  wind.textContent = `${weatherData.wind.speed}mi/hr`;
}
