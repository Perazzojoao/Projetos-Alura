#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>
#include <locale.h>
#include "headerforca.h"

//Vari�veis globais:
char palavrasecreta[TAMANHO_PALAVRA];
char chutes[26];
int chutesdados = 0;

void abertura()
{
    printf ("***************************\n");
    printf ("*      Jogo da forca      *\n");
    printf ("***************************\n\n");
}

void chuta()    // "*" recebe o endere�o de mem�ria da vari�vel.
{                                               // OBS: a vari�vel "chutesdados" da fun��o n�o � a mesma da criada fora dela, mesmo tendo nomes iguais.
    char chute;
    printf (" Chute: ");
    scanf (" %c", &chute);      // O "espa�o" no come�o do scanf faz o programa n�o reconhecer o "enter" como um char.
    fflush (stdin);
    printf ("\n");

    chutes[chutesdados] = chute;     //Vari�vel "chutes" recebe o chute da tentativa atual.
    (chutesdados)++;                //O "*" informa o valor do ponteiro, ou seja, o valor do endere�o de mem�ria em que a vari�vel est� apontando.
}

int jachutou (char letra)
{
    int achou = 0;

    for (int j =0; j<(chutesdados); j++)       //Procura pela posi��o da letra digitada, se achar "achou = 1"
    {
        if (chutes[j] == letra) 
        {
            achou = 1;
            break;
        }
    }

    return achou;
}

void imprime ()
{
    int erros = chuteserrados();

    printf("  _______         \n");
    printf(" |/      |        \n");
    printf(" |      %c%c%c    \n", (erros >= 1 ? '(' : ' '), (erros >= 1 ? '_' : ' '), (erros >= 1 ? ')' : ' '));   //Comando "if tern�rios". (<condi��o> ? <if=sim> : <if=n�o>)
    printf(" |      %c%c%c    \n", (erros >= 2 ? '\\': ' '), (erros >= 2 ? '|' : ' '),(erros >= 2 ? '/' : ' '));
    printf(" |       %c       \n", (erros >=3 ? '|' : ' '));
    printf(" |      %c %c     \n", (erros >=4 ? '/' : ' '), (erros >=4 ? '\\' : ' '));
    printf(" |                \n");
    printf("_|___             \n");
    printf("\n\n");

    for (int i=0; i < strlen(palavrasecreta); i++)      //Repete os c�digos abaixo pelo n�mero de caracteres na palavra secreta.
    {
        int achou = jachutou (palavrasecreta[i]);
        
        if (achou == 1)     // se achou a letra, ent�o imprime a letra. Se n�o achou, ent�o imprime "_".
        {
            printf (" %c", palavrasecreta[i]);
        } else 
        {
            printf (" _");
        }
    }
    printf ("\n");
}

void adicionapalavra ()
{
    char quer;

    printf ("\n\n Voc� deseja adicionar uma nova palavra no jogo? (S/N)\n");
    printf (" ");
    scanf (" %c", &quer);
    fflush (stdin);

    if (quer == 'S' || quer == 's')
    {
        char novapalavra[TAMANHO_PALAVRA];

        printf ("\n Qual a nova palavra?\n");
        printf (" ");
        scanf ("%s", novapalavra);
        fflush (stdin);

        FILE* f;

        f = fopen ("palavras.txt", "r+");   // "r+"= abertura para leitura e escrita.
        if (f==0)
        {
            printf (" Desculpe, banco de dados n�o disponivel\n\n");
            perror("Error");
            exit (1);
        }

        int qtd;
        fscanf (f, "%i", &qtd);
        qtd++;

        fseek (f, 0, SEEK_SET);     //fseek --> posiciona nosso "cursor" onde queremos. fseek (<arquivo>, <posi��o>, <refer�ncia_posi��o>);
        fprintf (f, "%i", qtd);

        fseek (f, 0, SEEK_END);
        fprintf (f, "\n%s", novapalavra);

        fclose (f);
    }
}

