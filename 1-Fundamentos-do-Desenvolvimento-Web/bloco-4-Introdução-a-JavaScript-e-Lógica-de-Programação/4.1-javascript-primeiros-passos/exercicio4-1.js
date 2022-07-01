let a = 5;
let b = 10;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

//2

//let a = 5;
//let b = 10;

if(a > b){
    console.log(a);
}else{
    console.log(b);
}

//3

//let a = 5;
//let b = 10;
let c = 15;

if(a > b && a > c){
    console.log(a);
}else if(b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}

//4

const valor = 11;
if(valor > 0){
    console.log("Positivo");
}else if(valor < 0){
    console.log("Negativo");
}else{
    console.log("0");
}

//5

const triangulo1 = 40;
const triangulo2 = -20;
const triangulo3 = 140;

if((triangulo1 + triangulo2 + triangulo3) == 180 && triangulo1 > 0 && triangulo2 > 0 && triangulo3 > 0){
    console.log(true);
}else{
    console.log(false);
}

//6
const nomeDaPeca = "bispo";

switch(nomeDaPeca){
    case "bispo":
        console.log("Anda e come na diagonal!");
        break
    case "peão":
        console.log("Anda 1 pra frente, e come na diagonal para frente!");
        break
    case "torre":
        console.log("Anda nas laterais!");
        break
    case "cavalo":
        console.log("Anda em um formato de L, para qualquer direção!");
        break
    case "rei":
        console.log("Anda e come a peça, em todas as diagonais e as lateral porem, só 1 casa de cada vez!");
        break
    case "rainha":
        console.log("Anda e come a peça, em todas as diagonais e as lateral!");
        break
}

//7

const nota = 100;

if(nota >= 90 && nota <= 100){
    console.log("Nota A");
}else if(nota >= 80 && nota <= 90){
    console.log("Nota B");
}else if(nota >= 70 && nota <= 80){
    console.log("Nota C");
}else if(nota >= 60 && nota <= 70){
    console.log("Nota D");
}else if(nota >= 50 && nota <= 60){
    console.log("Nota E");
}else if(nota < 50){
    console.log("Nota F");
}else{
    console.log("Error digite uma nota valida")
}

//8 

const n1 = 11;
const n2 = 31;
const n3 = 23;

if(n1 % 2 ==0 || n2 % 2 == 0 || n3 % 2 == 0){
    console.log("Par");
}else{
    console.log("impar")
}

//9

if(n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1){
    console.log("impar");
}else{
    console.log("par")
}

//10



