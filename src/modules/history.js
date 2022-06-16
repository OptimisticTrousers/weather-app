export default function addCityToHistory(weatherName) {
  const history = document.querySelector("div.cities");

  const cityName = document.createElement("p");
  cityName.textContent = weatherName;

  cityName.addEventListener('click', () => {

  })

  history.appendChild(cityName);
  history.removeChild(history.firstChild);
}