import renderOverviewData from "./overview";
import renderWeatherDetails from "./weatherDetails";

export default function addCityToHistory(weatherData) {
  const history = document.querySelector("div.cities");

  const cityName = document.createElement("p");
  cityName.textContent = weatherData.name;

  cityName.addEventListener("click", () => {
    renderWeatherDetails(weatherData);
    renderOverviewData(weatherData);
  });

  history.appendChild(cityName);
  history.removeChild(history.firstChild);
}
