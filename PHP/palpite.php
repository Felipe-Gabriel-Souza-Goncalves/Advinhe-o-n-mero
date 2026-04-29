<html>
  <body>
    <?php 
      session_start();
      $status = "";

      // Há um envio de palpite e é durante o jogo
      if($_SERVER["REQUEST_METHOD"] == "POST" && $_SESSION["jogando"] != "terminou") {

        // Se houver palpite e for válido
        if(isset($_POST["palpite"]) && $_POST["palpite"] != ""){
          $_SESSION["tentativas"]++;

          // Resposta certa
          if($_POST["palpite"] == $_SESSION["resposta"]){

            $_SESSION["jogando"] = "terminou"; // Isso foi responsável por muitos bugs
            unset($_SESSION["resposta"]); 
            $status = "Parabéns! você acertou";


          // Resposta > palpite
          } elseif ($_POST["palpite"] < $_SESSION["resposta"]) {
            $status = "A resposta é maior!";

          // Resposta < palpite
          } elseif ($_POST["palpite"] > $_SESSION["resposta"]){
            $status = "A resposta é menor!";
          }
        } 

        } elseif($_SERVER["REQUEST_METHOD"] == "POST" && $_SESSION["jogando"] != "acabou"){
          $status = "Parabéns! você acertou";
        }
        
      header("Location: jogo.php?msg=". $status);
      exit;
    ?>
  </body>
</html>
