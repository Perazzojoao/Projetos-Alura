#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    setlocale (LC_ALL, "portuguese_Brazil");

    printf ("------------------CALCULADORA VIRTUAL---------------------\n\n");

    printf (" Opera��es permitidas:\n -Soma (+)\n -Subtra��o (-)\n -Multiplica��o (*)\n -Divis�o (/)\n\n");

    float x1, x2;
    char y;
    float z;
    int i;

    printf (" Digite um n�mero: ");
    scanf ("%f", &x1);

    printf ("\n Opera��o: ");
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
        printf ("Opera��o n�o reconhecida!");
        break;
    }

    printf ("\n\n Resultado: %.2f", z);
     




    return 0;
}