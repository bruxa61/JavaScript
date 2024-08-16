function bissexto() {

    let ano = parseInt(document.getElementById('ano').value)
    
    if ( ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        document.getElementById('resposta').innerHTML = "Seu ano é Bissexto" 
    }
    else {    
        document.getElementById('resposta').innerHTML = "Seu ano não é Bissexto" 
    }
    }