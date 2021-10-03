const day = document.querySelector(".dDay span");
const ul = document.querySelector(".dayList");
const dDaySpan = document.querySelector(".dDay span");

const newYear = new Date(2022, 01, 01);
const childrensDay = new Date(2022, 04, 05);
const parentsDay = new Date(2022, 04, 08);
const teachersDay = new Date(2022, 04, 15);
const memorialDay = new Date(2022, 05, 06);
const nfDayOfKorea = new Date(2022, 09, 03);
const xMas = new Date(2021, 11, 25);

function getDDay(anniversary) {
  let dDay = new Date();
  dDay = anniversary;
  const date = new Date();
  const remain = dDay.getTime() - date.getTime();
  const Day = Math.ceil(remain / (1000 * 60 * 60 * 24));
  dDaySpan.innerText = `D - ${Day}`;
}

function checkDay(e) {
  e.preventDafault;
  let anniversary = new Date();
  if (e.target.className === "newYear") {
    console.log(e.target.className);
    anniversary = newYear;
    getDDay(anniversary);
  } else if (e.target.className === "childrensDay") {
    console.log(e.target.className);
    anniversary = childrensDay;
    getDDay(anniversary);
  } else if (e.target.className === "teachersDay") {
    console.log(e.target.className);
    anniversary = teachersDay;
    getDDay(anniversary);
  } else if (e.target.className === "parentsDay") {
    console.log(e.target.className);
    anniversary = parentsDay;
    getDDay(anniversary);
  } else if (e.target.className === "memorialDay") {
    console.log(e.target.className);
    anniversary = memorialDay;
    getDDay(anniversary);
  } else if (e.target.className === "nfDayOfKorea") {
    console.log(e.target.className);
    anniversary = nfDayOfKorea;
    getDDay(anniversary);
  } else if (e.target.className === "xMas") {
    console.log(e.target.className);
    anniversary = xMas;
    getDDay(anniversary);
  } else {
    return;
  }
}

ul.addEventListener("click", checkDay);
