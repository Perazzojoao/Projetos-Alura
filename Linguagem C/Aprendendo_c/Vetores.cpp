#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
setlocale (LC_ALL, "portuguese_Brazil");

printf ("--------------------------TENTATIVA DE TRABALHAR COM VETORES-----------------------\n\n");

printf ("----Primeira tentativa---- \n");
int i[8] = {8,7,6,5,4,3,2,1};
int t;
float r=0;

for (t=0; t<8; t++)
{
    r += i[t];
    printf (" r= %.f;", r);
}

printf ("\n\n Somatorio= %.f\n\n\n", r);


printf ("----Segunda tentativa----\n");
int x [7];
int y;
float z=0;

for (y=0; y<7; y++)
{
    printf (" Digite um número: ");
    scanf (" %i", &x[y]);
    z += x[y];
    printf ("\n Somatório dos valores informador: %.2f\n\n", z);
}

printf ("\n Somatório: %.2f\n", z);




}