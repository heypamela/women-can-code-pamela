//Filter

const meusNumeros = [1,2,3,4,5,6,7,8,9,10];

const meusNumerosPares = meusNumeros.filter(function (number){
    return number % 2 === 0;
});

console.log(meusNumerosPares);


const meusUsuarios = [
    {id: 1, nome: 'Pam', email:'pam@gmail.com', status: 'online'},
    {id: 2, nome: 'Tião', email: 'tiao@gmail.com', status: 'offline'},
    {id: 3, nome: 'Babi', email: 'babi@gmail.com', status: 'online'}
]

const meusUsuariosOnline = meusUsuarios.filter(function(usuario){
    return usuario.status === "online";
});

console.log(meusUsuariosOnline);

const meusUsuariosOffline = meusUsuarios.filter(function(usuario){
    return usuario.status === "offline";
});
console.log(meusUsuariosOffline);