#include <stdio.h>
#include <math.h>
#include <locale.h>
#include "operacoes.h"

char y[6] = {"+-*/="};
char c;
float x1;
float x2;

int i;
int n=1;

int main()
{
    setlocale (LC_ALL, "Portuguese_Brazil");

    printf ("\n------------ Mini calculadora ------------\n");
    puts ("Opera��es dispon�veis:\n");

    puts ("-Soma (+)");
    puts ("-Subtra��o (-)");
    puts ("-Multiplica��o (*)");
    puts ("-Divis�o (/)\n");

    printf ("------------------------------------------\n");

    for (i=0;n!=0;i++)
    {
        if (r==0)
        {
            puts (" Digite um n�mero:");
            printf (" ");
            scanf ("%f", &x1);
            fflush (stdin);
        }
        else
        {
            printf ("\n RESULTADO: %.2f\n", r);
            x1 = r;
        }

        puts ("\n Opera��o:");
        printf (" ");
        scanf ("%c", &c);
        fflush (stdin);

        if (c == y[4])
        {
            n=0;
        }
        else
        {
            puts ("\n Digite um n�mero:");
            printf (" ");
            scanf ("%f", &x2);
            fflush (stdin);

            operacao (x1, x2, c);
            x1 = 0;
        }
    }

        puts ("\n\n RESULTADO FINAL:");
        printf (" ");
        printf ("%f", r);
    


    return 0;
}