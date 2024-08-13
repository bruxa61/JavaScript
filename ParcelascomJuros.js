prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Valor da Compra: "))
let parcelas = parseInt(prompt("Número de Parcela: "))
let taxa = parseFloat(prompt("Taxa de Juros Mensal: ")) / 100
let totalparcelas = (valor * taxa) / (1 - Math.pow((1 + taxa), -parcelas))

console.log("''''''''''''''''''''''''''''''''''''''''")
console.log("Valor Total:            " + valor.toFixed(2))
console.log("Número de Parcelas:     " + parcelas)
console.log("Taxa de Juros:          " + (taxa * 100) + "%")
console.log("Valor de Cada Parcela:  " + totalparcelas.toFixed(2))
console.log("''''''''''''''''''''''''''''''''''''''''")