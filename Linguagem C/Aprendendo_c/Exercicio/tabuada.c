#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "portuguese_Brazil");

    int i, j, a;

    printf (" Tabuada do 1 ao 10:\n\n");

    for (i=1;i<=10;i++)
    {
        for (j=1;j<=10;j++)
        {
            a = i * j;
            printf (" %i x %i = %i\n", i, j, a);

        }
        printf ("\n");

    }
}