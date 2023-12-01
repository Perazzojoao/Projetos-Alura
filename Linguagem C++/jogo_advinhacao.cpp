#include <iostream>     //Biblioteca padr�o de input e output do C++
#include <cstdlib>      //Biblioteca "stdlib.h" aprimorada para a linguagem C++
#include <ctime>
#include <locale.h>

using namespace std;    //Diz para o compiador que estaremos usando v�rias fun��es do "std". Assim n�o precisamos mais digitar "std::" antes das fun��es.

int main ()
{
    setlocale (LC_ALL, "Portuguese");

//Pra escrever uma fun��o padr�o da biblioteca do C++ utilize "std::" (standard) antes da fun��o. Se utilizado "using namespace std;" n�o precisa mais!

    //Fun��o "cout" (c out) --> gera um output no programa. Qualquer coisa escrita entre par�nteses (" ") nesta fun��o � impressa na tela.
    std::cout << "*************************************" << std::endl;  //"endl" (end line) --> Pula a linha.
         cout << "* Bem-vindos ao jogo da advinha��o! *" << endl;
         cout << "*************************************\n" << endl;

        cout << "Selecione o n�vel de dificuldade:" << endl;
        cout << "F�cil (F) - 12 tentativas \nM�dio (M) - 8 tentativas \nDif�cil (D) - 5 tentativas\n" << endl;

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
                cout << "Dificuldade inv�lida! Porfavor selecione uma dificuldade.\n" << endl;
            }
        }


    srand (time(0));    //Cria uma "semente" de um n�mero aleat�rio.
    const int numero_secreto = rand() % 100;  //"const"--> Define o valor da vari�vel como constante.
                                              //rand()%100; --> pega o n�mero aleat�rio, divide por 100 at� n�o poder mais e d� como resultado apenas o n�mero inteiro.

    //Imprimindo o valor de uma vari�vel:
    // cout << "O n�mero secreto � "<<numero_secreto<<". N�o conte para ningu�m!" << endl << endl;

    bool nao_acertou = true;
    int tentativas=0;

    double pontos = 1000.0;

    for (tentativas=1; tentativas<=numero_de_tentativas; tentativas++)
    {
        int chute;
        cout << "Tentativa: " << tentativas << endl;

        cout << "Qual � o seu chute? ";
        cin >> chute;                               //Fun��o "cin" (c input) --> Gera um input no programa. L� inputs do teclado.

        // cout << "Seu chute � "<< chute << endl;     //DICA: para n�o confundir "<<" com ">>" pense, "cout"(<<) recebe a mensagem para imprimir e 
                                                    //     "cin"(>>) envia o input para vari�vel.
                                                    //      Leia "<<"--> RECEBE. ">>"--> ENVIA.

        double pontos_perdidos = abs((chute - numero_secreto)/2.0);
        pontos = pontos - pontos_perdidos;


        bool acertou = chute == numero_secreto;     //"bool"--> tipo de vari�vel booleana. S� aceita varores de "true" ou "false".
        bool maior = chute > numero_secreto;

        if (acertou)
        {
            cout << "Parab�ns! Voc� acertou o n�mero secreto!" << endl;
            nao_acertou=false;
            break;
        }
        else if (maior)
        {
            cout << "Seu chute foi maior que o seu n�mero secreto!" << endl;
        }
        else
        {
            cout << "Seu chute foi menor que o n�mero secreto!" << endl;
        }

        cout << " " << endl;
    }

    cout << "Fim de jogo!" << endl;

    if (nao_acertou==true)
    {
        cout << "Voc� perdeu! Tente novamente!\n" << endl;

        cout << "O n�mero secreto era " << numero_secreto << endl;
    }
    else {
        cout << "\nN�mero de tentativas utilizadas: " <<tentativas<< endl;
        cout.precision (2);                                                 //Formata o "cout" para gerar 2 casas decimais.
        cout << fixed;                                                      //"Fixa" a v�rgula onde ela est�. N�o deixa o programa mov�-la.
        cout << "Sua pontua��o foi de "<<pontos<<" pontos" << endl;
    }

}