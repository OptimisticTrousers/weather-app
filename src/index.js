const API_KEY = 'ee8c332cbd72a23de5f8e2a32d0e2337';

function fetchGeolocationData(city, state, limit = 5) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},{country code}&limit=${limit}&appid=${API_KEY}`);
}
console.log('bob');
