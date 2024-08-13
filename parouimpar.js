prompt = require("prompt-sync")();

// solicita um número ao usuário
const numero = parseInt(prompt("Digite um número inteiro: "));

// verifica se o número é par ou ímpar
if (numero % 2 === 0) {
  console.log(numero + " é um número par.");
} else {
  console.log(numero + " é um número ímpar.");
}