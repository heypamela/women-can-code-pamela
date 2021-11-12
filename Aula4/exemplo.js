/* const meuPrimeiroObjeto = {}

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

*/

const meuArrayStrings = ["Pâmela", "Silva", "Barueri"];

const meuArrayNumbers = [10, 20, 30, 100, 765];

const meuArrayBooleanos = [true, false, true];

const meuArrayObjetos = [{
    nome: 'Pâmela', idade: 22
}, {
    profissao: 'Desenvolvedora Jr', empresa: 'VOCÊ_TEM_QUE_ME_CONTRATAR'
}, {}];

const meuArrayVariosTipos = ['Maracujá', 700, true, {eletronico:"notebook"}];

/*console.log(meuArrayVariosTipos[1]);
console.log(meuArrayStrings.length);

const tamanhoMeuArrayVariosTipos = meuArrayVariosTipos.length;
console.log(meuArrayVariosTipos[tamanhoMeuArrayVariosTipos - 1]);
console.log(meuArrayVariosTipos[tamanhoMeuArrayVariosTipos.length - 1]);

const indiceUltimoItem = tamanhoMeuArrayVariosTipos -1;
console.log(meuArrayVariosTipos[indiceUltimoItem]);
*/

meuArrayVariosTipos.push(['8', '9', '3']);

console.log(meuArrayVariosTipos);

meuArrayVariosTipos.unshift('Quinta-feira');
console.log(meuArrayVariosTipos);

meuArrayVariosTipos[3] = "fone de ouvido";
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.pop(); //deleta o ultimo
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.shift(); //deleta o primeiro
console.log(meuArrayVariosTipos);

console.log(meuArrayVariosTipos.indexOf('fone de ouvido'));

meuArrayVariosTipos.splice(3, 2);
console.log(meuArrayVariosTipos);






