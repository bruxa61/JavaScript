prompt = require("prompt-sync")();

let grauC = prompt("Temperatura em C°: ")
let grauF = parseFloat(grauC) * 9/5 + 32
console.log("Conversão: " + grauF + "°F") 