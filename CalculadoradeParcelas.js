prompt = require("prompt-sync")();

let valor = prompt("Valor Total da Compra: ")
let parcelas = prompt("Número de Parcela: ")
let valorparcela = parseFloat(valor) / parseFloat(parcelas)

console.log("''''''''''''''''''''''''''''''''''''''''''")
console.log("Valor Total:            " + valor)
console.log("Número de Parcela:      " + parcelas)
console.log("Valor de Cada Parcela:  " + valorparcela)
console.log("''''''''''''''''''''''''''''''''''''''''''")