var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var dir = document.getElementById("direction");

function changeBackground(){
    var gradient = "linear-gradient(to " + dir.value + "," +col1.value + ","+ col2.value + ")";
    body.style.background = gradient;
    css.textContent = gradient + ";";
}

col1.addEventListener("input", changeBackground);

col2.addEventListener("input", changeBackground);