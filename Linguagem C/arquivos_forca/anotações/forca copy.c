#include <stdio.h>
#include <string.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "Portuguese_Brazil");

    char palavrasecreta[20]={"melancia"};

    int acertou = 0;
    int enforcou = 0;

    char chutes[26];
    int tentativa = 0;

    printf ("***************************\n");
    printf ("*      Jogo da forca      *\n");
    printf ("***************************\n\n");

    do {

        for (int i=0;i<strlen(palavrasecreta);i++)
        {
            int achou = 0;

            for (int j=0;j<tentativa;j++)
            {
                if (chutes[j] == palavrasecreta[i])
                {
                    achou = 1;
                    break;
                }
            }

            if (achou == 1)
            {
                printf (" %c", palavrasecreta[i]);
            }
            else
            {
                printf (" _");
            }
        }

        char chute;
        printf ("\n Chute: ");
        scanf (" %c", &chute);
        fflush (stdin);

        chutes[tentativa] = chute;
        tentativa++;


    }while (!acertou && !enforcou);

}