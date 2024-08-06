prompt = require("prompt-sync")();

let ano = prompt("Ano de nascimento: ")
let result = new Date().getFullYear() - parseInt(ano)
console.log("Idade: " + result)