#include <iostream>
#include <string>
#include <vector>
#include <map>
#include "letra_existe.hpp"
#include "chuta.hpp"

using namespace std;

extern map <char, bool> chutou;
extern vector<char> chutes_errados;

void chuta(){
    cout << "Seu chute: ";
    char chute;
    cin >> chute;

    chutou[chute] = true;

    if(letra_existe(chute)){
        cout << "Voc� acertou! Seu chute est� na palavra." << endl;
    }
    else{
        cout << "Voc� errou! Seu chute n�o est� na palavra." << endl;
        chutes_errados.push_back(chute);
    }
    cout << endl;
}