// Observações gerais sobre o Node js:
// Hoisting: Ao executar um código no Node js, ele varre todo o código em busca de todas as variáveis tipo "var" e funções declaradas e as coloca no topo do código.
// Sendo assim, é possível utilizar tais variáveis e funções antes de sua declaração de fato. Contudo, tais coisas não são recomendadas, pois podem gerar bugs.

/*
//Tipos de variáveis:
    //Number:
    const primeiro_numero = 2;
    const segundo_numero = 32.5;
    const terceiro_numerto = 0.5; //JavaScropt aceita valores de casa decimal sem o "0" na frente. "0.5" === ".5".

    console.log(primeiro_numero + segundo_numero + terceiro_numerto);

    //Formatação casa decimal: .toFixed(<casas_decimais>);

    //ERRO NaN (not a number);
    const alura = "Alura";
    console.log(alura * primeiro_numero); // "Alura"*2 -> NaN


    //String:
    const texto01 = "\nhello, World \n";
    const stringNumeros = "1,2,3,4,5.";

    //Concatenação (+):
    const citacao = "Meu nome é ";
    const meunome = "João Victor";

    console.log(citacao + meunome, "\n\n");


    //Bool:
    const bool01 = 5;
    const bool02 = 10;
    const bool03 = true;
    const bool04 = false;

    console.log(bool01 === bool02);     // output -> "false".
    console.log(bool01 < bool02);       // output -> "true".

    // OBS: existem também valores que são reconhecidos como booleanos
    // 0 == false
    // "" == false
    // 1 == true


    // null e undefined:
    let varNull = null;
    let varUndefined;       //Variáveis inicializadas sem valor recebem o valor de "undefined".

    console.log(varNull, varUndefined);
    // OBS: Em uma operação com "undefined" como: x += varUndefined; --> output: NaN.



//Formas de variáveis
    //var:
    //Formato antigo de declarar variáveis. Permite seu uso sem declaração e sua redeclaração, além de ser visível fora de uma função. Não usar!
    valorTotal = 200;
    var valorTotal;

    console.log(valorTotal);        //output -> 200.


    //let: Variável comum. Deve ser declarada antes de sua utilização e não admite redeclaração. Não é visível fora da função em que é declarada.
    let produto;
    let valorProduto, quantProduto;

    produto = "Pão";
    valorProduto = 2.55;
    quantProduto = 10;

    console.log("O valor total de",quantProduto, produto, "é de R$", valorProduto*quantProduto);


    //const: Variável constante. Não pode ser alterada.
    const pi = 3.14;    //Na inicialização, é obrigatória atribuir um valor para uma "const".
    // pi++; --> ERRO!

    console.log(pi);

    // OBS: Em vetores, variáveis constantes não podem serem alteradas, porém, seu conteúdo pode.
    const carros = ["Jaguar", "Lamborguini", "Porshe"];

    carros[0] = "Ferrari";
    carros.push("BMW");

    // carros = ["Fiat", "Renault", "Ford"];  --> ERRO!

    console.log(carros);        //output --> Ferrari Lamborguini Porshe BMW.


//Conversão de tipos de variáveis
    const numeroVar = 456;
    const numeroString = "456";

    // Conversão implícita:
    console.log(numeroVar + numeroString);  //output --> 456456. O js converte tudo para string e o "+" passa a ser um operador de concatenação.

    // Conversão explícita: "Number()" e "String()".
    console.log(numeroVar + Number(numeroString), "\n\n");  //output --> 912.

    // OBS: Ao em vez de "Number()", podemos também apenas utilizar o sinal "+" antes da variável, a conversão se mantém.


//Console
    // console.log(): Cria um registro no console (terminal) do usuário. É uma mensagem que apenas é exibida no console (terminal) do usuário.
    console.log("registro");

    // console.error(): Cria um registro de ERRO no console (terminal).
    console.error("Deu erro!");

    // console.time() e console.timeEnd(): Marca o tempo de execução de um código entre as duas funções.
    console.time();
    console.log("Hello, World");
    console.timeEnd();          //outpuy --> tempo ms.


//if:
    // operadorTernario: (<condição_1> "comparador" <condição_2> ? "comando 1" : "comando 2");
    const idadeMinima = 18;
    const idadeCliente = 16;
                        // comparação           true       false
    console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");  //output --> suco.


//String
    // Tamplate strings: Forma mais eficiente de concatenar strings
    const nome = "João";
    const idade = 2023-1998;
    const cidadeDeNascimento = "João Pessoa";

    const apresentacao = `Olá, meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento}.`;

    console.log(apresentacao,"\n");      //output --> Olá, meu nome é João, tenho 25 anos e nasci na cidade de João Pessoa.

    // .lenght --> Retorna o tamanho da string:
    const senha = "senha12345";              //output --> 10
    console.log(senha.length);

    // .charAt() --> Retorna um caracter na posição especificada:
    console.log(senha.charAt(3));            //output --> 'h'

    // .indexOf() --> Retorna a posição do caracter especificado:
    console.log(senha.indexOf("h"));         //output --> 3

    // .toUpperCase() e .toLowerCase() --> Deixa a string toda em letras maiúsculas e menúsculas, respectivamente:
    console.log(senha.toUpperCase());        //output --> SENHA12345
    console.log(senha.toLowerCase());        //output --> senha12345

    // .slice() --> Retorna um "pedaço" de uma string.
    // Sintaxe: <variável>.slice(<início>, <fim>);
    console.log(senha.slice(0, 5));         //output --> "senha"

    // .replace() --> Substitui parte de uma string por outra.
    // Sintaxe: <variável>.replace(<string_removida>, <nova_string>);
    const nomeAmigo = "Caio";
    let comunicado = "Olá, senhor nomeusuario, informamos que faltará água em 2h."

    console.log(comunicado.replace("nomeusuario", nomeAmigo));      //output --> "Olá, senhor Caio, informamos que faltará água em 2h."
*/
/*
//Arreys (vetores)
    // Sintaxe de declaração: <tipo_variável> <nome> = [<valor01>, <valor02>,..., <valorN>];
    const vetor = [0, "hello", 22.5, true];

    // .push(<novo_valor>) --> Adiciona valores ao final de um vetor
    const notas = [10, 6, 8];
    notas.push(7);
    console.log(notas);     //output --> [10, 6, 8, 7]

    // .unshift(<novo_valor>) --> Adiciona valores no começo de um vetor
    const adicionaNtas = [8, 6, 10];
    adicionaNtas.unshift(7);
    console.log(adicionaNtas);  //output --> [7, 8, 6, 10]

    // .pop() --> Remove o último elemento de um vetor
    const removeNotas = [10, 6, 8, 5.5, 10];
    removeNotas.pop();
    console.log(removeNotas);   //output --> [10, 6, 8, 5.5]

    // .shift() --> Remove o primeiro elemento de um vetor
    const marcaCarros = ["Fiat", "Ferrari", "Porshe"];
    marcaCarros.shift();
    console.log(marcaCarros);   //output --> ["Ferrari", "Porshe"]

    // .sort() --> Re-organiza os valores de um vetor com base na classificação Unicode
    const nomesProprios = ["Maria", "João", "Antônio"];
    const novosNomes = nomesProprios.sort();
    console.log(novosNomes);    //output --> ["Antônio", "João", "Maria"]

        // OBS: Para funcionar com outros tipos além de strings, temos que passar uma função callback para definir a comparação.
        // Sintaxe: const <variável> = <vetor>.sort((<iterador1>, <iterador2>) => {
        // if (a > b) return 1;
        // if (a < b) return -1;
        // else return 0;
        // });

    // .conCat() e .slice()  --> Funcionam igual às strings. OBS: Não modificam vetores, por isso seu retorno deve ser atribuido a um novo vetor.

    //.slice(<início>, <fim>) --> Separa os valores de um vetor em uma nova variável
    const sala = ["João", "Lucas", "Antônio", "Maria", "Luisa", "Rebeca"];
    const homens = sala.slice(0, 3);
    console.log(homens);        //output --> ["João", "Lucas", "Antônio"]

    // .splice(<início>, <fim>, opcional:<novo_valor>) --> Remove elementos, no lugar especificado, do vetor
    sala.splice(2,2, "CAVALO");
    console.log(sala);          //output --> ["João", "Lucas", "CAVALO", "Luisa", "Rebeca"]
*/
/*
//Matrizes
    // Sintaxe de declaração: const <nome_matriz> = [<linha>, <coluna>, ...];
    const alunos = ["João", "Maria", "Fernanda", "Gabriel"];    
    const mediaAlunos = [10, 8, 9, 7.5];

    const listaDeAlunos = [alunos, mediaAlunos];
    console.log(`A aluna da posição 1 da lista é: ${listaDeAlunos[0][1]}`);     //output --> "Maria"

    // Desestruturação
        // Sintaxe: const [<variável=indice_0>, <variável=indice_1>,..., <variável=indice_N>] = <matriz>;

        // Explicação: Cria novas variáveis que vão receber todo o vetor, no índice especificado, da matriz.

        const [alunosIndice0, mediaIndice1] = listaDeAlunos;     //output --> [ 'João', 'Maria', 'Fernanda', 'Gabriel' ] 
        console.log(alunosIndice0, "\n", mediaIndice1);          //output --> [ 10, 8, 9, 7.5 ]

//Loops
    const exibeNomeENota = (aluno) => {
        if (listaDeAlunos[0].includes(aluno)) {      // .includes(<variável>) --> Verifica se a variável existe no vetor e retorna V ou F.
            // const alunos = listaDeAlunos[0];
            // const medias = listaDeAlunos[1];

            const [alunos, medias] = listaDeAlunos; // Nova forma de atribuir vetores de matrizes a novas variáveis.

            const indice = alunos.indexOf(aluno);    // .indexOf(<variável>)  --> Retorna o índice da variável especificada.

            const mediaDoAluno = medias[indice];

            console.log(`${aluno} tem a média ${mediaDoAluno}.`, "\n");
        } else {
            console.log("Aluno não cadastrado!");
        }
    }
    exibeNomeENota("Maria");


    // For: for (let i=0 ; i < 10; i++) {...}
    const Notas = [10, 6.5, 8, 7.5];
    let somatorio = 0;

    for (let i=0;i<Notas.length;i++) {
        somatorio += Notas[i];
    }
    console.log(somatorio/Notas.length);   //output --> 8

    // ForOf (for each): for (let <iterador> of <variável>) {...}
    somatorio=0;
    for (let notaAtual of Notas) {
        somatorio+=notaAtual;
    }
    console.log(somatorio/Notas.length);   //output --> 8

    // .forEach: <variável>.forEach(function(<iterador>, opcional:<iterador2>) {...});
    somatorio = 0;
    Notas.forEach(function(notaAtual, i) {      // ".forEach" tem a vantagem de poder usar mais de 1 iterador. Contudo não aceita condições de parada como "break" e "continue".
        somatorio+=notaAtual;                   // ".forEach" não retorna valores, apenas executa o loop.
        console.log(i);
    });
    console.log(somatorio/Notas.length);   //output --> 8

        // OBS: Também é possível declarar uma função antes do ".forEach()" e utilizá-la. Veja:
        const nomesForEach = ["joão", "Maria", "José"];

        function imprimeNomes(nome) {
            console.log(nome);
        }

        nomesForEach.forEach(imprimeNomes);

    // .map(): <variável>.map(function(<iterador>, opcional:<iterador2>) {...});
    const notasMap = [10, 9.5, 8, 7, 6];

    const notasAtualizadas = notasMap.map(nota => {
        return nota + 1 >= 10 ? 10 : nota + 1;  // --> if ternário
    });
    console.log(notasAtualizadas);      //output --> [10, 10, 9, 8, 7]

    // OBS: O "map", diferente do "forEach", pode retornar um valor. Por isso ele é mais utizizado quando queremos alterar valores do nosso vetor.
    
    // .filter(): <variável>.filter(function(<iterador>, <índice>) {... return <true or false>});
    // FUNÇÃO: Itera todos os elementos de um vetor e atribui todos os elementos verdadeiros para um novo vetor.
    const alunosFilter = ["Ana", "Marcos", "Maria", "Mauro"];
    const mediaFilter = [7, 4.5, 8, 7.5];

    const reprovados = alunosFilter.filter((aluno, i) => {
        return mediaFilter[i] < 7;
    });
    console.log(reprovados);            //output --> Marcos

    // .reduce(): <variável>.reduce(function(<acumulador>, <iterador> {... return...}, <valor_inicial_acumulador>);
    const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
    const salaJava = [6, 5, 8, 9, 5, 6];
    const salaPython = [7, 3.5, 8, 9.5];

    const calculaMedia = (notasDaSala) => {
        const somaDasNotas = notasDaSala.reduce((acumulador, notas) => {
            return acumulador + notas;
        }, 0);
        console.log(somaDasNotas/notasDaSala.length);
    }
    calculaMedia(salaJS);           //output --> 7.5


// Copiando vetores sem alterar o original
    // No JavaScript, quando copiamos um vetor desta forma: <novo_vetor> = <vetor_original> --> Na verdade estamos atribuindo o mesmo endereço de
    // memória para o novo vetor, sendo assim, ao modificarmos o novo vetor, o original é alterado da mesma forma e vice versa.
    // Para criarmos um novo vetor independente temos que:

        // Sintaxe: <novo_vetor> = [...<vetor_original>];   --> Ao colocarmos "...", o js entende que estamos apenas copiando o valor do vetor original.
        const original = [7, 7.5, 8, 9];

        const novoArray = [...original];    //Outra possibilidade: novoArray = [3, ...original, 10] --> output: [3, 7, 7.5, 8, 9, 10]
                                            //O "..." indica que estamos copiando e colando o exato valor de um vetor, o que torna esse método bastante flexível.
        novoArray.push(10);

        console.log(novoArray);     //output --> [7, 7.5, 8, 9, 10]
        console.log(original);      //output --> [7, 7.5, 8, 9]

    // OBS: O mesmo comportamento se repete quando passamos um vetor como parâmetro de uma função, o vetor de referência é alterado junto com o da função.
    // OBS: Esse tipo de comportamento não se aplica com os tipos primitivos do JavaScript: number, string, bool


// Set: retorna todos os valores de um novo "set" sem repetí-los.
    const nomesSet = ["Ana", "Marcos", "Ana", "Maria", "Marcos", "Mauro",];

    const novoSet = new Set(nomesSet);

    console.log(novoSet, "\n\n");           //output --> { 'Ana', 'Marcos', 'Maria', 'Mauro' }
*/

