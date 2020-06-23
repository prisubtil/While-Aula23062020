//Fatorial de um numero

let readlineSync = require('readline-sync');
let numeroFatorial = readlineSync.questionInt('Digite um numero: ')

let resultado = 1;

while(numeroFatorial>1){
    resultado = numeroFatorial * resultado;
    numeroFatorial = numeroFatorial -1;
}

console.log(resultado);