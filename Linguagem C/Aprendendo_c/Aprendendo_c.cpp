#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <locale.h> // Biblioteca para reconhecer acentua??o portuguesa!

int main(int argc, char const *argv[])
{
    setlocale(LC_ALL,"portuguese_Brazil"); // Setar a regi?o da biblioteca locale.h para o Brasil.
/*
    printf("Mensagem 1\n");
    printf("Mensagem 2\n");
    printf("Mensagem 3\n");
    printf("Mensagem 4\n");
    printf("Mensagem 5\n\n");
    

    printf("  -Diferentes formas de imprimir caracteres.\n\n");

    printf(" Valor inteiro: %d.\n", 10);

    printf(" Valor real: %f.\n", 3.14159265);

    printf(" Valor real com apenas duas casas: %.2f.\n", 3.14159265);

    printf(" Dado de texto:%c.\n", 'a');

    printf(" Dado de texto: %s.\n\n", "testando");


    int N_inteiro = 5;
    float N_decimal = 2.5;
    char Caracter_unico = 'B';
    char Caracter_multiplo[] = "Receba!"; // Incluir "[]" para declarar frases inteiras como vari?veis.
                                         // OBS: insira um valor em "[]" para informar o n?mero de caracteres m?ximo suportado pela vari?vel.
    
    // Para definir uma constante utilize --> #define nome valor_fixo. Esse valor se mant?m constante.
    #define texto "Valor constante"
                                         
    
    printf ("Vari?vel de n?mero inteiro: %i\n", N_inteiro);
    printf ("Vari?vel de n?mero n?o inteiro: %.2f\n", N_decimal);
    printf ("Caracter ?nico: %c\n", Caracter_unico);
    printf ("Caracteres m?ltiplos: %s\n\n", Caracter_multiplo);
    printf ("Constante informado: %s\n\n", texto);

    float multiplicacao = (float)N_inteiro * N_decimal;

    printf ("Multiplica??o %i * %.2f = %.2f\n\n", N_inteiro, N_decimal, multiplicacao);


    // Inser??o de input por meio do "scanf" --> scanf ("%formato de vari?vel", &vari?vel, ..., &vari?velN);

    int idade;

    printf ("Informe sua idade: ");
    scanf ("%i", &idade);

    printf ("\nIdade informada: %i\n\n", idade);


 Mini calculadora
printf (" MINI CALCULADORA:\n\n");

    // Vari?veis:
    float x, z;
    char y;
    
    printf ("Digite uma opera??o: \n");
    scanf ("%f%c%f\n", &x, &y, &z);

    printf("%.2f %c %.2f", x, y, z);


// Aprendendo opera??es matem?icas:
    int A, B, soma, subtr, mult, divis;

    printf ("Digite o primeiro valor: ");
    scanf ("%i", &A);
    printf ("Digite o segundo valor: ");
    scanf ("%i", &B);
    
    soma = A + B;
    subtr = A - B;
    mult = A * B;
    divis = A / B;

    printf ("\nResultados:\n\n");

    printf ("Soma: %i\n", soma);
    printf ("Subtra??o: %i\n", subtr);
    printf ("Multiplica??o: %i\n", mult);
    printf ("Divis?o: %i\n\n", divis);


// Atribui??es aritm?ticas:
    int dado = 10;
    printf ("\nDado antes do incremento: %i\n", dado    );

    dado++;
    printf ("\nDado ap?s o incremento: %i\n", dado); // "++" = somar em 1 a vari?vel.

    dado--;
    printf ("\nDado depois do decrescimento: %i\n", dado); // "--" = subtrair em 1 a vari?vel.

    dado+=3;
    printf ("\nDado + 3: %i\n", dado); // "+=" = Somar um valor ? vari?vel. Ex: dado=10 --> dado += 2; --> dado = 12.

    dado-=2;
    printf ("\nDado - 2: %i\n", dado); // "-=" = Subtrair um valor da vari?vel. Ex: dado=10 --> dado -= 2; --> dado = 8.

    dado*=10;
    printf ("\nDado * 10: %i\n", dado); // "*=" Multiplica a vari?vel por um valor indicado.

    dado/=10;
    printf ("\nDado / 10: %i\n\n", dado); // "/=" Divide a vari?vel por um valor indicado.


// Estruturas de decis?o simples:
    //if (condi??o) {bloco de comandos}

    float m;

    printf ("Insira a nota: \n");
    scanf ("%f", &m);

    if (m>=7){
        printf ("\nAprovado!\n");
    }
    
    else{
        printf ("\nReprovado!\n");
    }
    
    // Operadores l?gicos:
        // Conjun??o: "e" l?gico --> &&.
        // Disjun??o: "ou" l?gico --> ||.
        // Invers?o: nega??o (n?o l?gico) --> !.

    if (m<7 && m>=4){
        printf ("Aluno tem direito a recupera??o!");
    }

// Estrutura de decis?o m?ltiplas: switch - case --> Utilizado apenas para casos de Sim e N?o. N?o decide com base em <, >, <=...
    /*Sintaxe:
    switch(<var>){
        case <v1>:
                <bloco_de_comandos1>
                break;
        case <v2>:
                <bloco_de_comandos2>
                breack;
        ...
        case <vN>:
                <bloco_de_comandosN>
                breack;
        default:                            --> "default" n?o ? obrigat?rio.
                <bloco_de_comandos_padr?o>      Executado apenas quando o valor da vari?vel n?o se encaixa em nenhum dos casos.
                break;
    }
    

    int d;

    printf("\nInsira um valor de 1 a 7:\n");
    scanf("%i", &d);

    switch (d){
        case 1:
            printf ("Domingo\n");
            break;
        case 2:
            printf("Segunda-Feira\n");
            break;
        case 3:
            printf("Ter?a-Feira\n");
            break;
        case 4:
            printf("Quarta-feira\n");
            break;
        case 5:
            printf("Quinta-feira\n");
            break;
        case 6:
            printf("Sexta-feira\n");
            break;
        case 7:
            printf("Domingo\n");
            break;
        default:
            printf("Valor inv?lido\n");
            break;
    }
*/

    /*La?o condicional: comando While
        sintaxe:
            while (<condi??o>){
                <bloco_de_comandos>
                <condi??o_de_parada>
            }
    */
/*
    int i=1;

    while (i <= 10){
        printf (" %i", i);
        i++;
    }
    
    /*Comando do-while --> Diferen?a: Condi??o avaliada apenas ao final do comando (bloco de comandos ? executado ao menos 1x.)
        sintaxe:
            do{
                <bloco_de_comandos>
            }while(<condi??o>);
    */
/*
    int j=1;

    do{
        printf(" %i", j);
        j++;
    }while(j <= 10);

    printf ("\n Vari?vel termina em: %i\n\n", j); // Note que o valor de "j" = 11, pois o comando ? executado sempre antes da condi??o.


    /*Comando for:
        Sintaxe:
            for (<iniciador>; <condi??o>; <atualiza??o>){
                <bloco_de_comandos>
            }
    */
/*
    int k;  //N?o precisa definir um valor para sua vari?vel com antesced?ncia!

    for ( k = 1; k<=10; k++)  //Faz a mesma coisa que o do-while, por?m com uma sintaxe mais complexa 
    {
        printf(" %i", k);
    }
    
    printf ("\n Vari?vel termina em: %i\n\n", k);  //Assim como no comando do-while, o valor de "k" = 11


    //<break>: Interrompe por completo a execu??o do comando em que est? inserido.
    int l;
    
    for (l=1; l<=10; l++)
    {
        printf (" %i", l);

        if (l==5)
        {
            break;
        }
    }

    printf ("\n Vari?vel termina em: %i\n\n", l);  // l = 5

    //<continue>: Ignora os pr?ximos comandos e pula para o ?ltimo comando do "la?o" (La?o = tudo que est? entre "{}")
    int m;

    for(m=1; m<=10; m++)
    {
        if(m==5)
        {
            continue;
        }

        printf (" %i", m);  // <continue> pula este comando e segue para o ?ltimo, que no caso ? <m++> (Mesmo que houvesse mais comandos, eles seriam pulados)
    }                       // Note que o comando <for> continua, pois o <continue> n?o interrompe por completo o comando, apenas pula para o comando seguinte.
    
    printf ("\n Vari?vel termina em: %i\n\n", m);  // Comando pula o "5" e termina em 10. Valor final de m = 11.


// Vetores (arrays): Aglomerados de vari?veis simples (podem armazenar v?rios dados diferentes em um ?nico vetor).

    // Sintaxe de declara??o: <tipo> <nome> [<tamanho>];

    // Sintaxe de acesso a uma posi??o: <nome> [<local>]

    // Sintaxe lista de inicializa??o (preenche um vetor inteiro, de uma vez s?): <tipo> <nome> [<tamanho>] = {<v1>, <v2>, ..., <vN>};

    int n [5];  // Declara??o de vetor. "[5]" = aloca??o de 5 "locais" na mem?ria.
    float o;

    n [0] = 50;  // Local [0] = 50. --> 1? posi??o.
    n [1] = 40;
    n [2] = 30;
    n [3] = 20;
    n [4] = 10;  // Local [4] = 10. --> 5? posi??o.

    o  = (n[0]+n[1]+n[2]+n[3]+n[4])/5;  // o = (50+40+30+20+10)/5 = 30

    printf (" Resultado: %.f\n\n", o);


    int p [5] = {10,20,30,40,50};  // {Local 0, local 1, local 2, local 3, local 4}
    int q;
    float r=0;

    for (q=0; q<5; q++)  // 1- comando, 2- q++; 3- condicao; 4- comando; 5- q++; 6- condicao;...
    {
        r += p[q];
    }

    printf (" Resultado: %.f\n\n", r/5);  // r = (10+20+30+40+50)/5 = 30


    int s [5];
    int t;

    for (t=0; t<5; t++)
    {
        printf (" Digite um valor: ");
        scanf ("%i", &s[t]);
    }

    printf (" Dados inseridos:\n");
    for (t=0; t<5; t++)
    {
        printf (" %i", s[t]);
    }


// Strings:

    // Scanf:
    // Sintaxe geral: scanf ("%s", <string>); --> N?o reconhece nada ap?s a barra de espa?o. (N?o precisa de "&")
    // Sintaxe aprimorada: scanf ("%<tamanho - 1> [^\n]s", <string>);

    char u[10];  // Utilizar sempre o <tamanho > - 1, pois o ?timo ?ndice sempre vai receber o valor nulo "\0" para determinar o fim da frase.

    printf ("\n\n Digite algo (scanf convencional): ");
    scanf ("%s", u);
    fflush (stdin);  // Apaga o "Lixo de mem?ria" gerado pelo teclado. Importante utilizar sempre ap?s uma entrada de dados!!!

    printf ("\n\n Resultado: %s\n\n", u);


    printf (" Digite algo (scanf aprimorado): ");
    scanf ("%9[^\n]u", u);   // (N?o precisa utilizar "&")  Em "%9[?\n]u" --> o "9" serve para limitar a leitura em 9 caracteres. "[^\n]" = Faz o comando considerar "espa?os".
    fflush (stdin);

    printf ("\n\n Recultado: %s\n\n", u);


    // Entrada de dados --> gets ():
    // Sintaxe: gets (<string>); --> Limita??o: permite a leitura de mais caracteres que o espa?o alocado.

    // Entrada de dados --> fgets ():
    // Sintaxe: fgets (<string>, <tamnho>, stdin); --> ?ltimo caractere semore fica reservado ao valor nulo "\0".      O termo "stdin" significa o "teclado" em lingu?gem de programa??o.

    // Sa?da de dados --> puts ():
    // Sintaxe: puts (<string>); --> Apenas admite vari?veis do tipo string!        OBS: O comando <puts ()> Sempre pula uma linha por s? s?.
    char v[10];

    printf (" Digite algo (leitura feita por <gets>): ");
    gets (v);
    fflush (stdin);

    puts ("\n\n Resultado:");
    puts (v);
    puts ("");      //  Serve para pular uma linha.

    printf (" Didite algo (leitura feita por <fgets>): ");
    fgets (v, 10, stdin);
    fflush (stdin);

    puts ("\n\n Resultados: ");
    puts (v);


    // Bibliotecas importantes: 
        //<string.h>:
            // Fun??es importantes:
            // strcpy (<destino>, <origem>); --> Atribuir o valor de uma <string> em outra. (string n?o se altera com "=").
            char origem[20] = {"Ol?, mundo"};
            char destino[20];

            printf (" Antes do strcpy:\n"); 
            puts (origem); 
            puts (destino);

            strcpy (destino, origem);

            printf ("\n Depois do strcpy:\n"); 
            puts (origem); 
            puts (destino);

            // strcat (<destino>, <origem>); --> Copia o valor de uma <string> em outra, somando os valores. Ex: strcat (<nome>, <sobrenome>); Isso vai gerar um <nome + sobrenome>
            char s1[50] = {"L?gica de "};
            char s2[50] = {"programa??o!"};

            printf ("\n\n Antes do strcat:\n");
            printf (" str1: %s\n", s1);
            printf (" str2: %s\n", s2);

            strcat (s1, s2);

            printf ("\n Depois do strcat:\n");
            printf (" "); puts (s1);
            
            // strlen (<string>); --> Informa o tamanho de uma <string> (pode ser usada para, tambem, informar o que tem dentro).
            int ns = 50;  // Constante para controlar a quantifade de caracteres. Pode ser usada fora da fun??o "in main()" para definir uma constante usando: #define <n> <const.>
            char str[ns];
            int is;

            printf ("\n\n Digite um texto:\n");
            printf (" ");
            fgets (str, ns, stdin);
            fflush (stdin);
            is = strlen (str);

            printf ("\n Tamanho do texto: %i\n\n", is);

            printf (" Impress?o de posi??o a posi??o:\n");
            printf (" ");
            for (is=0; is<strlen(str); is++)
            {
                printf ("%c", str[is]);
            }

            // strcmp (<string1>, <string2>); --> Informa se a <string1> ? exatamente igual a <string2>, se a resposta for sim, ele retorna o valor "0".
            int N = 50;
            char hardText[N] = {"/exit"};
            char senha_usr[N];
            int ok;

            printf ("\n\n Digite a senha:\n");
            printf (" ");
            gets (senha_usr);
            fflush (stdin);

            ok = strcmp (hardText, senha_usr);

            if (ok == 0)
            {
                puts ("\n\n Senha correta");
            }
            else 
            {
                puts ("\n\n Senha incorreta!");
                puts (" Tente novamente");
            }
*/
        //<locale.h>:
            // Permite que a m?quina reconhe?a os caracteres de outras l?nguas
            // Ex: #include <locale.h>. Dentro do int main (){} insira: setlocale (LC_ALL, "Portuguese_Brazil");

    /*
// Matrizes:
    // Sintaxe de declara??o: <tipo> <nome> [<dim1>] [<dim2>]...[dimN];

    // Sintaxe de acesso a posi??o: <nome> [<?ndice1>,] [<?ndice2>]...[<?ndiceN>]

    // Sintaxe de inicializa??o: <declara??o> = {{<linha1>}, {<linha2>}, ..., {<linhaN>}};

    // Exemplo 1:
    int mat[3] [3]; // --> MAtriz bidimensional 3x3

    mat [0] [0] = 1;  // mat [linha "0"] [coluna "0"]
    mat [0] [1] = 2;
    mat [0] [2] = 3;

    mat [1] [0] = 4;
    mat [1] [1] = 5;
    mat [1] [2] = 6;

    mat [2] [0] = 7;
    mat [2] [1] = 8;
    mat [2] [2] = 9;  // mat [linha "2"] [coluna "2"]

    printf ("\n\n Imprimindo a primeira linha:\n");
    printf ("\n%i %i %i\n", mat [0] [0], mat [0] [1], mat [0] [2]);


    // Exemplo 2:
    int mat2 [3] [3] = {{1,2,3}, {4,5,6}, {7,8,9}};  // int mat2 [3] [3] = {{linha1}, {linha2}, {linha3}};
    int i, j;

    printf ("\n\n Imprimindo a primeira linha:\n");
    for (j=0; j<3; j++)
    {
        printf (" %i", mat2 [0] [j]);
    }

    printf ("\n Imprimindo a matriz completa:\n");
    for (i=0;i<3;i++)
    {
            for (j=0; j<3; j++)
        {
            printf (" %i ", mat2 [i] [j]);
        }
        printf ("\n");
    }
*/

// Structs (registros)
    /* Sintaxe de defini??o:
        struct <novo_tipo>
        {
            <tipo1> <campo1>;
            <tipo2> <campo2>;
            ...
            <tipoN> <campoN>;
        };
    
       Comando Typedef:
        typedef <tipo> <novo_nome>;  --> Cria um novo nome para o identificador
    
       Sintaxe de declara??o de vari?vel struct:
        struct <novo_tipo> <nome_vari?vel>;  --> Sintaxe convencional

        <novo_nome> <nome_vari?vel>;  --> Sintaxe reduzida ap?s o uso do comando typedef

       Acessando os menbros de uma struct:
        <vari?vel>.<campo>
    */
/*
    struct tipo_pessoa  // Criando uma estrutura
    {
        int idade;      // <tipo1> <campo1>;
        float peso;     // <tipo2> <campo2>;
        char nome[50];  // <tipo3> <campo3>;
    };

    typedef struct tipo_pessoa tipo_pessoa;  // Renomeia "struct tipo_pessoa" para apenas "tipo_pessoa"

    tipo_pessoa pes = {0, 0.0, "Teste"};  // Criando uma vari?vel "pes"  --> tipo_pessoa pes = {campo1, campo2, campo3};

    printf ("\n\n In?cio:\n");
    printf (" pes.idade: %i\n", pes.idade);
    printf (" pes.peso: %.2f\n", pes.peso);
    printf (" pes.nome: %s\n", pes.nome);

    //Atribuindo valores aos campos
    pes.idade = 10;
    pes.peso = 99.99;
    strcpy (pes.nome, "Texto");  // Por ser uma string, deve-se utilizar o comando "strcpy" para atribuir um novo valor

    printf ("\n Alterando os campos via c?digo:\n");
    printf (" pes.idade: %i\n", pes.idade);
    printf (" pes.peso: %.2f\n", pes.peso);
    printf (" pes.nome: %s\n", pes.nome);

    //Solicitando inser??es via teclado
    printf ("\n Insira sua idade:\n");
    scanf ("%i", &pes.idade);

    printf ("\n Insira seu peso:\n");
    scanf ("%f", &pes.peso);
    fflush (stdin);

    printf ("\n Insira seu nome:\n");
    fgets (pes.nome, 50, stdin);        // Tamb?m pode ser usado: scanf ("%49[^\n]s", pes.nome);
    fflush (stdin);

    printf ("\n\n Idade inserida:\n %i", pes.idade);
    printf ("\n Peso inserido:\n %.2f", pes.peso);
    printf ("\n Nome inserido:\n %s", pes.nome);

    //Misturando struct com vetores
    struct tipo_pessoa2
    {
        int idade2;
        float peso2;
        char nome2[50];
    };

    typedef struct tipo_pessoa2 tipo_pessoa2;

    tipo_pessoa2 lista[3];
    int I;

    for (I=0; I<3; I++)
    {
        printf ("\n\n DIGITE OS DADOS (%i):\n", I+1);
        
        puts ("\n Nome:"); printf (" ");
        scanf ("%49[^\n]s", lista[I].nome2);
        fflush (stdin);

        puts ("\n Idade:"); printf (" ");
        scanf ("%i", &lista[I].idade2);
        fflush (stdin);

        puts ("\n Peso:"); printf (" ");
        scanf ("%f", &lista[I].peso2);
        fflush (stdin);
    }
    system ("cls");     // Serve para limpar a tela. Apaga tudo que foi impresso at? ent?o

    puts ("\n SEUS DADOS:\n");
    for (I=0; I<3; I++)
    {
        printf ("------------ Pessoa %i ------------\n", I+1);
        printf ("\tNome: %s\n", lista[I].nome2);
        printf ("\tIdade: %i\n", lista[I].idade2);
        printf ("\tPeso: %.2f Kg\n\n", lista[I].peso2);
    }
    printf ("----------------------------------\n");


// Fun??es
    //Sintaxe de defini??o:
        /* <tipo> <nome_da_fun??o> (<par?metros>)
        {
            <bloco_de_comandos>
            return <informa??o>;
        }
        */
/*
        float maior (float num1, float num2)     //A fun??o deve ficar de fora da fun??o principal "int main(){}"
       {
        if (num1>num2)
        {
            return num1;
        }
        else 
        {
            return num2;
        }
       }

       float x, y, z;

       printf ("\n\n Insira um valor:\n");
       scanf ("%f", &x);
       printf ("\n Insira um segundo valor:\n");
       scanf ("%f", &y);

       z = maior (x, y);        // O valor "retornado" da fun??o <maior> ? atribu?do ? vari?vel "z"

       printf ("maior: %f", z);
   
    //Sintaxe para par?metros struct:
        //  <tipo> <fun??o> (<tipo_struct> <par?metro>){...}
    
    //Sintaxe para vetores/matrizes:
    /*  Vetor 1: <tipo> <fun??o> (<tipo> <vet>[], int tam) {...}  --> "int tam"= vari?vel utilizada posteriormente para dizer o tamanho do vetor <vet>
        Vetor 2: <tipo> <fun??o> (<tipo> <vet>[<tam>]) {...}
        vetor 3: <tipo> <fun??o> (<tipo> *<vet>, int tam) {...}   --> "*" pode ser utilizado como substituto de "[]"

        matriz: <tipo> <fun??o> (<tipo> <matiz>[] [<tam2>], int tam1) {...}
    */
/*
    //Ex vetor 1:
    void imprime1 (int v[], int n)      // O <tipo> "void" ? usado para especificar que a fun??o n?o retorna um valor.
    {
        int i;
        for (i=0;i<n;i++)
        {
            printf ("%d", v[i]);
        }
    }

    //Ex vetor 2:
    void imprime2 (int v[5])
    {
        int i;
        for (i=0;i<5;i++)
        {
            printf ("%i", v[i]);
        }
    }

    //Ex vetor 3:
    void imprime3 (int *v, int n)
    {
        int i;
        for (i=0;i<n;i++)
        {
            printf ("%i", v[i]);
        }
    }

    // int main (){...}
    int vet [5] = {1,2,3,4,5};

    puts (" Primeiro imprime:");
    imprime1 (vet, 5);

    puts (" Segundo imprime:");
    imprime2 (vet);

    puts (" Terceiro imprime:");
    imprime3 (vet, 5);


    //Exemplo matriz:
    void imprime4 (int m [] [4], int n2)
    {
        int i,j;
        for (i=0;i<n2;i++)
        {
            for (j=0;j<4;j++)
            {
                printf ("%i ", m [i] [j]);
            }
        }
    }

    // dentro da fun??o int mai():
    int matriz [3][4]= {{1,2,3,4}, {50,60,70,80}, {91,101,111,121}};

    puts ("\\n impre??o da matriz:");
    imprime4 (matriz, 3);
*/
    //OBS: Uma fun??o pode ser escrita depois da fun??o principal "int main(){...}". Para isso, declare a fun??o antes da pricipal e defina-a depois.
    /*Ex:
        <tipo> <nome_da_fun??o> (<par?metros>);

        int main(){
            .
            .
            .
            return 0;
        }

        <tipo> <nome_fun??o> (<tipo_struct> <par?metro>){...}
    */
/*
    //Ex:
    float maior2 (float num3, float num4);

    // int main (){...}:
    float x2, y2, z2;

    printf ("\n\n Insira um valor:\n");
    scanf ("%f", &x2);
    printf ("\n\n Insira mais um valor:\n");
    scanf ("%f", &y2);

    z2 = maior2 (x2,y2);

    printf ("Maior: %.2f", z2);

    //Ap?s int main(){...}
    float maior (float num3, float num4)     //A fun??o deve ficar de fora da fun??o principal "int main(){}"
       {
        if (num1>num2)
        {
            return num1;
        }
        else 
        {
            return num2;
        }
       }
*/
//---------------------------------------------------------------------------------------------------------------------------

//Trabalhando com v?rios arquivos
    // Par?metros de uma fun??o: "int argc"   e   "char *argv[]"

    //Sintaxe correta do int main():
    //  int main (int argc, char *argv[]) {...}
    //  int argc    --> Serve para contar o n?mero de palavras separadas por espa?o ao executar um arquivo .exe pelo prompt de comandos.
    //  char *argv  --> Serve para salvar os caracteres digitados ao executar um arquivo .exe pelo prompt de comandos.


    //Integrar arquivos fontes distintos    --> #include
    //  Arquivos .h: Vari?veis globais (definidas fora da fun??o principal "int main()")
    //               Prot?tipos de fun??o (Fun??es declaradas sem sua defini??o)
    //               Defini??o de novos tipo.

    //  Arquivos .c: Implementa??o da l?gica.

    // PARA VER O EXEMPLO ABRA A PASTA "teste_arquivos_distintos"   


//Lendo e imprimindo em arquivos .txt externos
    //Sintaxe de declara??o de leitura de arquivo:
    /*  FILE* <nome_vari?vel>;      --> Leituras de arquivos retornam ponteiros. Para obter o valor do ponteiro utilize " * ".

        <nome_vari?vel> = fopen("<nome_arquivo>.txt", "(r, r+, w ou a)");    --> r= read(ler arquivo), r+= (ler e escrever no arquivo), w= write(escrever no arquivo) e a= anexar(anexar arquivo)
        .
        .
        .
        fclose(<nome_vari?vel>);
    */

    //Sintaxe para ler o conte?do do arquivo:
        //fscanf (<nome_vari?vel>, "%formato de vari?vel", &<vari?vel>);
        
        //fgets (<string>,<n? de caracteres m?ximo>, <local_a_ser_lido>);   --> <local_a_ser_lido> - "stdin"= ler do teclado - "<nome_vari?vel>"= ler do arquivo.
    
    //Sintaxe para escrever em um arquivo:
        //fprintf (<nome_vari?vel>, "Texto a ser escrito + %formato de vari?vel", <vari?vel>);

        //fputs (<string>, <nome_vari?vel>);
        //fputc (<char>, <nome_vari?vel>);      --> Serve para imprimir apenas um caracter.

    //Sintaxe para mover o cursor pelo arquivo (fseek):
        //fseek (<nome_vari?vel>, <posi??o>, <refer?ncia_posi??o>)

        //  fseek (file, 0, SEEK_SET);      --> "SEEK_SET" = setar o cursor em qualquer lugar do arquivo.
        //  fseek (file, 0, SEEK_END);      --> "SEEK_END" = setar o cursor no final do arquivo.

    return 0;
}