// const paragraph = document.querySelector("p");

// paragraph.innerHTML = "Hi my name is JS";
// const button = document.getElementById("clickBtn");
// function clickBtn() {
//   button.style.color = "red";
//   button.style.backgroundColor = "white";
//   button.style.border = "none";
//   button.style.padding = "22px";
// }

// function handleResize() {  //화면크기가 변경되는 이벤트
//   console.log("Window Resized");
// }

// window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#9b59b6";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
