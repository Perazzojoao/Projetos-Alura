#include <stdio.h>
#include "poligonos.h"

float calcPerimetroTriangulo (float a, float b, float c)
{
    return a+b+c;
}

float calcPerimetroRetangulo (float b, float a)
{
    return (a+b)*2;
}

float calcPerimetroCirculo (float r)
{
    return 2*PI*r;
}

float calcAreaTriangulo (float b, float a)
{
    return (b*a)/2;
}

float calcAreaRetangulo (float b, float a)
{
    return b*a;
}

float calcAreaCirculo (float r)
{
    return PI*r*r;
}