#include <stdio.h>

void soma (int a, int b, int* r)
{
    (*r) = a + b;
}

int main()
{
    int a = 2;
    int b = 7;
    int r;

    soma(a, b, &r);

    printf (" %i + %i = %i", a, b, r);

    return 0;
}
