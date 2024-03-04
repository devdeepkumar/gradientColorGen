leftBtn = document.getElementById("leftbtn");
rightBtn = document.getElementById("rightbtn");
colorText = document.getElementById("colorText");
copyColor = document.getElementById("copycolor");

let rgb1 = "#33ccff";
let rgb2 = "#ff99cc";

// hexcode generator
leftBtn.addEventListener("click", leftFun);

function genrateColor() {
  let hexChar = "012345678abcdef";
  let hexValues = "#";
  for (let i = 1; i <= 6; i++) {
    hexValues += hexChar[Math.floor(Math.random() * hexChar.length)];
  }
  return hexValues;
}
//left button functionalities
rightBtn.addEventListener("click", rightFun);

function leftFun() {
  rgb1 = genrateColor();
  leftBtn.innerHTML = rgb1;
  leftBtn.style.backgroundColor = rgb1;
  color();
}

//right button functionalities
function rightFun() {
  rgb2 = genrateColor();
  rightBtn.innerHTML = rgb2;
  rightBtn.style.backgroundColor = rgb2;
  color();
}

//Backgrount change function
function color() {
  document.body.style.backgroundImage = `linear-gradient(
    to right,
    ${rgb1}, ${rgb2}`;
  colorText.innerHTML = Text();
  copyColor.innerHTML = "Copy your color here";
}

// Paragrapg text Updation function
function Text() {
  return `background : linear-gradient(to right,
    ${rgb1}, ${rgb2});`;
}

//text Copied function when i clickd on color
colorText.addEventListener("click", copyPassword);

function copyPassword() {
  navigator.clipboard.writeText(colorText.innerHTML);
  copyColor.innerHTML = "Your color is copied";
}
