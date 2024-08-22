prompt = require("prompt-sync")();

let nome = prompt("Nome do produto: ")
let valor = prompt("Preço: ")
let quant = prompt("Quantidade comprada: ")
let total = parseFloat(valor) * parseFloat(quant)
let imposto = parseFloat(total) * 18/100
let totalimpost = parseFloat(total) + parseFloat(imposto)

console.log("'''''''''''''''''''''''''''''")
console.log("Produto:        " + nome)
console.log("Preço Unitário: " + valor)
console.log("Quantidade:     " + quant)
console.log("Imposto Total:  " + imposto)
console.log("Valor Total:    " + totalimpost)
console.log("'''''''''''''''''''''''''''''")
// console.log("Produto: " + nome + " " + "Preço Unitário: " + valor + " " + "Quantidade: " + quant + " " + "Imposto Total: " + imposto + " " + "Valor Total: " + totalimpost)