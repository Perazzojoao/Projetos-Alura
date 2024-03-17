#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    setlocale (LC_ALL, "portuguese_Brazil");

    printf ("------------------CALCULADORA VIRTUAL---------------------\n\n");

    printf (" Operações permitidas:\n -Soma (+)\n -Subtração (-)\n -Multiplicação (*)\n -Divisão (/)\n\n");

    float x1, x2;
    char y;
    float z;
    int i;

    printf (" Digite um número: ");
    scanf ("%f", &x1);

    printf ("\n Operação: ");
    scanf ("%c", &y);

    int yn;

    if ( y == "+")
    {
        yn = 1;
    }
    if ( y == "-")
    {
        yn = 2;
    }
    if ( y == "*")
    {
        yn = 3;
    }
    if ( y == "/")
    {
        yn = 4;
    }
    
    switch (yn)
    {
    case 1:
        z = x1 + x2;
        break;

    case 2:
        z = x1 + x2;
        break;

     case 3:
         z = x1 + x2;
        break;

    case 4:
        z = x1 + x2;
        break;
        
    default:
        printf ("Operação não reconhecida!");
        break;
    }

    printf ("\n\n Resultado: %.2f", z);
     




    return 0;
}