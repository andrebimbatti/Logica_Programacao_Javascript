function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Desafio do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 à 10');

function verificarChute() {
    console.log('chutouuuu')
}