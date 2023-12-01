#include <string>
#include "letra_existe.hpp"

using namespace std;

extern string palavra_secreta;

bool letra_existe(char chute){
    for(char letra : palavra_secreta){
        if(chute == letra){
            return true;
        }
    }
    return false;
}