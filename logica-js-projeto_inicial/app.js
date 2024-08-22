alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Foi colocado () * 10 + 1 para que de resultados até 10 e não apenas até 9
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a ' + numeroMaximo);
    
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert('O número é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);