prompt = require("prompt-sync")();

let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")
let result = parseFloat(num1) - parseFloat(num2)
console.log("Soma dos números:" + result)