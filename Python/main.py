import random, os

jogando = True
while (jogando):

    pontuacao = 0
    tentativas = 1
    alcance = 10
    arrayPalpites = []

    print("Qual a dificuldade? (insira o número correspondente) \n")
    print("1 - Fácil: 0 - 10")
    print("2 - Médio: 0 - 100")
    print("3 - Difícil: 0 - 1000 \n")
    dificuldade = input()

    match(dificuldade):
        case "1":
            alcance = 10
        case "2":
            alcance = 100
        case "3":
            alcance = 1000

    os.system("cls")

    numero = random.randint(0, alcance)

    # Loop do jogo
    while(True):
        try:
            print("Tentativa ", tentativas, " Palpites: ", arrayPalpites)
            palpite = input()

            if(palpite == "limpar"):
                os.system("cls")
                continue

            palpite = int(palpite)
            
        except ValueError:
            print("input inválido")
            continue

        if(palpite < numero and palpite > 0):
            print("Errou, o número é maior!")
            arrayPalpites.append(palpite)

        elif(palpite > numero and palpite < alcance):
            print("Errou, o número é menor!")
            arrayPalpites.append(palpite)

        elif(palpite == numero):
            print("Parabéns você acertou!")
            print("Tentativas: ", tentativas)
            print("Palpite: ", palpite)
            print("Número: ", numero, "\n")

            continuar = input("Deseja continuar jogando? (s/n)")
            if(continuar == "s"):
                os.system("cls")
                tentativas = 1
                break
            else:
                jogando = False
                break
        else:
            print("input inválido")
            continue
        tentativas+=1