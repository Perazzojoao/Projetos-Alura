#include <iostream>     //Biblioteca padrão de input e output do C++
#include <cstdlib>      //Biblioteca "stdlib.h" aprimorada para a linguagem C++
#include <ctime>
#include <locale.h>

using namespace std;    //Diz para o compiador que estaremos usando várias funções do "std". Assim não precisamos mais digitar "std::" antes das funções.

int main ()
{
    setlocale (LC_ALL, "Portuguese");

//Pra escrever uma função padrão da biblioteca do C++ utilize "std::" (standard) antes da função. Se utilizado "using namespace std;" não precisa mais!

    //Função "cout" (c out) --> gera um output no programa. Qualquer coisa escrita entre parênteses (" ") nesta função é impressa na tela.
    std::cout << "*************************************" << std::endl;  //"endl" (end line) --> Pula a linha.
         cout << "* Bem-vindos ao jogo da advinhação! *" << endl;
         cout << "*************************************\n" << endl;

        cout << "Selecione o nível de dificuldade:" << endl;
        cout << "Fácil (F) - 12 tentativas \nMédio (M) - 8 tentativas \nDifícil (D) - 5 tentativas\n" << endl;

        char dificuldade;
        int numero_de_tentativas;

        for (bool valido=false;valido==false;)
        {
            cout << "Dificuldade: ";
            cin >> dificuldade;
            cout << "" << endl;
            
            if (dificuldade=='F' || dificuldade=='f')
            {
                numero_de_tentativas = 12;
                valido=true;
            }
            else if (dificuldade=='M' || dificuldade=='m')
            {
                numero_de_tentativas = 8;
                valido=true;
            }
            else if (dificuldade=='D' || dificuldade=='d')
            {
                numero_de_tentativas = 5;
                valido=true;
            }
            else {
                cout << "Dificuldade inválida! Porfavor selecione uma dificuldade.\n" << endl;
            }
        }


    srand (time(0));    //Cria uma "semente" de um número aleatório.
    const int numero_secreto = rand() % 100;  //"const"--> Define o valor da variável como constante.
                                              //rand()%100; --> pega o número aleatório, divide por 100 até não poder mais e dá como resultado apenas o número inteiro.

    //Imprimindo o valor de uma variável:
    // cout << "O número secreto é "<<numero_secreto<<". Não conte para ninguém!" << endl << endl;

    bool nao_acertou = true;
    int tentativas=0;

    double pontos = 1000.0;

    for (tentativas=1; tentativas<=numero_de_tentativas; tentativas++)
    {
        int chute;
        cout << "Tentativa: " << tentativas << endl;

        cout << "Qual é o seu chute? ";
        cin >> chute;                               //Função "cin" (c input) --> Gera um input no programa. Lê inputs do teclado.

        // cout << "Seu chute é "<< chute << endl;     //DICA: para não confundir "<<" com ">>" pense, "cout"(<<) recebe a mensagem para imprimir e 
                                                    //     "cin"(>>) envia o input para variável.
                                                    //      Leia "<<"--> RECEBE. ">>"--> ENVIA.

        double pontos_perdidos = abs((chute - numero_secreto)/2.0);
        pontos = pontos - pontos_perdidos;


        bool acertou = chute == numero_secreto;     //"bool"--> tipo de variável booleana. Só aceita varores de "true" ou "false".
        bool maior = chute > numero_secreto;

        if (acertou)
        {
            cout << "Parabéns! Você acertou o número secreto!" << endl;
            nao_acertou=false;
            break;
        }
        else if (maior)
        {
            cout << "Seu chute foi maior que o seu número secreto!" << endl;
        }
        else
        {
            cout << "Seu chute foi menor que o número secreto!" << endl;
        }

        cout << " " << endl;
    }

    cout << "Fim de jogo!" << endl;

    if (nao_acertou==true)
    {
        cout << "Você perdeu! Tente novamente!\n" << endl;

        cout << "O número secreto era " << numero_secreto << endl;
    }
    else {
        cout << "\nNúmero de tentativas utilizadas: " <<tentativas<< endl;
        cout.precision (2);                                                 //Formata o "cout" para gerar 2 casas decimais.
        cout << fixed;                                                      //"Fixa" a vírgula onde ela está. Não deixa o programa movê-la.
        cout << "Sua pontuação foi de "<<pontos<<" pontos" << endl;
    }

}