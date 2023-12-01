#include <iostream>
#include <string>
#include <map>
#include "imprime_palavra.hpp"

using namespace std;

extern string palavra_secreta; 
extern map<char, bool> chutou;

void imprime_palavra(){
    for(char letra : palavra_secreta){
        if(chutou[letra]){
            cout << letra << " ";
        }
        else{
            cout << "_ ";
        }
    }
    cout << endl;
}