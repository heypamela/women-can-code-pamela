const nome = "Pamela Silva";
const idade = 22;
const maiorIdade = true;


console.log(nome, idade);


console.log("Meu nome é " + nome + " e tenho " + idade);


//Operações Aritméticas


/*

+ soma
-subtração
* multiplicação
/ divisão
% resto de divisões

*/

var soma = 20 + 5;
var subtracao = 200 - 33;
var multiplicacao = 11 * 17;
var divisao = 66 / 3;
var restoDeDivisao = 20 % 7; 

console.log(soma, subtracao);
console.log(multiplicacao, divisao);
console.log(restoDeDivisao);

var total = 300 + subtracao;
console.log(total);


// if ... else
if(total>500){
    console.log("Total é maior que 500 sim");
} else{
    console.log("Total é menor que 500");
}

if(total > 500){
    console.log("Total é maior que 500 sim");
} else if(total > 400){
    console.log("Total é maior que 400");
} else{
    console.log("Total não é maior 400");
}


//Ternário
total > 500 ? console.log("Total é maior que 500 sim") 
: console.log("Total é menor que 500");

total > 500 ? console.log("Total é maior que 500 sim")
: total > 400 ? console.log("Total é maior que 400") 
: console.log("Total não é maior 400");

//Operadores de comparação

/*
== tem o mesmo igual
=== tem o mesmo valor e o mesmo tipo
!= tem valor de diferente
!== tem valor ou tipo diferente
> maior que >= maior ou igual que
< menor que <= menor ou igual que
*/


var primeiroValor = 3;
var segundoValor = "3";
console.log(primeiroValor == segundoValor);
console.log(primeiroValor === segundoValor);

console.log(typeof primeiroValor);
console.log(typeof segundoValor);

console.log(primeiroValor != segundoValor);
console.log(primeiroValor !== segundoValor);

var primeiroValor1 = 120;
var segundoValor2 = 90;

console.log(primeiroValor1 > segundoValor2);
console.log(primeiroValor1 >= segundoValor2);

console.log(primeiroValor1 < segundoValor2);
console.log(primeiroValor1 <= segundoValor2);