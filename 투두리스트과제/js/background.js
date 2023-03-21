const body = document.querySelector("body");
const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomIndex = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randomIndex]})`;
body.style.backgroundSize = "cover";