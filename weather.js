const API_KEY = "fd7c41f2f4b0f197d5b5618bea235fb8";
const COORDS_LS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const weath = json.weather[0].description;
      const city = json.name;
      weather.innerText = `${temp}'C @ ${weath} @ ${city}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function geoSuccess(pos) {
  const crd = pos.coords;
  const coordsObj = {
    longitude: crd.longitude,
    latitude: crd.latitude
  };
  saveCoords(coordsObj);
  getWeather(crd.latitude, crd.longitude);
}

function geoError(error) {
  console.warn("ERROR(" + error.code + "):" + error.message);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function loadCoords() {
  const coords = localStorage.getItem(COORDS_LS);
  if (coords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(coords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
