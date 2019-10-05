const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    //she is not
  } else {
    //she is
    paintGreeting(currentUser);
  }
}

function changeColor() {
  const hasClass = greeting.classList.contains("colored");

  if (hasClass) {
    greeting.classList.remove("colored");
  } else {
    greeting.classList.add("colored");
  }
}

function init() {
  loadName();
  greeting.addEventListener("click", changeColor);
}

init();
