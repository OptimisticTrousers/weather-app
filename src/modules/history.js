import renderOverviewData from "./overview";
import renderWeatherDetails from "./weatherDetails";

export default function addCityToHistory(weatherData) {
  const history = document.querySelector("div.cities");
  const cityName = document.createElement("p");
  cityName.textContent = weatherData.name;

  if (history.childElementCount >= 3) {
    history.appendChild(cityName);
    history.removeChild(history.firstChild);
  } else {
    history.appendChild(cityName);
  }

  cityName.addEventListener("click", () => {
    renderWeatherDetails(weatherData);
    renderOverviewData(weatherData);
  });
}
