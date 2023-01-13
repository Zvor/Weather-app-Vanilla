function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  cityElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "60754cb629e2cd63eeb18b5d4b8e4d52";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Zurich&units=metric&appid=${apiKey}";
axios.get(apiUrl).then(displayTemperature);
