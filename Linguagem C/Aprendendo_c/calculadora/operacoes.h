#include <stdio.h>
#include <math.h>
#include <string.h>

float r=0;

float operacao (float xr, float yr, char yi)
{
    switch (yi)
    {
    case '+':
        r = xr + yr;
        break;
    
    case '-':
        r = xr - yr;
        break;

    case '*':
        r = xr * yr;
        break;

    case '/':
        r = xr / yr;
        break;

    case '=':
        break;

    default:
        puts ("\n Operação inexistente! Tente novamente.\n");
        break;
    }

    return r;
}

