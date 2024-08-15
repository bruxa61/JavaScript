prompt = require("prompt-sync")();

let idade = prompt("Sua idade:")

if(idade<18){
    console.log("Entrada Proibida")
}else{
    console.log("Entadada Liberada")
}