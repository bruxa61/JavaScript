prompt = require("prompt-sync")();

let nome = prompt("Nome do produto: ")
let valor = prompt("Preço: ")
let porcent = prompt("Desconto em Porcentagem: ")
let desconto = parseFloat(valor) * parseFloat(porcent)/100
let final = parseFloat(valor) - parseFloat(desconto)

console.log("'''''''''''''''''''''''''''")
console.log("Produto:         " + nome)
console.log("Preço Inicial:   " + valor)
console.log("Desconto:        " + desconto)
console.log("Total:           " + final)
console.log("'''''''''''''''''''''''''''")