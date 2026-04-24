// Declaram quais dificuldades podem haver no jogo
var dificuldades = ["Fácil", "Médio", "Difícil"];
var dificuldade = null; // Null até iniciar uma partida
var container = document.getElementById("containerDificuldade");
container === null || container === void 0 ? void 0 : container.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
        var valor = button.textContent;
        if (dificuldades.includes(valor)) {
            dificuldade = valor;
            iniciar();
        }
    });
});
var inputPalpite = document.getElementById("inputPalpite");
var botaoEnviar = document.getElementById("botaoEnviar");
var statusTentativa = document.getElementById("statusTentativa");
var spanTentativas = document.getElementById("spanTentativas");
var tentativas = 0;
var resposta = 0;
// Desativa o botão de enviar se o input estiver vazio
inputPalpite.addEventListener("input", function () {
    var value = inputPalpite.value;
    value === "" ? (botaoEnviar.disabled = true) : (botaoEnviar.disabled = false);
});
// Envia o palpite para verificação
botaoEnviar.addEventListener("click", function () {
    if (inputPalpite.value !== "") {
        var acertou = verificarNumero(parseInt(inputPalpite.value));
        if (acertou) {
            ganhar();
        }
    }
});
function iniciar() {
    // Reinicia tentativas e atualiza DOM
    tentativas = 0;
    limparDOM();
    // Gera o número para adivinhar e limita o input de palpite
    switch (dificuldade) {
        case "Fácil":
            resposta = gerarNumero(10);
            inputPalpite.max = "10";
            break;
        case "Médio":
            resposta = gerarNumero(100);
            inputPalpite.max = "100";
            break;
        case "Difícil":
            resposta = gerarNumero(1000);
            inputPalpite.max = "1000";
            break;
    }
}
// Cria a resposta do jogo com base no alcance 10/100/10000
function gerarNumero(alcance) {
    var numero = Math.floor(Math.random() * alcance);
    return numero;
}
// Deixa o DOM no estado de começo do jogo
function limparDOM() {
    container.style.display = "none";
    statusTentativa.textContent = "";
    spanTentativas.textContent = "0";
    inputPalpite.value = "";
    inputPalpite.focus();
}
function verificarNumero(palpite) {
    tentativas += 1;
    // Lógica de comparação
    if (palpite === resposta) {
        statusTentativa.textContent = "ACERTOU!!";
        return true;
    }
    else if (palpite > -1 && palpite < resposta) {
        statusTentativa.textContent = "O palpite é menor que a resposta!";
    }
    else if (palpite > resposta && palpite < parseInt(inputPalpite.max)) {
        statusTentativa.textContent = "O palpite é maior que a resposta!";
    }
    spanTentativas.textContent = tentativas.toString();
    inputPalpite.value = "";
    inputPalpite.focus();
    return false;
}
function ganhar() {
    container.style.display = "block";
}
