function verificarIdade() {
const idade = parseInt(document.getElementById('idade').value);

if(idade<18){
    alert("Entrada Proibida");
}else if(idade>60)
    {
    alert("Não pode mais ir na festinha da Barbie >:(")
}else{
    alert("Entadada Liberada");
}
}