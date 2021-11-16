// 5. Vamos construir uma função validaMaioridade para validar se o ano de nascimento fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a entrada dela em um determinado show.

 

function validaMaiorDeIdade(anoDeNascimento){
    const idade = 2021 - anoDeNascimento;
    
    if(idade > 18){
        return "Liberação autorizada";
    } else if(idade == 18 ){
        return "Validar documento de identidade";
    } else{
        return "ATENÇÃO: Liberação NÂO autorizada";
    }
}

console.log(validaMaiorDeIdade(2000));