let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um numero: ')
let contador = 1
while(contador <= 50){
if(numero === 33){
    console.log('Parabéns , você acertou! Eis aqui um poema: Para ser grande, sê inteiro....')
    break;
}else{
    console.log('Hmmm , infelizmente você errou. Tente de novo');
    let numero = readlineSync.questionInt('Digite um numero: ')
}
}