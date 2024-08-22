prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}