#include <iostream>
#include <fstream>
#include "salva_arquivo.hpp"

using namespace std;

void salva_arquivo(vector<string> nova_lista){
    ofstream arquivo;
    arquivo.open("palavras.txt");
    if(arquivo.is_open()){
        arquivo << nova_lista.size() << endl;

        for(string palavra : nova_lista){
            arquivo << palavra << endl;
        }
        arquivo.close();
    }
    else{
        cout << "Não foi possível acessar o banco de palavras." << endl;
        exit(0);
    }
}