void escolhepalavra ()      //C�digos obtidos do <time.h> (time) e do <stdlib.h> (rand e srand)
{
    FILE* f;    //Cria uma vari�vel do tipo "arquivo". Deve-se usar o "*", pois arquivos sempre recebem um ponteiro.

    f = fopen ("palavras.txt", "r");    //"fopen" abre um arquivo e retorna seu ponteiro. fopen ("nome do arquivo", "o que far� com o arquivo") "r"=read.
    if (f==0)
    {
        printf (" Desculpe, banco de dados n�o disponivel\n\n");
        perror("Error");
        exit (1);
    }

    int qtddepalavras;
    fscanf (f, "%i", &qtddepalavras);       //"fscanf" l� os dados de um arquivo. fscanf (<arquivo>, "<tipo_vari�vel>", &<vari�vel>);

    srand(time(0));                         //Escolhe uma linha do arquivo de forma aleat�ria.
    int randomico = rand() % qtddepalavras; //"randomico" recebe um n�mero aleat�rio entre 0 e qtddepalavras.

    for (int i=0;i<=randomico;i++)
    {
        fscanf (f, "%s", palavrasecreta);
    }

    fclose(f);
}

int acertou ()
{
    for (int i=0;i<strlen(palavrasecreta);i++)
    {
        if (!jachutou(palavrasecreta[i]))
        {
            return 0;
        }
    }

    return 1;
}

int chuteserrados()
{
    int erros = 0;

    for (int i=0;i<chutesdados;i++)
    {
        int existe = 0;
        for (int j=0;j<strlen(palavrasecreta);j++)
        {
            if (chutes[i] == palavrasecreta[j])
            {
                existe = 1;
                break;
            }
        }

        if (!existe) erros++;       //"!existe" = "existe==0". Como se trata de verdadeiro ou falso, o "!", toma a vari�vel como falso. 0=falso; 1=verdadeiro.
    }

    return erros;
}

int enforcou ()
{
    return chuteserrados()>=5;
}

int main()
{
    setlocale(LC_ALL, "Portuguese_Brazil");

    escolhepalavra ();

    abertura();

    do {

        imprime ();

        chuta ();     //"&" passa o endere�o de mem�ria da vari�vel "chutesdados".

    } while(!acertou() && !enforcou());      //"&&"= condi��o "e". "!"= em uma condi��o de v ou f, em que v=0 e f=1, o "!" inverte esses valores. 

    if (acertou())
    {
        printf("\n Parab�ns, voc� ganhou!\n\n");

        printf("       ___________      \n");
        printf("      '._==_==_=_.'     \n");
        printf("      .-\\:      /-.    \n");
        printf("     | (|:.     |) |    \n");
        printf("      '-|:.     |-'     \n");
        printf("        \\::.    /      \n");
        printf("         '::. .'        \n");
        printf("           ) (          \n");
        printf("         _.' '._        \n");
        printf("        '-------'       \n\n");
    } else
    {
        printf("\n Puxa, voc� foi enforcado!\n");
        printf(" A palavra era **%s**\n\n", palavrasecreta);

        printf("    _______________         \n");
        printf("   /               \\       \n"); 
        printf("  /                 \\      \n");
        printf("//                   \\/\\  \n");
        printf("\\|   XXXX     XXXX   | /   \n");
        printf(" |   XXXX     XXXX   |/     \n");
        printf(" |   XXX       XXX   |      \n");
        printf(" |                   |      \n");
        printf(" \\__      XXX      __/     \n");
        printf("   |\\     XXX     /|       \n");
        printf("   | |           | |        \n");
        printf("   | I I I I I I I |        \n");
        printf("   |  I I I I I I  |        \n");
        printf("   \\_             _/       \n");
        printf("     \\_         _/         \n");
        printf("       \\_______/           \n");
    }

    adicionapalavra ();
}