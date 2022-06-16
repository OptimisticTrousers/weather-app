import renderOverviewData from "./overview";
import renderWeatherDetails from "./weatherDetails";

export default function addCityToHistory(weatherData) {
  const history = document.querySelector("div.cities");
    const cityName = document.createElement("p");
    cityName.textContent = weatherData.name;

    history.appendChild(cityName);
    history.removeChild(history.firstChild);

    cityName.addEventListener("click", () => {
      renderWeatherDetails(weatherData);
      renderOverviewData(weatherData);
    });



}
