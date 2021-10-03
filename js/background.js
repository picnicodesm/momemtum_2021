const images = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
  "bg8.jpg",
];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img//background-img/${choseImage}`;

//document.body.appendChild(bgImage);

const body = document.querySelector("body");
body.style.backgroundImage = `url("img/${choseImage}")`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center center";
body.style.backgroundRepeat = "no-repeat";
