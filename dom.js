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

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }

  //title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
