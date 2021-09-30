const images = ["bg0.jpg", "bg1.jpg", "bg2.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);
