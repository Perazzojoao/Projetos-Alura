#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

#define smin 1370

int main()
{
    setlocale (LC_ALL, "portuguese_Brazil");

    int h;
    int i=0.3;
    float vh;
    float sb, sl;

    printf ("\n Salário total a receber\n\n");

    printf (" Horas trabalhadas:\n");
    printf (" ");
    scanf ("%i", &h);
    fflush (stdin);

    vh = smin/2;
    sb = h * vh;
    sl = sb * (1-i);

    printf ("\n Salário a receber:\n");
    printf (" %.2f", sl);

}