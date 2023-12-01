#ifndef _MAPA_H_
#define _MAPA_H_

#define HEROI '@'
#define FANTASMA 'F'
#define VAZIO '.'
#define PAREDE_VERTICAL '|'
#define PAREDE_HORIZONTAL '-'
#define PILULA 'p'

struct mapa
{
    char** matriz;            //"**" cria um "ponteiro de ponteiro". Uma matriz é um ponteiro que aponta para um conjunto de ponteiros (as linhas) que apontam para cada coluna (as variáveis).
    int linhas, colunas;
};

typedef struct mapa MAPA;

struct posicao
{
    int x, y;
};

typedef struct posicao POSICAO;

void liberamapa(MAPA* m);
void lemapa(MAPA* m);
void alocamapa(MAPA* m);
int encontramapa (MAPA* m, POSICAO* p, char c);
int ehvalida(MAPA* m, int x, int y);
int ehvazia(MAPA* m, int x, int y);
void andandonomapa (MAPA* m, int xorigem, int yorigem, int xdestino, int ydestino);
void copiamapa(MAPA* destino, MAPA* origem);
int podeandar (MAPA* m, int x, int y);
int ehparede (MAPA* m, int x, int y);
int ehpersonagem (MAPA* m, char personagem, int x, int y);

#endif