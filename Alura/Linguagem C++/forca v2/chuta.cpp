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
        cout << "Você acertou! Seu chute está na palavra." << endl;
    }
    else{
        cout << "Você errou! Seu chute não está na palavra." << endl;
        chutes_errados.push_back(chute);
    }
    cout << endl;
}