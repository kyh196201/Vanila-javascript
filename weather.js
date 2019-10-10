const COORDS_LS = "coords";

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
    //
  }
}

function init() {
  loadCoords();
}

init();
