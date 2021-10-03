const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const content = document.querySelector(".content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = " username";

const link = document.querySelector("a");

function onLoginsubmit() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function greetingByTime(username) {
  const date = new Date();
  const hour = date.getHours();
  if (0 <= hour && hour < 06) {
    greeting.innerHTML = `Happy Dawn :)<br />${username}`;
  } else if (06 <= hour && hour < 13) {
    greeting.innerHTML = `Good Morning,<br /> ${username}`;
  } else if (13 <= hour && hour < 18) {
    greeting.innerHTML = `Good Afternoon,<br /> ${username}`;
  } else if (18 <= hour && hour < 22) {
    greeting.innerHTML = `Good Evening,<br /> ${username}`;
  } else if (22 <= hour && hour < 24) {
    greeting.innerHTML = `Good Night,<br /> ${username}`;
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
