
import fetchData from "..";

const button = document.querySelector("button");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");

  console.log(input.value);
  fetchData();
  form.reset();
});

fetchData();
