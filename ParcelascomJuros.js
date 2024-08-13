prompt = require("prompt-sync")();

let valor = prompt("Valor da Compra: ")
let parcelas = prompt("Número de Parcela: ")
let taxa = prompt("Taxa de Juros Mensal: ")
let total = parseFloat(valor) * parseInt((1 + taxa/100)^parcelas)
let taxaparcelas = parseInt(total) / parseInt(parcelas)

console.log("''''''''''''''''''''''''''''''''''''''''")
console.log("Valor Total:            " + total)
console.log("Número de Parcelas:     " + parcelas)
console.log("Taxa de Juros:          " + taxa)
console.log("Valor de Cada Parcela:  " + taxaparcelas)
console.log("''''''''''''''''''''''''''''''''''''''''")


// exercicio9_seunome.js

const prompt = require('prompt-sync')();

// Obtém os dados da compra do usuário
const valorTotalCompra = parseFloat(prompt("Digite o valor total da compra: "));
const numeroParcelas = parseInt(prompt("Digite o número de parcelas: "));
const taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em porcentagem): ")) / 100;

// Calcula o valor da parcela com juros compostos
const valorParcela = (valorTotalCompra * taxaJurosMensal) / (1 - Math.pow((1 + taxaJurosMensal), -numeroParcelas));

// Exibe os resultados
console.log("\n--- Detalhes da Compra ---");
console.log("Valor Total da Compra: R$", valorTotalCompra.toFixed(2));
console.log("Número de Parcelas: ", numeroParcelas);
console.log("Taxa de Juros Mensal: ", (taxaJurosMensal * 100).toFixed(2) + "%");
console.log("Valor de Cada Parcela: R$", valorParcela.toFixed(2));