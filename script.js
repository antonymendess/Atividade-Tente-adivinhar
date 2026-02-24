let input = document.getElementById("palpite");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("tabela");
let tentativasTexto = document.getElementById("tentativas");

let numeroSecreto = Math.floor(Math.random() * 100) + 1

let maxTentativas = 10;
let tentativasRestantes = maxTentativas;

botao.addEventListener("click", function() {
    let valorDigitado = input.value;
    let palpite = parseInt(valorDigitado);

    if ( isNaN( palpite )  ||  palpite > 100  || palpite < 1 ) {

    mensagem.textContent = "Digite um número válido entre 1 e 100";
    
    return;   }

    if (palpite === numeroSecreto) {

    mensagem.textContent = "Você acertou!";
    
} else if ( numeroSecreto > palpite ) {

    mensagem.textContent = "O número secreto é maior";

} else {

    mensagem.textContent = "O número secreto é menor";

}

tentativasRestantes--;

tentativasTexto.textContent = "Tentativas restantes: " + tentativasRestantes;

if ( tentativasRestantes === 0 ) {
    mensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto;
    botao.disabled = true;
    return;
}

if (palpite === numeroSecreto) {
    mensagem.textContent = "Você ganhou! O número secreto era " + numeroSecreto;
    botao.disabled = true;
    return;

}
});

