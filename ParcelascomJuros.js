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


for