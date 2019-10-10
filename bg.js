const body = document.querySelector("body");
const IMG_NUM = 5;

function getRandom() {
  const randNum = Math.ceil(Math.random() * IMG_NUM);
  return randNum;
}

function loadBgImage() {
  //const image = document.createElement("img");
  const image = new Image();
  const imgNum = getRandom();
  image.src = `images/${imgNum}.jpg`;
  body.appendChild(image);
  image.classList.add("js-bgImage");
}

function init() {
  loadBgImage();
}

init();
