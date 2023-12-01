#include <string>
#include <vector>
#include <ctime>
#include "le_arquivo.hpp"
#include "sorteia_palavra.hpp"

using namespace std;

extern string palavra_secreta;

void sorteia_palavra(){
    vector<string> palavras = le_arquivo();

    srand(time(NULL));
    int indice_sorteado = rand() % palavras.size();

    palavra_secreta = palavras[indice_sorteado];
}