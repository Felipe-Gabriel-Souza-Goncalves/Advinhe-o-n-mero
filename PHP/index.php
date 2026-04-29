<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adivinhe o número</title>
  <link rel="shortcut icon" href="imgs/menu.svg" type="image/x-icon">
  <link rel="stylesheet" href="global.css">
</head>
<body>
  <header>
    <h1>Adivinhe o número! <span style="font-size: 10px">(PHP)</span></h1>
  </header>

  <main>
    <div>
      <h1>Escolha a dificuldade:</h1>
      <div>
        <a href="jogo.php?dificuldade=10">Fácil <br> (1-10)</a>
        <a href="jogo.php?dificuldade=100">Médio <br> (1-100)</a>
        <a href="jogo.php?dificuldade=1000">Difícil <br> (1-1000)</a>
      </div>
    </div>
  </main>

  <footer>
    <div>
      <p>Github</p>
      <a rel="noopener noreferrer" href="https://github.com/Felipe-Gabriel-Souza-Goncalves">Pessoal</a> <br>
      <a rel="noopener noreferrer" href="https://github.com/FelipeGSG">Educacional</a>
    </div>

    <div>
      <a rel="noopener noreferrer" href="https://portifolio-fg.vercel.app/">Retornar para o portifólio</a> <br>
      <a rel="noopener noreferrer" href="https://github.com/Felipe-Gabriel-Souza-Goncalves/Adivinhe-o-n-mero">Ir para o repositório</a>
    </div>

    <div>
      <p>Visite também:</p>
      <span>Hospedados:</span>

      <p>
        Acesse a versão em 
        <a rel="noopener noreferrer" href="https://felipe-gabriel-souza-goncalves.github.io/Adivinhe-o-n-mero/HTML_JS/index.html">JavaScript</a>
      </p>
      <p>
        Acesse a versão em 
        <a rel="noopener noreferrer" href="https://colab.research.google.com/drive/1YqWPL3ykQ0OEboGSs7sVi6Yxei7eY3cI?usp=sharing">Python (Google Collab)</a>
      </p>

      <span>Ambiente local:</span>
      <p>Veja o código da versão <a rel="noopener noreferrer" href="https://github.com/Felipe-Gabriel-Souza-Goncalves/Adivinhe-o-n-mero/tree/main/Java">Java</a></p>

    </div>
  </footer>

  <?php 
    session_start();

    // Se havia uma sessão de partida passada, deleta
    if(session_status() == 2){
      $_SESSION = array();
      session_destroy();
    }
  ?>
</body>
</html>