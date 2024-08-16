function saudação(){
    const datahr = new Date().getHours()
    if(datahr<=12) {
        document.getElementById("saudação").innerHTML = "Bom Dia! :)";
    } else if(datahr>12 && datahr<18) {
        document.getElementById("saudação").innerHTML = "Boa Tarde! :)";
    } else {
        document.getElementById("saudação").innerHTML = "Boa Noite! :)";
    }
}