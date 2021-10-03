const today = document.querySelector(".showToday span");

const date = new Date();
const month = date.getMonth() + 1;
const toDayDay = date.getDate();

today.innerText = `${month} / ${toDayDay}`;
