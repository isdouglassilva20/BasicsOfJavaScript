// var usuario = {
//     nome: 'Ismael Douglas',
//     idade: 27,
//     sexo: 'M',
//     pais: 'Brasil'
// };

// var {nome: nome_completo} = usuario;
// console.log(nome_completo);

// // var nome = usuario.nome     =        var {nome} = usuario
// // var {nome, idade, sexo, pais} = usuario
// // var {nome: primeiroNome} = usuario (primeiro nome é 'Ismael Douglas')



// var usuario2 = {
//     nomeCompleto :{
//         primeiro: 'Ismael',
//         ultimo: 'Silva'
//     }
// };

// var { nomeCompleto: { primeiro }} = usuario2;
// console.log(primeiro);

// var {nomeCompleto: {segundo='Douglas'}} = usuario2;
// console.log(segundo);

// function imprimeUsuario({nome3, idade3, sexo3}){
//     console.log(nome3);
//     console.log(idade3);
//     console.log(sexo3);
// }

var usuarioFunction = {
    nome3: 'Flavia Silva',
    idade3: 27,
    sexo3:'F'
};

// imprimeUsuario(usuarioFunction);

// console.log(Object.keys(usuarioFunction));
// // > 0: "nome3"
// // > 1: "idade3"
// // > 2: "sexo3"

// console.log(Object.values(usuarioFunction));
// // > 0: "FLavia Silva"
// // > 1: 27
// // > 2: "F"


var props = Object.keys(usuarioFunction);

//console.log(props);

for (var i = 0; i<props.length; i++){
// console.log(props[i]);
// console.log('é: ', usuarioFunction[props[i]])
}

for (var prop of props){
    // console.log([prop])
    // console.log('é: ', usuarioFunction[prop])
}

for (var prop2 in usuarioFunction) {
    if(usuarioFunction.hasOwnProperty(prop2)){
    console.log(prop2, usuarioFunction[prop2]);
    }
}