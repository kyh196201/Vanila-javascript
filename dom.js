// const paragraph = document.querySelector("p");

// paragraph.innerHTML = "Hi my name is JS";
// const button = document.getElementById("clickBtn");
// function clickBtn() {
//   button.style.color = "red";
//   button.style.backgroundColor = "white";
//   button.style.border = "none";
//   button.style.padding = "22px";
// }

const title = document.querySelector("#title");

function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);

var target = document.querySelector("p");

function handleClick() {
  target.style.color = "red";
}

target.addEventListener("click", handleClick);
