// Classificação de Filmes
function filmes() {
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    switch (true) {

        // CRIANÇAS
        case idade > 0 && idade <= 12:
            if (genero == 'animação'){
                resultado.textContent = 'Moranguinho';
            } else if (genero == 'aventura'){
                resultado.textContent = 'Doki'
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // JOVENS
        case idade > 12 && idade < 18:
            if (genero == 'ação'){
                resultado.textContent = 'Hora de Aventura';
            } else if (genero == 'drama'){
                resultado.textContent = 'A Cinco Passos de Você';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // ADULTOS
        case idade > 17 && idade < 65:
            if (genero == 'comédia'){
                resultado.textContent = 'Gente Grande';
            } else if (genero == 'suspense'){
                resultado.textContent = 'O Oitavo Passageiro';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // IDOSOS
        case idade >= 65:
            if (genero == 'romance'){
                resultado.textContent = 'Como eu era antes de você';
            } else if (genero == 'documentário'){
                resultado.textContent = 'Senna';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        default:
            resultado.textContent = 'Idade inválida.';
    }
}

// Recomendações de Roupas
function temperatura() {
    const graus = parseInt( document.getElementById('quentura').value);
    let temperatura = "" ;
    let roupa = ""
    switch (true) {
        
        case (graus < 15 ):
            temperatura = 'Frio';
            roupa = "casaco e luvas";
            break;

        case (graus < 25 ):
            temperatura = 'Ameno';
            roupa = "jaqueta e cachecol";
            break
        
        case (graus > 25 ):
            temperatura = 'Quente';
            roupa = "camisa e chapéu";
            break
    
    
        }
        document.getElementById("clima").textContent = "Está " + temperatura + "!! então você deverá usar " + roupa; 
}