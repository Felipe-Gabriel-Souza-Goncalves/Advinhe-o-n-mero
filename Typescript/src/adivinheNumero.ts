const inputPalpite = document.getElementById("inputPalpite") as HTMLInputElement
const botaoEnviar = document.getElementById("botaoEnviar") as HTMLInputElement
const spanTentativas = document.getElementById("spanTentativas") as HTMLElement

let tentativas: number = 0;
let resposta: number | null = null;

inputPalpite.addEventListener("input", () =>{
  const value = inputPalpite.value
  value === "" ? botaoEnviar.disabled = true : botaoEnviar.disabled = false 
})   

botaoEnviar.addEventListener("click", () =>{
  if(inputPalpite.value !== ""){
    verificarNumero(parseInt(inputPalpite.value))
  }
})

function iniciar(dificuldade: number): void{
  // Reinicia tentativas e atualiza DOM
  tentativas = 0;
  limparDOM()

  // Gera o número para adivinhar e limita o input de palpite
  switch(dificuldade){
    case 1: 
      resposta = gerarNumero(10)
      inputPalpite.max = "10"
      break
    case 2: 
      resposta = gerarNumero(100)
      inputPalpite.max = "100"
      break
    case 3: 
      resposta = gerarNumero(1000)
      inputPalpite.max = "1000"
      break
  }

}

// Cria a resposta do jogo com base no alcance 10/100/10000=
function gerarNumero(alcance: number): number{
  const numero = Math.floor(Math.random()*alcance)
  return numero
}

// Deixa o DOM no estado de começo do jogo
function limparDOM(){
  spanTentativas.textContent = "0"
  inputPalpite.value = ""
  inputPalpite.focus()
}

function verificarNumero(palpite: number): boolean{
  tentativas += 1;
  if(palpite === resposta){
    return true
  }

  inputPalpite.value = ""
  inputPalpite.focus()
  return false
}

