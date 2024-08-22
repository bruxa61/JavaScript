prompt = require("prompt-sync")();

let idade = prompt("Idade: ")

if (idade>15 && idade<18 || idade>70){
    console.log("Voto opcional")
} else if(idade<=15){
    console.log("Não vota")
} else{
    console.log("Voto obrigatorio")
}
