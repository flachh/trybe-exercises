// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrays = [];
  let ordenaArray = array.sort();

  if(array.length > 0){
    for(let i = 0; i < array.length; i++){
      let objeto = {
        tech: ordenaArray[i] ,
        name: name 
      }
      arrays.push(objeto);
    }
    return arrays
  }
  else{
    return 'Vazio!'
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
   
  let repeticoes = 0;
  
  for(let i of number){
    
    for(let index of number){
      
      if(number[i] === number[index]){
        repeticoes ++;
      }
    }
    
    if(number[i] < 0 || number[i] > 9 || repeticoes >=3){
      return "não é possível gerar um número de telefone com esses valores."
    }
    else if(number.length !== 11){
      return "Array com tamanho incorreto."
    }
    else{
      return `(${number.slice(0,2).join('')}) ${number.slice(2, 7).join('')}-${number.slice(7).join('')}`

    }
  }

}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(x));



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if((lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineB + lineA)){
    return true;
  }else if(lineA > Math.abs(lineB - lineC) || lineB >  Math.abs(lineA - lineC) || lineC > Math.abs(lineB - lineA)){
    return true;
  }else{
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
