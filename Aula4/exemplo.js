const meuPrimeiroObjeto = {}

const meuCarro = {
    modelo: "Jeep",
    cor: "Vermelho",
    ano: 2021,
    novo: true
};

console.log(meuCarro.modelo);

console.log(meuCarro["cor"]);

const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]);

meuCarro.temSeguro = true;
console.log(meuCarro);

meuCarro.ano = 2022;
console.log(meuCarro);

delete meuCarro.novo;