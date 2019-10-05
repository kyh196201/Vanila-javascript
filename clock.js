const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "july",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const month = date.getMonth();
  const day = date.getDay();

  clockTitle.innerHTML = `${hours}:${minutes}:${seconds},${months[month]},${week[day]}`;
}

function init() {
  getTime();
}

init();
