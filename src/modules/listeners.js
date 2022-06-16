import fetchData from "..";

const button = document.querySelector("button");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");

  const [city, state, country] = input.value.split(",");
  fetchData(city, state, country);
  form.reset();
});

fetchData("New York City", "NY", "US");
fetchData("Las Vegas", "NV", "US");
fetchData("Chicago", "LI", "US");
fetchData("London");
