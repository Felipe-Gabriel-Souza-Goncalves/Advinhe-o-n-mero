<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>(Médio) - Adivinhe o número</title>
  <link rel="shortcut icon" href="imgs/medio.svg" type="image/x-icon">
  <link rel="stylesheet" href="global.css">

  <style>
    main{
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <header>
    <h1>Adivinhe o número! <span style="font-size: 10px">(PHP)</span></h1>
    <a href="index.php">Menu</a>
  </header>

  <main>
    <p>Tentativas: <span id="tentativas">1</span></p><br>
    <!-- <p>Palpites: <span name="palpites"></span></p> -->

    <form method="POST" action="palpite.php">
      <input 
        type="number"
        name="palpite"
        placeholder="Digite seu palpite aqui"
        min=0
      >
      <input type="hidden" name="alcance" value="10">
      <button>Mandar</button>
    </form>
    <br>
    <p id="status"></p>

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

    // Quando há dificuldade, ou seja, entrando no jogo
    if(isset($_GET["dificuldade"])){
      $_SESSION["jogando"] = "jogando";
      $_SESSION["tentativas"] = 0;

      $alcance = $_GET["dificuldade"];
      $num = rand(0, $alcance);
      $_SESSION["resposta"] = $num;

    // Quando entra no jogo, mas sem declarar dificuldade
    } else if(!isset($_SESSION["jogando"])){
      header("Location: index.php");
      exit;
    } 
  ?>

  <script>
      const tentativasElement = document.getElementById("tentativas")
      tentativasElement.textContent = "<?php echo $_SESSION["tentativas"] ?>"

      const statusElement = document.getElementById("status")
      statusElement.textContent = "<?php if(isset($_GET["msg"])){
        echo $_GET["msg"];
      } ?>"
  </script>
</body>
</html>