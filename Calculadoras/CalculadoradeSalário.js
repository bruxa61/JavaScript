prompt = require("prompt-sync")();

let horas = prompt("Horas Trabalhadas Durante a Semana: ")
let valor = prompt("Valor da Hora: ")
let semanal = parseFloat(horas) * parseFloat(valor)
let mensal = parseFloat(semanal) * 4

console.log("'''''''''''''''''''''''''''''")
console.log("Salário Semanal:  " + semanal)
console.log("Salário Mensal:   " + mensal)
console.log("'''''''''''''''''''''''''''''")