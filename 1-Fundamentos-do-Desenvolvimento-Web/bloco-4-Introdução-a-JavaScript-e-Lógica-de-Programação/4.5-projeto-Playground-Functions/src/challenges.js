// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
} // voltar aqui para entender como é usado o .split().

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayy) {
  // seu código aqui

  let maiorNumero = arrayy[0];
  let quantos = 0;
  // passar pelo array e verificar qual o maior
  for (let i = 0; i < arrayy.length; i++) {
    if (arrayy[i] >= maiorNumero) {
      maiorNumero = arrayy[i];
    }
  }
  // passar pelo array e contar quantos "maiores" ele possui!
  for (let i = 0; i <= arrayy.length; i++) {
    if (arrayy[i] === maiorNumero) {
      quantos += 1;
    }
  }
  return quantos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Distancia do gato1 para o rato
  let distCat1 = Math.abs(mouse - cat1);
  // Distancia do gato2 para o rato
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui

  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a') {
      newString[i] = '1';
    } else if (string[i] == 'e') {
      newString[i] = '2';
    } else if (string[i] == 'i') {
      newString[i] = '3';
    } else if (string[i] == 'o') {
      newString[i] = '4';
    } else if (string[i] == 'u') {
      newString[i] = '5';
    } else {
      newString[i] = string[i];
    }
  }
  return newString.join('');
}

function decode(string) {
  // seu código aqui
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == '1') {
      newString[i] = 'a';
    } else if (string[i] == '2') {
      newString[i] = 'e';
    } else if (string[i] == '3') {
      newString[i] = 'i';
    } else if (string[i] == '4') {
      newString[i] = 'o';
    } else if (string[i] == '5') {
      newString[i] = 'u';
    } else {
      newString[i] = string[i];
    }
  }
  return newString.join('');
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
