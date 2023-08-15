var str;
const ele1 = document.querySelector(".container");
const ele2 = document.querySelector(".main_btn");
const ele3 = document.querySelector("span");
const ele5 = document.querySelector(":root");
ele1.style.width = window.innerWidth + "px";
ele1.style.height = window.innerHeight + "px";
let postionX = 10;
let postionY = 10;
let speedX = 10;
let speedY = 5;
const updates = () => {
  ele2.style.left = postionX + "px";
  ele2.style.top = postionY + "px";
};
const arr = ["Hover me 💀", "Cosmic  😈", "The Rock 👻", "a", "b", "c"];
setInterval(() => {
  if (postionX + ele2.clientWidth >= window.innerWidth || postionX < 0) {
    speedX = -speedX;
    color();
  }
  if (postionY + ele2.clientHeight >= window.innerHeight || postionY < 0) {
    color();
    speedY = -speedY;
  }
  postionX += speedX;
  postionY += speedY;
  updates();
}, 400);
const textUpdate = () => {
  ele3.innerText = `${arr[Math.round(Math.random(arr) * 2)]} `;
  if (str == 1) {
    str = 0;
  } else {
    str = 1;
  }

  ele3.style.opacity = str;
};
setInterval(() => {
  textUpdate();
}, 1000);

function color() {
  const arr2 = [
    "green",
    "yellow",
    "red",
    "orange",
    "gold",
    "purple",
    "skyblue",
    "pink",
  ];
  var colors = arr2[Math.round(Math.random(arr2) * arr.length - 1)];
  ele2.style.backgroundColor = colors;
  ele5.style.setProperty("--color", colors);
}
