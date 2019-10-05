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

  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds},${months[month]},${week[day]}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
