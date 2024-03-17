#pragma once // Informa ao compilador para s? compilar uma vez o arquivo. Evita repeti??es de c?digo.

#include <iostream> //Biblioteca padr?o de input e output do C++
#include <cstdlib>  //Biblioteca "stdlib.h" aprimorada para a linguagem C++
#include <ctime>
#include <string.h> //Biblioteca para manipular strings din?micos.
#include <array>    //Biblioteca para vetores est?ticos. --> Melhor desempenho para o processador.
#include <vector>   //Biblioteca para manipular vetores din?micos.
#include <map>      //Biblioteca para manipular mapas (Dicion?rio).
#include <fstream>  //Biblioteca para manipular arquivos externos.
#include <locale.h>

using namespace std; // Diz para o compiador que estaremos usando v?rias fun??es do "std". Assim n?o precisamos mais digitar "std::" antes das fun??es.

int main()
{
    setlocale(LC_ALL, "portuguese");
    /*
    //Pra escrever uma fun??o padr?o da biblioteca do C++ utilize "std::" (standard) antes da fun??o. Se utilizado "using namespace std;" n?o precisa mais!

        //Imprimir na tela: "cout <<" (c + output)
        //Fun??o "cout" (c out) --> gera um output no programa. Qualquer coisa escrita entre par?nteses (" ") nesta fun??o ? impressa na tela.
        std::cout << "Hello World!" << std::endl;

        cout << "Hello World!\n" << endl;     //"using namespace std;" retira a necessidade de sempre digitar "std::" antes de uma fun??o padr?o.

    //Tipos de vari?veis:
        int N_inteiro = 5;
        float N_decimal1 = 2.5;         //Precis?o de 6 casas decimais.
        double N_decimal2 = 2.5;        //Precis?o de 10 casas decimais.
        char Caracter_unico = 'B';

        //Novos tipos (c++):
        string caracter_multiplos = "Receba!";
        bool verdadeiro = true;
        bool falso = false;

        const int constante = 10;       //"const" faz a vari?vel virar uma constante. Trava o valor da vari?vel.


    //Formata??o de impress?o:
        //Sintaxe: <cout.precision(quant_n?meros_totais)>
        double a = 781.45678;

        cout << a << endl;              //Imprime: "781.457". O <cout>, por padr?o, insere 6 n?meros ao todo e arredonda o n?mero.

        cout.precision(8);              //Formata o <cout> para imprimir at? 8 n?meros.
        cout << a << endl;
        cout << endl;

        float b = 781.45678;

        cout.precision(2);
        cout << fixed;                  //"Fixed" --> fixa o "." na mesma posi??o.
        cout << b << endl;              //Dessa forma o ".precision" apenas formata a quantidade de casas decimais!
        cout << endl;

    //  cout << b << endl;  --> Imprime: 781.46 (arredondamento autom?tico!)


    //Ler dados do teclado: "cin >>" (c + input)
        int in;
        cout << "Digite um valor: ";
        cin >> in;

        cout << endl;
        cout << in << endl;
        cout << "Dessa forma podemos imprimir o " << in << " no meio de uma fraze" << endl;
    */
    /*
    //Strings:

        //Em C++, n?o precisamos definir a quantidade de caracteres de uma string. As strings s?o din?micas!
        string palavra;
        cout << "Digite uma palavra: ";
        cin >> palavra;

        cout << palavra << endl;
        cout << endl;

        //Manipula??o de strings:
            // <string_de_destino>.assign(string_de_origem); --> Equivalente ao "strcpy()". Atribuir o valor de uma <string> em outra.
            string origem1 = "Ol?, mundo";
            string destino1 = "Nada por aqui!";

            cout << "Antes do .assign:" << endl;
            cout << origem1 << endl;
            cout << destino1 << endl;
            cout << endl;

            cout << "Depois do .assign:" << endl;
            destino1.assign(origem1);

            cout << origem1 << endl;
            cout << destino1 << endl;       //Imprime: "Ol?, mundo"
            cout << endl;

            //<string_de_destino>.append(string_de_origem); --> Equivalente ao "strcat()". Adiciona o valor de uma string ao final de outra.
            string origem2 = "Ol?, mundo";
            string destino2 = "Nada por aqui!";

            cout << "Antes do .append:" << endl;
            cout << origem2 << endl;
            cout << destino2 << endl;
            cout << endl;

            cout << "Depois do .append:" << endl;
            destino2.append(origem2);

            cout << origem2 << endl;
            cout << destino2 << endl;       //Imprime: "Nada por aqui!Ol? mundo".
            cout << endl;

            //<string_de_destino>.insert(<local>, <string>); --> Adiciona a string na posi??o indicada.
            string origem3 = "Ol?, mundo";
            string destino3 = "Nada por aqui!";

            cout << "Antes do .insert:" << endl;
            cout << origem3 << endl;
            cout << destino3 << endl;
            cout << endl;

            cout << "Depois do .insert:" << endl;
            destino3.insert(5,origem3);

            cout << origem3 << endl;
            cout << destino3 << endl;       //Imprime: "Nada Ol?, Mundopor aqui".
            cout << endl;

            //<string>.size(); --> Equivalente ao "strlen()". Informa o tamanho de uma <string> (Quantidade de caracteres).
            int n_caracteres;
            string str = "Quant. de caracteres";     //N? de caracteres: 20
            n_caracteres = str.size();

            cout << "N? de caracteres: " << n_caracteres << endl;   //Imprime: "N? de caracteres: 20"

            //<string_comparada>.compare(string_de_origem); --> Equivalente ao "strcmp()". Informa se a <string1> ? exatamente igual a <string2>. Se sim, retorna o valor "0".
            string hard_text = "/exit";
            string senha_usr;
            int ok;

            cout << "Digite a senha: ";
            cin >> senha_usr;
            cout << endl;

            ok = hard_text.compare(senha_usr);  //Verdadeiro: retorna 0;    Falso: retorna 1.

            if (ok==0)
            {
                cout << "Senha correta!" << endl;
            }
            else
            {
                cout << "Senha incorreta! Tente novamente." << endl;
            }
    */
    /*
    //"for" aprimorado:
        //Varrendo um vetor usanado o "for" comum:
        char chute;
        bool correto=false;
        string palavra = "macarr?o";

        cout << "Chute uma letra da palavra secreta: ";
        cin >> chute;
        cout << endl;

        for (int i=0;i<palavra.size();i++)
        {
            if (chute == palavra[i])
            {
                cout << "A letra " << chute << " est? contida na palavra secreta!" << endl;
                correto=true;
            }

        }

        if (correto==false)
        {
            cout << "A letra " << chute << " n?o faz parte da palavra secreta" << endl;
        }
        cout << endl;

        //Comando "for" aprimorado:
        char chute2;
        bool correto2=false;
        string palavra2 = "macarr?o";

        cout << "Chute uma letra da palavra secreta: ";
        cin >> chute2;
        cout << endl;

        for (char letra : palavra2)         //<letra> recebe o valor de cada caractere da string durante o loop. O loop termina automaticamente ao final do vetor ou string.
        {
            if (chute2 == letra)
            {
                cout << "A letra " << chute2 << " est? contida na palavra secreta!" << endl;
                correto2=true;
            }

        }

        if (!correto2)      //O "!" sempre retorna "false" em uma vari?vel do tipo bool. Combinado com o "if", o bloco de comandos so ? executado se a condi??o retornar "true".
        {
            cout << "A letra " << chute2 << " n?o faz parte da palavra secreta" << endl;
        }
    */

    // Vetores est?ticos (vers?o do c++ para os vetores do c): Biblioteca <array> --> Melhor desempenho para o processador comparado ao <vector>
    // Sintaxe de declara??o: array <tipo_vari?vel, espa?os_mem?ria>

    // Funciona exatamente igual aos vetores est?ticos da linguagem C.

    // Vetores din?micos: Biblioteca <vector>
    // Sintaxe de declara??o: vector <tipo_vari?vel> "nome_vari?vel";
    vector<string> palavras = {"melancia", "abacaxi", "morango"};

    for (string palavraN : palavras)
    {
        cout << palavraN << " "; // Imprime: "melancia abacaxi morango".
    }
    cout << endl;
    cout << endl;

    // Sintaxe de manipula??o
    //".push_back(<vari?vel_or?gem>)" --> Adiciona um novo valor ao final do vetor.
    string mais_frutas = "manga.";

    palavras.push_back(mais_frutas);
    for (string palavraN : palavras)
    {
        cout << palavraN << " "; // Imprime: "melancia abacaxi morango manga".
    }
    cout << endl;
    cout << endl;

    //".pop_back()" --> Exclui o ?ltimo valor to vector.
    palavras.pop_back();
    for (string palavraN : palavras)
    {
        cout << palavraN << " "; // Imprime: "melancia abacaxi morango".
    }
    cout << endl;
    cout << endl;

    //".at(<posi??o>)" --> Seleciona o valor da posi??o desejada.
    string posicao = palavras.at(1); //"palavras[1];" faz a mesma coisa!

    cout << posicao << endl; // Imprime: "abacaxi".

    // Biblioteca <map>:
    //"map" s?o vetores din?micos  que permitem dar um tipo diferente de "int" ? posi??o de cada valor. Podemos associar um tipo de vari?vel ? um valor de outro tipo.
    // Sintaxe de declara??o: map <tipo_chave, tipo_valor_da_chave> "nome_vari?vel";
    map<string, int> idades;

    idades["Jo?o"] = 22;  // No ?ndice "Jo?o" o valor ? 22.
    idades["Maria"] = 30; // No ?ndice "Maria" o valor ? 30.

    cout << "Jo?o tem " << idades["Jo?o"] << " anos" << endl;
    cout << "Maria tem " << idades["Maria"] << " anos" << endl;
    cout << endl;
    cout << idades.size() << endl;
    cout << endl;

    //".emplace" --> Adiciona um novo par de vari?veis ao "map", por padr?o, no COME?O da sequ?ncia de pares.
    idades.emplace("Ant?nio", 16);
    for (auto &x : idades) //       --> Forma de varrer um "map".
    {
        cout << x.first << " tem " << x.second << " anos" << endl;
    }
    cout << idades.size() << endl;
    cout << endl;

    //".emplace_hint" --> Adiciona um novo par de vari?veis ao "map" no local indicado.     .emplace_hint(<posi??o>, <chave>, <valor_chave>);
    idades.emplace_hint(idades.end(), "M?rio", 10);
    for (auto &x : idades) //       --> Forma de varrer um "map".
    {
        cout << x.first << " tem " << x.second << " anos" << endl;
    }
    cout << idades.size() << endl;
    cout << endl;

    // Iteradores: estabelece a posi??o do cursor.
    //  .begin --> Come?o.
    //  .end --> Final.

    // Biblioteca <fstream>:
    //  ofstream: permite apenas escrever no arquivo (output);
    //  ifstream: permite apenas ler de um arquivo (input);
    //  fstream: permite tanto ler quanto escrever em um arquivo.

    // Sintaxe de delara??o:
    /*  fstream <nome_vari?vel>;
        <nome_vari?vel>.open("<nome_arquivo>");
        .
        .
        .
        <nome_vari?vel>.close();
    */

    // input:
    /*   ifstream arquivo;
         arquivo.open("nome.txt");

         if (arquivo.fail())         --> Boas pr?ticas: saber se o arquivo foi aberto corretamente.
         {
             cout << "Arquivo indispon?vel!" << endl;
             perror ("Error");
             exit(1);
         }

         vector <string> palavras_arquivo;
         for (int i=0; i<=arquivo.size(); i++)
         {
             string palavra_lida;
             arquivo >> palavra_lida;    --> Dentro do loop, arquivo vai mandar sua primeira linha para "palavras".

             palavras_arquivo.push_back(palavra_lida);   --> Salvando o conte?do do arquivo em um vector.
         }

         arquivo.close();        --> Sempre fechar um arquivo depois de aberto.
    */

    // output:
    /*    ofstream arquivo;
          arquivo.open("nome.txt");

          vector <string> novas_palavras = {"M?rio", "Rog?rio", "Maria"};
          for (string palavra : novas_palavras)
          {
              arquivo << palavra << endl; --> Envia uma nova palavra da vari?vel "novas_palavras" e pula uma linha.
          }

          arquivo.close();
    */

    // Namespace: criar fun??es pr?prias
    // Sintaxe de declara??o: arquivos .hpp
    /*
        namespace <nome>
        {
            fun??o();
        }
    */
    // Sintaxe de acesso:
    //  nome::fun??o();

    // ? poss?vel renomear um namespace: namespace <novo_nome> = <nome>
    // EX: namespace a = Forca;
    //     a::fun??o();

    // Alocando mem?ria na heap: Utilizar a heap pode ser custoso para o processador. Utilize apenas para alocar grandes quantidades de mem?ria.
    //"heap" -> ? uma forma de compartilhar um endere?o de mem?ria com outra vari?vel sem precisar ficar criando novos espa?os.
    // Sintaxe de declara??o: <ponteiro> <nome_ponteiro> = new (espa?o_em_bytes);

    // EX: int* p = new int;  --> Alocando o espa?o de um inteiro (4 bytes) no ponteiro "p"

    // Liberando mem?ria --> delete <nome_ponteiro>; (Utilizar o nome do ?ltimo ponteiro a utilizar a heap).

    // OBS: O "vector", vetor din?mico, aloca seu espa?o na heap. Para melhorar o desempenho do programa podemos utilizar o "array" do c++ (vetor est?tico na vers?o c++).
}