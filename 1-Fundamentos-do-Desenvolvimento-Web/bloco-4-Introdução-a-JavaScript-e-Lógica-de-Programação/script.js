//Variaveis
let myName = "Gabriel";
let birthCity = "Frederico Westphalen";
let birthYear = 2000;

console.log(myName, birthCity, birthYear);
console.log("Olá mundo!");

//Tipos primitivos
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);

const base = 5;
const height = 8;
const area = base * height;
const perimeter = base + base + height + height;

console.log(perimeter, area);

//Condições If e Else.

const nota = 60;
if(nota >= 80){
    console.log("Parabens vc foi aprovado!");
}else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera!");
}else{
    console.log("Voce foi reprovado(a)!");
}

//Operadores lógicos
const currentHour = 15;
let message;
if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}else if(currentHour >= 11 && currentHour <= 14){
    message = "Hora do almoço!!!";
}else if(currentHour >= 4 && currentHour <= 11){
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

let weekDay = "Domingo";

if(weekDay == "Segunda-feira" || weekDay == "Sexta-feira" || weekDay == "Terça-feira" || weekDay == "Quarta-feira" || weekDay == "Quinta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{
    console.log("FINALMENTE, descanso merecido UwU");
}


//Switch e Case
let aprovacao = "aprovada";
switch(aprovacao){
    case "aprovada":
        console.log("Pessoa aprovada!");
        break;
    case "lista":
        console.log("Pessoa em Lista de espera!");
        break;
    case "reprovada":
        console.log("Pessoa Reprovada");
        break;
}

//not

console.log(!(2 + 2) == 4); //false
