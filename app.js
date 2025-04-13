alert("Bem vindo ao jogo de perguntas e respostas");
alert("Cada pergunta respondida corretamente ganha 25 pontos");
alert("Ganhe o jogo se juntar ao menos 100 pontos");

//perguntas ao usuário
let pergunta1 = prompt("O Brasil faz parte de qual continente ?").toLowerCase();
let pergunta2 = prompt("Qual a capital do Brasil ?").toLowerCase();
let pergunta3 = parseInt(prompt("quantas décadas tem 11 anos ? (apenas o número)"));
let pergunta4 = parseInt(prompt("Quanto é 5 + 10 x 2 = x")); 
let pergunta5 = parseInt(prompt("Qual a raiz quadrada de 36")); 

// gabarito e pontuação do jogador
let resposta1 = "america do sul";
let resposta2 = "brasilia";
let resposta3 = 1;
let resposta4 = 25;
let resposta5 = 6;
let pontos = 0;

// verificando se as respostas estão corretas
if (pergunta1 == resposta1) {
    pontos = pontos + 25;
}
if (pergunta2 == resposta2) {
    pontos = pontos + 25;
}
if (pergunta3 == resposta3) {
    pontos = pontos + 25;
}
if (pergunta4 == resposta4) {
    pontos = pontos + 25;
}
if (pergunta5 == resposta5) {
    pontos = pontos + 25;
}

// conclusão do jogo
if (pontos >= 100) {
    alert("PARABÉNS, VOCÊ OBTEVE: " + pontos + " PONTOS E GANHOU O JOGO!!");
} else {
    if (pontos > 0) {
        alert("Você obteve apenas " + pontos + " pontos e perdeu o jogo, tente novamente!!");
    } else {
        alert ("Você não obteve nenhum ponto e perdeu o jogo, tente novamente!!");
    }
}

