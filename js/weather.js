const API_KEY = "490d65b6afc02b796b71ab182c80982c";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  const city = document.querySelector("#weather span:first-child");
  const weatherContainer = document.querySelector("#weather span:last-child");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Cna't find you. No weather for you.");
}

const pos = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
