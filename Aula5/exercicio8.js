// 8. Faça uma função que execute um `forEach` em `pedidos`, que agora tem um status e imprima mensagens ao usuário de acordo com ele. Se:

//1. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
//2. Status for igual a "a caminho", imprima a mensagem "Entregador a caminho, fique atento!"
//3. Status for igual a "entregue", imprima a mensagem "Pedido entregue"
//4. Se não for nenhum desses status, imprima "Aguarde, processando pedido..."


const pedidos = [
    { id: 1, prato: "x-bacon", status: "entregue" },
    { id: 2, prato: "sundae", status: "em preparo" },
    { id: 3, prato: "fritas média", status: "a caminho" },
    { id: 4, prato: "nuggets", status: "entregue" },
    { id: 5, prato: "x-tudo", status: "a caminho" },
  ];


const statusPedido = pedidos.forEach(function(pedido){
    const status = {status: pedido.status};


   if(pedido.status == "em preparo"){
        console.log("Seu pedido está sendo preparado!");
    } else if(pedido.status == "a caminho"){
        console.log("Entregador a caminho, fique atento!")
    } else if(pedido.status == "entregue"){
        console.log("Pedido entregue")
    } else {
        console.log("Aguarde, processando o pedido...");
    }
    
});

console.log(statusPedido);