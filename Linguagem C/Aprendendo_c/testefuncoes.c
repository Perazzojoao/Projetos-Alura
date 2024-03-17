#include <stdio.h>

float maior (float num1, float num2)
{
    if (num1>num2)
    {
        return num1;
    }
    else 
    {
        return num2;
    }
}

//Ex vetor 1:
void imprime1 (int v[], int n)
{
    int i;
    for (i=0;i<n;i++)
    {
        printf ("%i ", v[i]);
    }
}

//Ex vetor 2:
void imprime2 (int v[5])
{
    int i;
    for (i=0;i<5;i++)
    {
        printf ("%i ", v[i]);
    }
}

//Ex vetor 3:
void imprime3 (int *v, int n)
{
    int i;
    for (i=0;i<n;i++)
    {
        printf ("%i ", v[i]);
    }
}


//Exemplo maatriz:
void imprime4 (int m [] [4], int n2)
    {
        int i,j;
        for (i=0;i<n2;i++)
        {
            for (j=0;j<4;j++)
            {
                printf ("%i ", m [i] [j]);
            }
            printf ("\n");
        }
    }


//Exemplo definindo funções após o "int main(){...}"
float maior2 (float num3, float num4);

int main ()
{
    /*
    float x, y, z;

    printf ("\n\n Insira um valor:\n");
    scanf ("%f", &x);
    printf ("\n Insira um segundo valor:\n");
    scanf ("%f", &y);

    z = maior (x, y);

    printf ("maior: %f\n\n\n", z);
*/


//Exemplos vetores:
    int vet [5] = {1,2,3,4,5};

    puts (" Primeiro imprime:");
    imprime1 (vet, 5);

    puts ("\n Segundo imprime:");
    imprime2 (vet);

    puts ("\n Terceiro imprime:");
    imprime3 (vet, 5);


//Exemplo matriz:
    int matriz [3][4]= {{1,2,3,4}, {50,60,70,80}, {91,101,111,121}};

    puts ("\n\n Impreção da matriz:");
    imprime4 (matriz, 3);


    float x2, y2, z2;

    printf ("\n\n Insira um valor:\n");
    scanf ("%f", &x2);
    printf ("\n\n Insira mais um valor:\n");
    scanf ("%f", &y2);

    z2 = maior2 (x2,y2);

    printf ("Maior: %.2f", z2);

    return 0;
}

float maior2 (float num3, float num4)     //A função deve ficar de fora da função principal "int main(){}"
{
    if (num3>num4)
    {
        return num3;
    }
    else 
    {
        return num4;
    }
}