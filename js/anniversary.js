const day = document.querySelector(".dDay span");
const li = document.querySelectorAll(".dayList li");

const newYear = new Date(2022, 01, 01);
const childrensDay = new Date(2022, 04, 05);
const patentsDay = new Date(2022, 04, 05);
const teachersDay = new Date(2022, 04, 15);
const memorialDay = new Date(2022, 05, 06);
const nfDayOfKorea = new Date(2022, 09, 03);
const xMax = new Date(2021, 11, 25);

function getDDay() {
  const date = new Date();
  const remain = 변수.getTiem() - date.getTime();
}

function checkDay(e) {
  e.preventDafault;
  //const date;
  console.log(e.target.className);
}

li.addEventListener("click", checkDay);
