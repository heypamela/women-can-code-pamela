// 5. Delete a propriedade patas do objeto meuCachorro e imprima-o em seguida. Você pode usar a notação de ponto ou colchete.


const meuCachorro = {
    "nome": "Spike",
    "patas": 4,
    "caudas": 1,
    "principalAmigo": "Humano"
  };


delete meuCachorro.patas;
console.log(meuCachorro);