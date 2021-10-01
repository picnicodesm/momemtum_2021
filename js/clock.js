const clock = document.querySelector("#clock");
const year = document.querySelector("#year");
const second = document.querySelector("#second");

function getClock() {
  const date = new Date();
  const years = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  year.innerText = years;
  clock.innerText = `${hours}:${minutes}`;
  second.innerText = seconds;
}

getClock();
setInterval(getClock, 1000);