/*
//Funções
    // 1ª Forma - Declaração: function <nome_função> (<parâmetros>) {<bloco_de_comandos>}
    function imprimeTexto(texto) {
        console.log(texto);
    }

    // Execução da função:
    imprimeTexto ("Hello Hello");
    imprimeTexto ("Outro texto\n");

    // return:
    function soma(numero01, numero02) {

        return numero01 + numero02;
    }

    imprimeTexto (soma(4, 10));      //output --> 14. É possível utilizar outras funções como parâmetros de função.

    // OBS: É possível definir valoles padões para os argumentos.
    // EX:
        function multiplicacao(num01 = 1, num02 = 2) {
            return num01 * num02
        }

        console.log(multiplicacao(7, 10));      //output --> 70.
        console.log(multiplicacao(7));          //output --> 14.

        //Dessa forma, mesmo que não passemos todos os parâmetros, a função define automaticamente os valores padrões.

    // 2ª Forma - Expressão de função: const <nome_variável> = function (<parâmetros>) {<bloco_de_comandos>}
    const somaFuncao = function(num1,num2) {return num1 + num2}     //Outra forma de declarar uma função. A variável criada guarda a função.

    console.log(somaFuncao(2,10), "\n");      //output --> 12.
    // OBS: A função não precisa de um nome, pois a variável ja desempenha seu papel de ter um nome.

    // PRINCIPAL DIFERENÇA ENTRE DECLARAÇÃO E EXPRESSÃO DE FUNÇÕES:
        console.log(declaracao());
    
        function declaracao () {
            return "Pode ser utilizada antes de ser declarada";
        }


        // console.log(expressao());    --> ERROR!

        // const expressao = function(num1, num2) {return num1 + num2}  --> Na expressão, a função passa a se comportar igual uma variável e fica
                                                                        //  proibído de ser executada antes de sua declaração.


    // 3ª Forma - Arrow function (=>):
    // Sintaxe: const <nome_variável> = (<parâmetros>) => {<bloco_de_comandos>}
    const somaArrow  = (num1,num2) => num1 + num2;  //Comandos de uma única linha não precisam de "chaves" ("{}") e nem do "return".
    console.log(somaArrow(5,10));

    const somaNumerosPequenos = (num1,num2) => {
        if (num1>10 || num2>10) {
            return "Somente números de 1 a 9.";
        } else {
            return num1 + num2;
        }
    }

    console.log(somaNumerosPequenos(10,15), "\n");    //output --> "Somente números de 1 a 9."
*/


