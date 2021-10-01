const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const content = document.querySelector(".content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = " username";

const link = document.querySelector("a");

function onLoginsubmit(event) {
  //event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function greetingByTime(username) {
  const date = new Date();
  const sec = date.getSeconds();
  if (0 <= sec && sec < 20) {
    greeting.innerText = `Good Morning, ${username}`;
  } else if (20 <= sec && sec < 40) {
    greeting.innerText = `Good Afternoon, ${username}`;
  } else if (40 <= sec && sec < 60) {
    greeting.innerText = `Good Evening, ${username}`;
  }
}

function paintGreetings(username) {
  greetingByTime(username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  content.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreetings(savedUsername);
}
