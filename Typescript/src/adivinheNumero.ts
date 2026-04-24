// Declaram quais dificuldades podem haver no jogo
const dificuldades = ["Fácil", "Médio", "Difícil"] as const;
type Dificuldade = typeof dificuldades[number]
let dificuldade: Dificuldade | null = null // Null até iniciar uma partida

const container = document.getElementById("containerDificuldade") as HTMLElement;
container?.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {

    const valor = button.textContent as Dificuldade;
     
    if (dificuldades.includes(valor)) {
      dificuldade = valor;
      iniciar();
    }
  });
});

const inputPalpite = document.getElementById("inputPalpite") as HTMLInputElement;
const botaoEnviar = document.getElementById("botaoEnviar") as HTMLInputElement;

const statusTentativa = document.getElementById("statusTentativa") as HTMLElement;
const spanTentativas = document.getElementById("spanTentativas") as HTMLElement;

let tentativas: number = 0;
let resposta: number = 0;

// Desativa o botão de enviar se o input estiver vazio
inputPalpite.addEventListener("input", () => {
  const value = inputPalpite.value;
  value === "" ? (botaoEnviar.disabled = true) : (botaoEnviar.disabled = false);
});

// Envia o palpite para verificação
botaoEnviar.addEventListener("click", () => {
  if (inputPalpite.value !== "") {
    const acertou: boolean = verificarNumero(parseInt(inputPalpite.value));
    if (acertou) {
      ganhar();
    }
  }
});

function iniciar(): void {
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
function gerarNumero(alcance: number): number {
  const numero = Math.floor(Math.random() * alcance);
  return numero;
}

// Deixa o DOM no estado de começo do jogo
function limparDOM() {
  container.style.display = "none";
  statusTentativa.textContent = ""
  spanTentativas.textContent = "0";
  inputPalpite.value = "";
  inputPalpite.focus();
}

function verificarNumero(palpite: number): boolean {
  tentativas += 1;

  // Lógica de comparação
  if (palpite === resposta) {
    statusTentativa.textContent = "ACERTOU!!";
    return true;
  } else if (palpite > -1 && palpite < resposta) {
    statusTentativa.textContent = "O palpite é menor que a resposta!";
  } else if (palpite > resposta && palpite < parseInt(inputPalpite.max)) {
    statusTentativa.textContent = "O palpite é maior que a resposta!";
  }

  spanTentativas.textContent = tentativas.toString();
  inputPalpite.value = "";
  inputPalpite.focus();
  return false;
}

function ganhar(): void {
  container.style.display = "block"
}
