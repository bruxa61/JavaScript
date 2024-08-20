prompt = require("prompt-sync")();

function verificarIdade() {
const idade = parseInt(document.getElementById('idade').value);

if(idade<18){
    alert("Entrada Proibida");
}else{
    alert("Entadada Liberada");
}
}