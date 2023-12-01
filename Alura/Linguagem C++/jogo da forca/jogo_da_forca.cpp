#include <iostream>
#include <string.h>       //Dependendo do compilador n�o precisa incluir essa biblioteca, pois o "iostream" j� a inclui. Por�m, � de boa pr�tica sempre inclu�-la mesmo assim.
#include <map>
#include <vector>
#include <fstream>        //Biblioteca para ler de arquivos.
#include <ctime>
#include <cstdlib>
#include <locale.h>
#include "jogo_da_forca.hpp"

using namespace std;

#define TENTATIVAS 5

//Vari�veis globais:
string palavra_secreta = "melancia";    //Para guardar uma palavra n�o precisamos mais criar um vetor de char, utilize apenas o tipo "string".
map <char, bool> chutou;    //Cria uma vari�vel "dicion�rio". --> map <<tipo_de_chave>, <valor_da_chave>> <nome_vari�vel>;
                            //Dicion�rio de "char" para "bool".

vector <char> chutes_errados;   //Vetor de tamanho din�mico. Diferente do "map" o "vector" s� aceita chaves do tipo int, ent�o declaramos apenas o tipo do valor da chave.
                                //Sintaxe: vector <tipo_vari�vel> nome_vari�vel;

void abertura()
{
    cout << "*********************" << endl;
    cout << "*** Jogo da Forca ***" << endl;
    cout << "*********************\n" << endl;
}

vector <string> le_arquivo()
{
    ifstream arquivo;               //"ifstream" � o tipo de arquivo que vai "ler" (input).
    arquivo.open("palavras.txt");

    if (arquivo.fail())
    {
        cout << "Arquivo indispon�vel!" << endl;
        perror ("Error");
        exit(1);
    }

    int qtd_palavras;
    arquivo >> qtd_palavras;

    vector<string> palavras_arquivo;

    for (int i=0;i<qtd_palavras;i++)
    {
        string palavra_lida;
        arquivo >> palavra_lida;

        palavras_arquivo.push_back(palavra_lida);
    }
    arquivo.close();

    return palavras_arquivo;
}

void sorteia_palavra()
{
    vector<string> palavras = le_arquivo();

    srand(time(0));
    int indice_sorteado = rand() % palavras.size();

    palavra_secreta = palavras.at(indice_sorteado);


}

void salva_arquivo(vector<string> nova_lista)
{
    ofstream arquivo;                                   //"ofstream" � o tipo de arquivo que vai "escrever" (output).
    arquivo.open("palavras.txt");

    if (arquivo.fail())
    {
        cout << "Arquivo indispon�vel!" << endl;
        perror ("Error");
        exit(1);
    }

    arquivo << nova_lista.size() << endl;

    for (string palavra : nova_lista)
    {
        arquivo << palavra << endl;
    }
    
    arquivo.close();
}

void adiciona_palavra()
{
    string nova_palavra;
    cout << "Nova palavra: ";
    cin >> nova_palavra;

    vector<string> lista_palavras = le_arquivo();
    lista_palavras.push_back(nova_palavra);

    salva_arquivo(lista_palavras);
}

void imprime_chutes_errados()
{
    cout << "Chutes errados: ";
    for (char letra : chutes_errados)
    {
        cout << letra << " ";
    }
    cout << "\n" << endl;
}

void imprime_palavra ()
{
    for (char letra : palavra_secreta)
    {
        if (chutou[letra])
        {
            cout << letra << " ";
        }
        else
        {
            cout << "_ ";
        }
    }
    cout << endl;
}

void chuta()
{
    char chute;
    cout <<"Chute: ";
    cin >> chute;

    chutou[chute] = true;

    if (letra_existe(chute))
    {
        cout << "Voc� acertou! Seu chute est� na palavra.\n\n" << endl;
    }

    else
    {
        cout << "Voc� errou! Seu chute n�o est� na palavra.\n\n" << endl;
        chutes_errados.push_back(chute);        //".push_back(chute)" insere a vari�vel "chute" na �ltima posi��o dispon�vel do vetor chutes_errados.
    }
}

bool letra_existe(char chute)
{
    // for (int i=0;i<palavra_secreta.size();i++)   //palavra_secreta.size() === strlen (palavra_secreta);
    // {
    //     if (chute == palavra_secreta[i])
    //     {
    //         return true;
    //     }
    // }

    //Forma reduzida de varrer cada coluna de uma string.
    for (char letra : palavra_secreta)                    //for (<valor_de_cada_letra> : <palavra_a_ser_varrida>)
    {
        if (chute == letra)
        {
            return true;
        }
    }

    return false;
}

bool nao_acertou()
{
    for (char letra : palavra_secreta)
    {
        if (!chutou[letra])
        {
            return true;
        }
    }
    return false;
}

bool nao_enforcou()
{
    // if (chutes_errados.size() < TENTATIVAS)
    // {
    //     return true;
    // }
    // return false;

    //Vers�o reduzida:
    return chutes_errados.size() < TENTATIVAS;      //Se verdadeiro retorna "true", sen�o, retorna "false".
}

void fim_de_jogo()
{
    imprime_chutes_errados();
    imprime_palavra();
    cout << "\nFim de jogo!" << endl;
    cout << "A palavra secreta era: " << palavra_secreta << endl;
    cout << endl; cout << endl;

    if (!nao_acertou() && nao_enforcou())
    {
        cout << "Parab�ns, voc� ganhou!" << endl;
    }
    else 
    {
        cout << "Voc� perdeu! Tente novamente!" << endl;
    }

    char adicionar;
    cout << "Deseja adicionar uma nova palavra secreta ao jogo? (S/N)" << endl;
    cin >> adicionar;
    cout << endl;

    if (adicionar=='S' || adicionar=='s')
    {
        adiciona_palavra();
    }
}

int main()
{
    setlocale(LC_ALL, "Portuguese");

    abertura();

    le_arquivo();
    sorteia_palavra();

    do {
        imprime_chutes_errados();

        imprime_palavra();

        chuta();

    } while (nao_acertou() && nao_enforcou());

    
    fim_de_jogo();
}