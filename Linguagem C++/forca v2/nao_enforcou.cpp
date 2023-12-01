#include <string>
#include <vector>
#include "nao_enforcou.hpp"

using namespace std;

extern vector<char> chutes_errados;

bool nao_enforcou(){
    return chutes_errados.size() < 5;
}