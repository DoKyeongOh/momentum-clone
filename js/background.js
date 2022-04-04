const images = [
  "background 1.jpg",
  "background 2.jpg",
  "background 3.jpg",
  "background 4.jpg",
];

const choosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../img/${choosenImg}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage";
