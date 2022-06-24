var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorText = document.querySelector(".colors-text");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";

  colorText.textContent =
    "And if you want to make your own linear gradient in your next project... 👇";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
