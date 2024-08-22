prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpite;
let tentativas = 0;

while (palpite !== numeroAleatorio){
    palpite = parseInt(prompt("Adivinhe o número de 1 à 100: "));
    tentativas ++;

if (palpite > 100 || palpite < 0){
    console.log("Número inválido")
}
else if(palpite === numeroAleatorio){
    console.log("Parabéns! Você acertou o número!")
    break;
} else if(palpite > numeroAleatorio){
    console.log("Você errou, o número é menor")
} else if (palpite < numeroAleatorio){
    console.log("Você errou, o número é maior")
}
}
