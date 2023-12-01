#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "mapa.h"

// extern MAPA m;   --> Informa ao compilador que esta é uma variável externa, ou seja, uma variável declarada em outro arquivo que será reutilizado por este.

void copiamapa(MAPA* destino, MAPA* origem)
{
    destino->linhas = origem->linhas;
    destino->colunas = origem->colunas;

    alocamapa(destino);
    for (int i=0; i<origem->linhas; i++)
    {
        strcpy (destino->matriz[i], origem->matriz[i]);
    }
}

void andandonomapa (MAPA* m, int xorigem, int yorigem, int xdestino, int ydestino)
{
    char personagem = m->matriz [xorigem] [yorigem];
    m->matriz [xdestino] [ydestino] = personagem;
    m->matriz [xorigem] [yorigem] = VAZIO;
}

int ehvalida(MAPA* m, int x, int y)
{
    if (x>=m->linhas)
        return 0;

    if (y>=m->colunas)
    { 
        return 0;
    }

        return 1;
}

int ehvazia(MAPA* m, int x, int y)
{
    return m->matriz [x][y] == VAZIO;
}

int encontramapa (MAPA* m, POSICAO* p, char c)
{
    //Acha a posição do foge foge.
    for (int i=0;i<m->linhas;i++)
    {
        for (int j=0;j<m->colunas;j++)
        {
            if (m->matriz[i][j] == c)
            {
                p->x=i;
                p->y=j;
                return 1;
            }
        }
    }
    return 0;
}

int ehparede (MAPA* m, int x, int y)
{
    return m->matriz[x][y] == PAREDE_VERTICAL ||
        m->matriz[x][y] == PAREDE_HORIZONTAL;
}

int ehpersonagem (MAPA* m, char personagem, int x, int y)
{
    return m->matriz[x][y] == personagem;
}

int podeandar (MAPA* m, int x, int y)
{
    return
        ehvalida(m, x, y) &&
        !ehparede(m, x, y) &&
        !ehpersonagem(m, FANTASMA, x, y);
}

void liberamapa(MAPA* m)            //OBS: Para usar um ponteiro de uma struct, use a " * ". Para obter o valor do ponteiro, use , por exmplo, (*m).linhas ou m->linhas
{
    //Limpando a memória alocada
    for (int i=0;i<m->linhas;i++)      //Sempre que alocamos memória manualmente precisamos limpá-la ao final. UM "free" para cada "malloc" utilizado.
    {
        free (m->matriz[i]);             //Limpa a memória de cada linha da matriz "mapa"
    }
    free (m->matriz);                    //Limpa a memória da matriz mapa.
}

void alocamapa(MAPA* m)
{
     //Alocação de memória dinâmica
    m->matriz = malloc(sizeof(char*) * (m->linhas));      //"malloc" aloca uma quantidade de bytes definida manualmente. sintaxe: malloc (<quantidade_bytes>);
    for(int i=0;i<5;i++)                        //"sizeof" mede a quantidade de bytes de algo. Ex: sizeof(int); --> mede quantos bytes tem em um int.
    {
        m->matriz[i] = malloc(sizeof(char) * ((m->colunas)+1));   //O "+1" é necessário pala alocar o "\0" ao final de uma string.
    }
    //////////////////////////////
}

void lemapa(MAPA* m)
{
    FILE* f;

    f = fopen ("mapa.txt", "r");
    if (f == NULL)
    {
        printf (" Mapa não encontrado.\n");
        perror (" error");
        exit (1);
    }

    fscanf (f, "%i %i", &(m->linhas), &(m->colunas));

    alocamapa(m);

    for (int i=0;i<m->linhas;i++)
    {
        fscanf (f, "%s", m->matriz [i]);
    }

    fclose (f);
}