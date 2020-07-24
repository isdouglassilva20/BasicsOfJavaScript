//const btnh = document.querySelector(".btn-h");
//const form = document.querySelector("form")

//btnh.addEventListener("click", (event)=> {

//})

function imcconta(peso, altura){
    var peso = parseFloat(document.getElementById("number-peso").value);
    var altura = parseFloat(document.getElementById("number-idade").value);
    classificacao = ""
    imc = (peso / (altura * altura))

    if(imc<18.5){
        classificacao = "Magreza"
    } else if(imc>18.5 && imc<24.9){
        classificacao = "Normal"
    } else if(imc>25.0 && imc<29.9){
        classificacao = "Sobrepeso, Obesidade tipo 1"
    } else if (imc>30.0 && imc<39.9){
        classificacao = "Obesidade tipo 2"
    } else if(imc>40.0){
        classificacao = "Obesidade Grave, tipo 3"
    }

    alert(`Seu Índice de massa corporal é ${imc.toFixed(1)} = ${classificacao}`)
}


//var peso = 
//var altura = 

