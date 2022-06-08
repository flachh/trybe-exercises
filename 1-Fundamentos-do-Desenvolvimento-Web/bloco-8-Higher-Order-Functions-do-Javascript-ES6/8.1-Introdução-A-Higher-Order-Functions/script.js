const person = {
    name: 'gabriel',
    lasname: 'flach',

    greet: function(greetingFunction, personName){
        return greetingFunction(personName);  
    }
}

const loveGreeting = (x) =>{
      return "ola "+ x +" pessoa querida"
  }
const formalGreeting = () =>{
    return "Excelentissima pessoa!!"
}
const badMoonGreeting = () =>{
    return "oi"
}
const casualGreeting = () =>{
    return "dai po"
}

console.log(person.greet(loveGreeting, "Flach"));
// console.log(person.greet(formalGreeting));
// console.log(person.greet(badMoonGreeting));
// console.log(person.greet(casualGreeting));



const sayHello = () => {
    return ('hello trybers');
}
  
const printGreeting = (callback) => {
    console.log(callback());
}  
printGreeting(sayHello);

////////////////////////
const sumFixAmount = (amount) => {
    return (number) => amount + number;
}
  
const initialSum = sumFixAmount(15)
//console.log(initialSum(5));
//////////////////////////

//PRA FIXAR
const acordando = () => "acordando!!!";
const cafe = () => "Bora tomar café!!";
const dormir = () => "Patiu dormir!!";

const doingThings = (func) => console.log(func);

//doingThings(acordando);
////

//Pratica!!
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (x) => { //parametro de função não importa o nome!!!
    const employees = {
      id1: x("Pedro Guerra"), 
      id2: x("Luiza Drumond"), 
      id3: x("Carla Paiva"), 
    }
    return employees;
  };

  const myFuction = (fullName) =>{
    const mailEmployees = fullName.toLowerCase().split(" ").join("_");
    const eMail = `${mailEmployees}@trybe.com`;
    return {Name: fullName, eMail};
  }

//   console.log(newEmployees(myFuction));


  const sorteio = (numerosApostado) =>{
      
    const aleatorio = Math.floor(Math.random() * 10 + 1);
    
    checaNumero = (aleatorioNumber, numerosApostado) => {
        if(aleatorioNumber === numerosApostado){
                return "Parabéns você ganhou";
            }
            else{
                return "Tente novamente";
            }
        }
    return checaNumero(aleatorio, numerosApostado);

  }
  //console.log(sorteio(5));

//   3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

checaNota = (gabarito, respostaAluno) => {
    const contagem = 0;
    // for(const value of gabarito){
    //     if (gabarito[value] === respostaAluno[value]){
    //         contagem = + 1;
    //     }else if (respostaAluno === "N.A"){
    //         contagem;
    //     }else{
    //         contagem =- 0.5;
    //     }
    //     return contagem;
    // }  
    // for(const ){

    // } 
}


const funcHof = (gabarito, respostaAluno, checaNota) => {
    return checaNota(gabarito, respostaAluno);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(funcHof(RIGHT_ANSWERS, STUDENT_ANSWERS, checaNota));



const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach( (number, index) => {
    console.log(index ,number);
}
);