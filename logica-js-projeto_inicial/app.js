{alert('Boas vindas ao jogo do número secreto')};
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 a 10');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute < numeroSecreto){
        alert('O número secreto é maior que ' + chute);
    } else {
        alert('O número é menor que ' + chute);
    }
}