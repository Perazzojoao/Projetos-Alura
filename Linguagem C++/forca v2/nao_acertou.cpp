#include <string>
#include <map>
#include "nao_acertou.hpp"

using namespace std;

extern string palavra_secreta; 
extern map<char, bool> chutou;

bool nao_acertou(){
    for(char letra : palavra_secreta){
        if(!chutou[letra]){
            return true;
        }
    }
    return false;
}