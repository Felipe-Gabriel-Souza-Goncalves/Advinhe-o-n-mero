import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class numeroAleatorio {
    public static void main(String[] args){

        try (Scanner ler = new Scanner(System.in)) {
            Random rand = new Random();
            boolean jogando = true;

            do {
                int tentativas = 1;
                int dificuldade = 10;
                ArrayList<Integer> arrayPalpites = new ArrayList<Integer>();

                System.out.println("Qual a dificuldade que você deseja? (insira o número)");
                System.out.println("1 - Fácil (0 - 10)");
                System.out.println("2 - Médio (0 - 100)");
                System.out.println("3 - Difícil (0 - 1000) ");
                System.out.println("4 - Sair");

                dificuldade = ler.nextInt();

                switch (dificuldade) {
                    case 1:
                        dificuldade = 10;
                        break;
                    case 2:
                        dificuldade = 100;
                        break;
                    case 3:
                        dificuldade = 1000;
                        break;
                    case 4:
                        jogando = false;
                        continue;
                    default:
                        break;
                }

                int num = rand.nextInt(dificuldade + 1);

                ler.nextLine();
                do{
                    System.out.println("Digite seu palpite ou 'tentativa' para mostrar todos os seus palpites");
                    System.out.println("Tentativa " + tentativas );
                    String input = ler.nextLine();
                    // System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

                    if(input.equals("tentativa")){
                        // for(int i = 0; i < arrayPalpites.size(); i++){
                        //     System.out.println("entrou no for");
                            System.out.println("Palpites: "+ arrayPalpites +"\n");
                        // }
                        continue;
                    }
                    try {
                        int palpite = Integer.parseInt(input);
                        if(palpite > num && palpite < dificuldade){
                            System.out.println("Errou, o número é menor! \n");
                            arrayPalpites.add(palpite);
                        } else if (palpite < num && palpite > 0){
                            System.out.println("Errou, o número é maior! \n");
                            arrayPalpites.add(palpite);
                        } else if(palpite == num){
                            System.out.println("Acertou! É o número " + num + "!");
                            break;
                        } else{
                            System.out.println("input inválido");
                            continue;
                        }
                        
                    } catch (Exception e) {
                        System.out.println("Digite somente números ou 'tentativa' \n");
                        continue;
                        // TODO: handle exception
                    }
                    tentativas++;
                }while(true);
                
                System.out.println("Número de tentativas: "+ tentativas);
            } while (jogando);
            System.out.println("Obrigado por jogar, adeus!");
        }
        
    }
}