//Objetos
    // Sintaxe de declaração: const <nome_objeto> = {<chave1>: <valor1>, <chave2>: <valor2>, ..., <chaveN>: <valorN>};
    const cliente = {
        nome: "André",
        idade: 32,
        cpf: "1122233345",
        email: "andre@dominio.com",
    //  chave: valor,
    };

    // Sintaxe de acesso:
    // 1° Método: <nome_objeto>.<chave>;    --> No geral, o caracter "." serve para acessar a chave de um objeto.
    console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`);

    console.log(`Os 3 primeiros dígitos do CPF são: ${cliente.cpf.slice(0,3)}\n`);

    // 2° Método: <nome_objeto>[<chave>];   --> Parecido com o método de acessar vetores.
    console.log(`O nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} anos`);

    console.log(`Os 3 primeiros dígitos do CPF são: ${cliente["cpf"].slice(0,3)}\n`);

    const chaves = ["nome", "idade", "cpf", "email"];
    chaves.forEach((chaves) => {
        console.log(`A chave ${chaves} tem o valor ${cliente[chaves]}`);    //Forma de utilizar variáveis para acessar chaves de objetos.
    });

    // Manipulando objetos:
    const pessoa = {
        nome: "Luma",
        profissao: "Engenheira",
    };

    pessoa.nome = "Luma Silva";
    pessoa.telefone = "(83) 99988-5376";

    console.log(pessoa);        //output --> retorna o objeto "pessoa" modificado.

    // Delete: remove o conjunto chave e seu valor do objeto.
    delete pessoa.telefone;

    console.log(pessoa);

        // OBS: "delete" retorna um booleano (true ou false). Não retorna falso ao tentarmos remover uma propriedade que não existe!
        
    // Tipos de objetos
    // Vetores em objetos:
    const clienteTipo = {
        nome: "João",
        idade: 24,
        email: "joao@firma.com",
        telefone: ["11555555550", "11444444440"],
    };
    console.log(clienteTipo.telefone[1]);   //output --> 11444444440

    // Objetos em objetos:
    clienteTipo.enderecos = [{
        rua: "Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "Ap 934",
    },];
    console.log(clienteTipo);               //output --> obj "cliente tipo" + obj "enderecos"

    // Vetores de objetos:
    clienteTipo.enderecos.push({
        rua: "Joseph Push",
        numero: 404,
        apartamento: false,
    });

    console.log(clienteTipo, "\n\n\n");

    const listaApenasApto = clienteTipo.enderecos.filter((enderecos)=> {
        return enderecos.apartamento === true;
    });

    console.log(listaApenasApto);

        // OBS: Ao criar vetores de objetos, podemos manipula-los atraves dos métodos de vetores ja vistos.
    
    // Funções em objetos:
    const clienteFuncoes = {
        nome: "João",
        idade: 24,
        email: "joao@firma.com",
        telefone: ["11555555550", "11444444440"],
        saldo: 200,
        efetuaPagamento: function (valor) {
            if (valor > this.saldo)         //"this" se refere ao objeto atual. Forma de acessar uma chave do objeto atual.
                console.log("Saldo insuficiente");
            else {
                this.saldo -= valor;
                console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`);
            }  
            console.log("\n");
        }
    };
    clienteFuncoes.efetuaPagamento(250)     //output --> Saldo insuficiente

        // OBS: Ao fazer uma cópia de objetos, assim como vetores, matrizes e funções, não são literalmente copiados,
        //      mas são apenas referenciados, ou seja, se alterarmos o valor da "cópia" o original também é alterado!
        // Copiar valores de objetos:
        const novoObj = Object.create(cliente);
        // ao alterarmos os valores de "novoObj" o objeto "clientes" não será alterado.


    // Criando objetos utilizando funções:
    // Sintaxe: function <nome_função_construtora> (<chave1>, <chave2>,..., <chaveN>) {
    //                  this.chave1 = chave1;
    //                  this.chave2 = chave2;
    //                  this.chaveN = chaveN;
    //              }
    // const <nome_obj> = new <nome_função_construtora>(<valor1>, <valor2>,..., <valorN>);
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    const meuCarro = new Carro("Porshe", "Kyene", "2024");
    console.log(meuCarro,"\n");          //output --> Carro { marca: 'Porshe', modelo: 'Kyene', ano: '2024' }


