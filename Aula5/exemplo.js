//Funções
/*
function nomeDaMinhaFuncao(){
    console.log("Minha primeira função rodou!");
}
nomeDaMinhaFuncao();

function funcaoComParametro(meuParametro, meuSegundoParametro){
    console.log(meuParametro, meuSegundoParametro);
}
funcaoComParametro("Meu primeiro parâmetro", "Meu segundo parâmetro!");
funcaoComParametro(89);
funcaoComParametro({nome: "Pâmela"});

function retornaValor(){
    return "Meu valor retornado";
}
console.log(retornaValor());

function calculaSubtracao(primeiroValor, segundoValor){
    return primeiroValor - segundoValor;
}
console.log(calculaSubtracao(10, 9));


function retornaVariavel(valorDaVariavel){
    const minhaVariavel = valorDaVariavel;
    return minhaVariavel;
}
console.log(retornaVariavel("Meu primeiro retorno com variavel"));

function retornoCondicional(valor){
    if(valor > 200){
        return "Valor maior do que 200"
    } else{
        return "Valor menor do que 200"
    }
}
console.log(retornoCondicional(201));

function retornoCondicionalTernario(valor){
    return valor > 200 ? "Valor maior do que 200" : "Valor menor do que 200";
}
console.log(retornoCondicionalTernario(22));


const resultadoCondicional = retornoCondicionalTernario(400);
console.log(resultadoCondicional);

//Arrow function
const nomeDaMinhaArrowFunction = () =>{
    console.log("Minha primeira arrow function");
}

const retornoCondicionalTernario2 = (valor) => valor > 300 ? "Valor maior do que 300" : "Valor menor do que 300";
const resultado = retornoCondicionalTernario2(20);
console.log(resultado);



//Loop

//for
for(let contador=1; contador<=5; contador++){
    console.log(contador);
    
    if(contador === 4){
        break;
    }
}

for(let contador=1; contador<=5; contador++){
    console.log("Pâmela");
}

const meuArray = [1, 2, 3, 4, 5];

for(let indice = 0; indice < meuArray.length; indice++){
    console.log(meuArray[indice]);
}


//while
let contador=1;
while(contador<=5){
    console.log("Sextou");
    contador++;
}

function repetidorWhile(){
    let contador=1;
    while(contador<=5){
        console.log("Amanhã é sábado!");
        contador++;
    }
}
repetidorWhile();


// Do ... While
let contador =1;
do{
    console.log("Hello");
    contador++;
} while(contador<=5);


//forEach 
const meuArray = ['Meu', 'apelido', 'é', 'Pâm'];

meuArray.forEach(function (item){
    console.log(item);
});

*/
//map
const meuArray = [1,2,3,4,5,6,7];
const arrayAtualizado = meuArray.map(function(valor){
    return "Meu valor é " + valor;
});
console.log(arrayAtualizado);

const meuArray=[1,2,3,4,5,6,7];
for(let indice=0; indice < meuArray.length; indice++){
    meuArray[indice++];
}
console.log(meuArray);


const meusUsuarios = [
    {id: 1, nome: 'Pâmela', email: 'pam@silva.com', idade: 22},
    {id: 2, nome: 'Sebastião', email: 'tiao@toledo.com', idade: 56}
];

meusUsuarios.forEach(function(usuario){
    console.log(usuario);
});

const meusUsuariosFormatados = meusUsuarios.map(function(usuario){
    const usuarioFormatado = {nome: usuario.nome, email: usuario.email};
    return usuarioFormatado;
});
console.log(meusUsuariosFormatados);