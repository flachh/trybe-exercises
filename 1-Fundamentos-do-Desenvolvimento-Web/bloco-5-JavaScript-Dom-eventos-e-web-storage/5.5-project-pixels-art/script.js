let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");

color1.style.backgroundColor = "black";
color2.style.backgroundColor = "purple";
color3.style.backgroundColor = "red";
color4.style.backgroundColor = "green";

//7
let corSelecionada = document.querySelector(".selected");
let corPaleta = document.querySelector("#color-palette");

function selecionaCor(x){
    corSelecionada = document.querySelector(".selected");
    corSelecionada.className = "color";
    x.target.className = "color selected";
}

corPaleta.addEventListener("click", selecionaCor);

//8


function pintarPixel(x){
    corSelecionada = document.querySelector(".selected");
    let backgroundColorpalete = window.getComputedStyle(corSelecionada).getPropertyValue("background-color");
    x.target.style.backgroundColor = backgroundColorpalete;
}

let pixelBoard = document.querySelector("#pixel-board");
pixelBoard.addEventListener("click", pintarPixel)


//9

function limparPixels(){
    let pixel = document.querySelectorAll(".pixel");
    for(let i = 0; i < pixel.length; i += 1){
        let pixels = pixel[i];
        pixels.style.backgroundColor = "white";
    }
}
let botaoLimparPixel = document.querySelector("#clear-board");
botaoLimparPixel.addEventListener("click", limparPixels);