//Classes
// É uma forma de construir objetos de forma automática
class Livro {
    constructor (nome, editora, paginas) {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    // Dentro de classes, não precisamos declarar funções da forma tradicional.
    anunciarLivro() {console.log(`Título: ${this.nome}`);}
    descreveLivro() {console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`);}
}
const livro01 = new Livro ("A revolução dos bichos", "não lembro", 233);

console.log(livro01);       //output --> Imprime os dados do objeto.
livro01.anunciarLivro();    // Executa a função presente dentro do objeto.
livro01.descreveLivro();

    // Herança
    // Quando uma nova classe herda propriedades de outra
    // Sintaxe:
    /*
        class <nova_classe> extends <antiga_classe> {
            constructor (<parâmetro1>, <parâmetro2>, <parâmetroN>) {

                super(<parâmetro1>)     --> Importa as chaves da antiga classe "Livro" e passa seus respectivos valores dentro do "()".
                this.parâmetro2 = parâmetro2;
                this.parâmetroN = parâmetroN;
            }
        }
        const <variável_obj> = new <nova_classe> (<parâmetro1>, <parâmetro2>, <parâmetroN>);
    */
   class LivroColecao extends Livro {
    constructor (nome, nomeColecao) {
        super(nome);
        this.nomeColecao = nomeColecao;
    }
   }
   const logicaDeProg = new LivroColecao ("Lógica de programação", "Comece a programar"); 

   console.log(logicaDeProg);

/*
//Varrendo objetos
const clienteLoop = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
    telefone: ["11555555550", "11444444440"],
    enderecos: [
        {
        rua: "Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "Ap 934",
        },
    ]
};

    // forin: semelhante a "forof", porém específico para objetos.
    // sintaxe: for (let <iterador> in <variável>) {...};
        for (let chave in clienteLoop) {
            console.log(`A chave ${chave} tem o valor ${clienteLoop[chave]}`);
        }

    // Object.keys: Retorna um vetor com todos os nomes das chaves do objeto. 
    const chavesDoObj = Object.keys(clienteLoop);
    console.log(chavesDoObj);           //output --> [ 'nome', 'idade', 'cpf', 'email', 'telefone', 'enderecos' ]

           // OBS: Por se tratar de um vetor, podemos utilizar todos os métodos de manipulação de vetores ja vistos.
           if (!chavesDoObj.includes("enderecos")) {
                console.error(" ERRO! A chave endereço não existe.");
           }
    
    // Object.value: Retorna um vetor com o valor de todas as chaves do objeto.
    const valoresObj = Object.values(clienteLoop);

    // Object.entries: Retorna uma matriz com as chaves e seus respectivos valores de um objeto.
    const objEntries = Object.entries(clienteLoop);
    console.log(objEntries);

    // Espalhamento de objetos "..."
    // Objetivo: É um método para "espalhar" as chaves de um objeto em um outro objeto de forma automática.
    const encomenda = {
        destinatario: clienteLoop.nome,
        //endereço:
        ...clienteLoop.enderecos[0],
    };

    console.log(encomenda);


// Desestruturação de objetos
const user = {
    name: "Diego",
    idade: 27,
    gender: "Masculino",
    address: {
        street: "Rua Teste",
        number: 176,
    },
};

    // Declarando novas variáveis:
    const name = user.name;
    console.log(name);

    // Quando o nome da nova variável for igual à uma chave de obj podemos:
    const {address} = user;
    console.log(address);

    // Renomeando a nova variável:
    // Sintaxe: const {<nome_chave1>: <novo_nome1>, <nome_chave2>: <novo_nome2>} = <obj>;
    const {idade: age} = user;
    console.log(age);                       //output --> 27.

    // Default value (valor padrão): Podemos definir valores padrões para a nova variável caso ela não exista em um obj.
    const {nickname = "Fernades"} = user;
    console.log(nickname);                  //output --> Fernandes. (Chave inexistente)

        // OBS: Se a chave existir, seu valor será sempre o original, previamente atribuído.

    // A desestruturação funciona em qualquer lugar em que lidamos com objetos, inclusive em funções.
    // EX:
    function mostraIdade({idade = 33}) {
        return idade;
    }
    console.log(mostraIdade(user));         //output --> 27

    // Rest operator (...): Utilizamos para guardar o "resto" das variáveis que não desestruturamos.
    const {gender, ...rest} = user;
    console.log(rest, "\n");                      //output --> Todas as chaves e seus valores exceto "gender".



//Arquivos .json
    // Sintaxe de export: module.exports = <variável>;      --> exporta apenas a variável ou função indicada.

    // Sintaxe de import: const <variável> = require("./<caminho/nome_arquivo>");
    const dados = require("./json/cliente.json");
    console.log(dados);                         //output --> Obj "cliente.json".
    console.log(typeof dados);                  //output --> Object.

        // OBS: As variáveis e funções exportadas funcionam como objetos do js, sendo assim, podemos utilizar métodos de obj para manipula-las.

    // Transformar obj para string:
    // sintaxe: const <variável> = JSON.stringify(<obj>);
    const clienteEmString = JSON.stringify(dados);
    console.log(clienteEmString);               //output --> Obj transformado em uma string.
    console.log(typeof clienteEmString);        //output --> String.

    // Transformar string em obj:
    // Sintaxe: const <variável> = JSON.parse(<string>);
    const objCliente = JSON.parse(clienteEmString);
    console.log(objCliente);                  //output --> String transformada de volata em obj.
    console.log(typeof objCliente);           //output --> Object.
*/

// Funções assíncronas async/await:
    // Sintaxe de função:
    /*
        try {   --> Bloco de comandos em caso de sucesso:
            async function <nome_função>(<parâmetros>) {
                let <variável1> = await ...;
                let <variável2> = await ...;
    
                return <valor_de_retoro>;   --> retorna sempre uma "promessa".
            }
        } catch(<erro>) {<bloco de comandos em caso de erro>}
    */
    // "await" hapenas pode ser utilizado dentro de funções assíncronas "async"

// Criando uma biblioteca no Node:  (Exemplos na pasta "Biblioteca")
    // 1- Primeiro precisamos criar um "package.json" para definir as configurações iniciais do nosso projeto.
    //    Para isso digite "npm init" no terminal e informe todas as configurações do projeto.

    // 2- Importar bibliotecas externas: comando "npm install <nome>" (local) ou "npm install -g <nome>" (global).
    //    É necessário também importar a biblioteca para dentro do arquivo a ser trabalhado. Para isso utilize -> import <nome_variável> from "nome_biblioteca";
    //    Além disso, para que o node reconheça o comando "import", é necessário adicionar o tipo "module" no arquivo "package.json" criado inicialmente. -> "type": "module",