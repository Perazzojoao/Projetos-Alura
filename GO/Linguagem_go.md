# Linguagem GO

> REsumo das principais funcionalidades da linguagem Golang.

## Func main ():

**func main():** Função principal à ser executada. Todo o código executável deve estar sujeito à ela.

**Sintaxe:**

```
  func main() {
    .
    .
    .
  }
```

## Variáveis

**Criação:**

1. `var` <`nome`> `type` -> Criação padrão.

2. `var` <`nome`> = <`valor`> -> Inferência de tipo.

3. <`nome`> := <`valor`> -> Inferência de var e tipo.

#### Obs: Variáveis inicializadas sem valor assumem um valor padrão para seu próprio tipo.

## Tipos

- **string**

- **int, int8, int16, int32, int64**

- **float32 ou float64**

- **bool**

#### **OBS-1:** adicionar `u` no início do tipo exclui números negativos.

#### **OBS-2:** adicionar `[]` no início do tipo implica em um array do mesmo tipo.

### Valor padrão de cada tipo

- **string:** `" "`

- **int:** `0`

- **float:** `0`

- **bool:** `false`

## print no console

**Comando:** `println()` ou `fmt.Println()`

**Ex:**

    fmt.Println("Site:", site, "-> Carregado com sucesso! StatusCode:", resp.StatusCode)

## scan

**Comando:** `fmt.Scanf("%d", &<var>)` ou `fmt.Scan(&<var>)`

## for

Na linguagem go não existe o comando `while`. Ao invés disso, utilizamos o `for` sem nenhum parâmetro.

**Ex:**

```
  for {

  }
```
Sendo assim, geramos um loop infinito. Para interromper o programa: `os.Exit(<código>)` -> `0` para bem sucedido ou `-1` para mau sucedido.

### for padrão

**Sintaxe:** for i := 0; i < `<var>`; i++ {. . .}

### for range (forEach)

**Sintaxe:** for `<índice>`, `<elemento>` := `range` `<slice>` {. . .}

**Ex:**

```
  for _, site := range sites {
		resp, _ := http.Get(site)

		if resp.StatusCode == 200 {
			fmt.Println("Site:", site, "-> Carregado com sucesso! StatusCode:", resp.StatusCode)
		} else {
			fmt.Println("Site:", site, "-> Fora do ar! StatusCode:", resp.StatusCode)
		}
	}
```

## Funções

**Sintaxe:** func `<nome>`(`<param>` `type`) `type retorno` {. . .}

**Obs:** Deixar o retorno em branco implica em tipo `void`.

### Parâmetros indeterminados
Funções em GO podem receber uma quantidade indeterminada de parâmetros. Para isso utilize: func <nome_> (<nome_param> `...<type>`) {. . .}

**Ex:**

```
  func somatorio(numeros ...int) int {
    resultadoDaSoma := 0
    for _, numero := range numeros {
      resultadoDaSoma += numero
    }
    return resultadoDaSoma
  }

  func main() {
    fmt.Println(Somando(1))
    fmt.Println(Somando(1,1))
    fmt.Println(Somando(1,1,1))
    fmt.Println(Somando(1,1,2,4))
  }
```
Dessa forma, `numeros ...int` é equivalente a `numeros []int`.

### Retornando mais de um valor:

**Sintaxe:** func `<nome>`(`<param>` `type`) (`type1`, `type2`, ...) {return var1, var2, . . .}

**Recebendo os valores:** var1, var2 := retornaDois()

## Slice (Array)

Slice é um array de tamanho dinâmico, em que a própria linguagem infere com base nos ítens presentes.

### Por de baixo dos panos:

Ao criarmos um slice, a linguagem cria um array de `3 posições por padrão`. Caso ultrapassemos essa capacidade, seu tamanho é `dobrado automaticamente`. Sendo assim, um slice de tamanho 4 contém capacidade para 6 ítens e um slice de tamanho 9 terá capacidade para 12 ítens.

#### Obs: O slice usa como base a capacidade em que foi inicializada para dobrar de capacidade. Assim um slice inicializado com 5 ítens, ao estrapolar seu tamanho, será aumentado para 10 posições.

### Sintaxe:

`<variável>` := `[]type` {var1, var2, . . .}

**Ex:**

```
  nome := []string {"Douglas", "João", "Nathália", "Daniel"}
```

#### Identificar quantidade de ítens:

**len(nome):** retorna a quantidade de ítens no array. -> // 4

**cap(nome):** retorna a capacidade atual do array. -> // 6

#### Funções slice

1.  `append(<slice>, novo_ítem)`: retorna um novo slice com o ítem adicionado.

    **Ex:**

        exemploSlice = append(exemploSlice, "Hello")

## Structs (Classes)
Structs são equivalente a classes. Criamos structs para adicionar variáveis e seus respectivos tipos à um objeto.

### Criação
**Sintaxe:** `type` `<nome>` `struct` {. . .} 

**Ex:**

```
  type ContaCorrente struct {
    titular       string
    numeroAgencia int
    numeroConta   int
    saldo         float64
  }
```

### Uso
Criamos um objeto a partir de uma struc utilizando o comando: `<nome_struct> {...}`

#### Há duas formas de atribuir valores a um struct
1. **Forma completa:**
    ```
      exemplo := exemploStruct {
        var1:  valor1,
        var2:  valor2,
        var3:  valor3,
      } 
    ```
2. **Forma reduzida:**

        exemplo := exemploStruct {valor1, valor2, valor3}

**Obs:** `Na forma reduzida`, a atribuiçao de valores para `TODAS` as variáveis é `OBRIGATÓRIA`, enquanto na forma completa valores omitidos serão inicializados com o valor padrão do seu próprio tipo.

**Ex:**

```
  type ContaCorrente struct {
    titular       string
    numeroAgencia int
    numeroConta   int
    saldo         float64
  }

  func main() {
    cliente01 := ContaCorrente{
      titular:       "João Victor",
      saldo:         152.34,
    }

    cliente02 := ContaCorrente{"Guilherme", 442, 3302, 3242.52}
  }
```

### Adicionando funções à struct
Para adicionar funções e métodos à um determinado struct utilizamos: func `(<var> <struct>)` <nome_func>() {. . .}

**Ex:**

```
  func (c *ContaCorrente) sacar(valorSaque float64) {
    .
    .
    .
  }
```
Temos duas formas de referenciar uma função à um struct: `com ponteiros` ou `forma padrão`.

1. `Ponteiros`: (<var_> *<struct_>)

    - Quando queremos `alterar` valores de variáveis da struct `de forma persistente`.
    - Quando queremos `otimizar` o `uso de memória` do programa.

2. `Forma padrão`: (<var_> <struct_>)

    - Quando queremos apenas `visualizar` valores da struct.
    - Quando `não` temos a intenção de alterar valores da struct `de forma persistente`.

##### Obs: Ponteiros agem sobre o endereço de memória da variável, alterando seu valor original em qualquer escopo. A forma padrão utiliza cópias das variáveis, alterando apenas as cópias. Com isso, ponteiros alteram o valor original e economizam memória, enquanto a forma padrão mantém as alterações no próprio escopo da função enquanto utiliza mais memória.

## Interfaces
Interface é uma forma de agrupar structures com base em seus métodos em comum. Sendo assim, duas ou mais structures que compartilham métodos iguais podem ser agrupadas por meio de interfaces.

### Criação
**Sintaxe:** `type` `<nome>` `interface` {. . .}

**Ex:**

```
  type Conta interface {
    GetSaldo() float64
    Sacar(valorSaque float64)
    Depositar(valor float64) error
  }
```
Dentro da interface incluimos todas as funções, seus parâmetros e respectivos retornos que queremos englobar. Com isso, qualquer struct que possúa qualquer uma dessas funções como método pode ser acessada.

### Uso
Para utilizar, precisamos escrever funções que recebam como parâmetro uma interface.

**Ex:**

```
  func pagarBoleto(conta Conta, valor float64) {
    conta.Sacar(valor)

    fmt.Println("Boleto pago com sucesso!")
  }
```
Note que a função "pagarBoleto" pede uma "conta" do tipo interface "Conta". Entretanto, aqui passamos uma "conta" do tipo struct:

    pagarBoleto(conta1, 1000)   // conta1 ContaCorrente (struct)

Isso acontece, pois mesmo a variável "conta1" ser uma struct, por compartilhar os métodos com a interface descrita, é englobada pela interface. Com isso, dentro da função "pagarBoleto" podemos acessar o método "Sacar" específico da struct passada.

### Conclusão
Originalmente, precisaríamos criar uma função específica para cada struct que desejamos trabalhar. Tomando como exemplo a função "pagarBoleto", precisaríamos escrevê-la uma vez para cada tipo de conta que precisemos utilizar, contudo, utilizando interfaces, podemos escrevê-la apenas uma vez e recebermos qualquer conta que precisarmos.

## Ler arquivos txt

Existem mais de uma forma de ler arquivos txt. Cada método resulta em diferentes possibilidades de manipulação.

1.  **Ler arquivo inteiro:** `os.ReadFile("<path>")` -> Apenas leitura

    **Ex:** 

    ```
      file, err := os.ReadFile(logsPath)

      if err != nil {
        fmt.Println("Incapaz de abrir o arquivo: logs.txt -> Erro:", err)
      }

      fmt.Println(string(file)) -> Converte []bites em string
    ```    

2.  **Abrir conexão:** `os.Open("<path>")`

      **Sintaxe:** `file`, `err` := `os.Open("arquivo.txt")`

      **Criar leitor:** `leitor` := `bufio.NewReader(file)`

      **Ler linha por linha:** `linha`, `err` := `leitor.ReadString('<fim_linha>')`

      **Ex:**

        func lerSites() []string {
          file, err := os.Open("sites.txt")

          if err != nil {
            fmt.Println("Ocorreu um erro ->", err)
          }

          leitor := bufio.NewReader(file)

          var lista []string
          for {
            linha, err := leitor.ReadString('\n')

            if err != nil {
              if err == io.EOF {
                break
              }
              fmt.Println("Ocorreu um erro ->", err)
            }
            linha = strings.TrimSpace(linha) -> Método de string para remover espaços em branco
            lista = append(lista, linha)
          }
          file.Close()
          return lista
        }

      #### Obs: Ao abrirmos uma conexão com um arquivo, é boa prática fechar-la ao final: `<file>.Close()`

## Escrever em arquivos txt

**Abrindo conexão:** `os.OpenFile("<path>", <flags>, permission_code)`

- **path:** Caminho do arquivo

- **flags:** Operações a serem realizadas pela conexão

- **permission_code:** Código de permissões do sistema (Geralmente usamos 0666)

**Sintaxe:** `file`, `err` := `os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE, 0666)`

Para escrevermos no arquivo utilizamos: `file.WriteString()`

**Ex:**

```
  func registraLogs(i int, site string, status bool) {
    file, err := os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE, 0666)

    if err != nil {
      fmt.Println("Erro ao escrever em arquivo -> Erro:", err)
    }

    file.WriteString(time.Now().Format("02/01/2006 15:04:05 - "))  -> Registrando a data atual
    file.WriteString("Site " + strconv.FormatInt(int64(i+1), 10) + ": ")

    if status == true {
      file.WriteString(site + " -> Site online\n")
    } else {
      file.WriteString(site + " -> Site offline\n")
    }
    if i == monitoramentos+1 {
      file.WriteString("\n")
    }
    file.Close()
  }
```

## Requisições http
O GO possúi um pacote padrão para realizar requisições http: `http`

- **GET:** `resp`, `err` := `http.Get(<path>)`

A resposta contém todas as informações recebidas pela requisição, sendo possível acessá-las.

## API
A linguagem GO possúi algumas funções padrões para a criação de servidores web

### Criação:
1. **Inicialização de servidor**

    **Sintaxe:** `http.ListenAndServe("<porta>", <handler_func>)`

    Esse comando inicia um servidor http na porta indicada, e utiliza a "handler_func" para gerenciar as requisições ao servidor.

    **Ex:**

        http.ListenAndServe(":8000", nil)
    
    Passamos "nil" ao invés de uma "handler_func", quando não queremos gerenciar as requisições ao servidor.

2. **Rotas**

    **Sintaxe:** `http.HandleFunc("<rota>", <handler_func>)`

    A "handler_func", nesse caso, é a função que será chamada ao fazermos uma requisição na rota indicada, assim, a função é responsável por retornar uma resposta.

    **Ex:**
    
    ```
    http.HandleFunc("/", index)
    ```
    ```
    var temp = template.Must(template.ParseGlob("templates/*.html"))

    func index(w http.ResponseWriter, r *http.Request) {
      temp.ExecuteTemplate(w, "Index", nil)
    }
    ```

    A func `"index"` nesse caso, é responsável por `executar um template (html)` dentro da `rota raíz ("/")`.
    
    A variável `temp` recebe a leitura de todos os templates na pasta indicada.

## Banco de Dados (MySQL):
Cada banco de dados tem sua própria forma de conexão. Aqui usaremos o MySQL.

### Conexão
1. **Instalando dependências:** 

    Na pasta da sua aplicação utilize o seguinte comando cli:

       go get -u github.com/go-sql-driver/mysql

    Após isso, adicione a importação necessária:

       import (_ "github.com/go-sql-driver/mysql")

2. **Verificando conexão:**

    Para testar a conexão adicione a seguinte linha de código:

       db, err := sql.Open("mysql", "user:password@method(hostname:port)/dbname")
    
    **Ex:**

    ```
      db, err := sql.Open("mysql", "root:**senhadb**@tcp(localhost:3306)/alura_loja")

      if err != nil {
        fmt.Println("ERROR -> Fail to validate sql.Open() arguments")
        panic(err.Error())
      }
    ```

    Agora utilize a função `db.Ping()` para testar se a conexão continua aberta.

    **Ex:**

    ```
      err = db.Ping()

      if err != nil {
        fmt.Println("ERROR -> Fail to verify connection with db.Ping()")
        panic(err.Error())
      }
    ```

#### Exemplo completo:

```
  import (
    "database/sql"
    "fmt"

    _ "github.com/go-sql-driver/mysql"
  )

  func conectarDb() *sql.DB {
    db, err := sql.Open("mysql", "root:**senhadb**@tcp(localhost:3306)/alura_loja")

    if err != nil {
      fmt.Println("ERROR -> Fail to validate sql.Open() arguments")
      panic(err.Error())
    }

    err = db.Ping()

    if err != nil {
      fmt.Println("ERROR -> Fail to verify connection with db.Ping()")
      panic(err.Error())
    }
    return db
  }
```
#### Obs: Após abrir uma conexão com o banco de dados, é de boa prática feixá-la ao final de tudo: `defer db.Close`

### SELECT
Para realizar uma operação SQL SELECT utilize o comando: `db.Query("<comando_SQL>")`

**Ex:**

```
  selectAll, err := db.Query("SELECT * FROM produtos")

  if err != nil {
    fmt.Println("ERROR -> Unable to perform a query")
    fmt.Println(err.Error())
  }
```

Esse comando irá retortnar todas as linhas da tabela. Para ter acesso a cada linha, devemos iterá-lo: `for selectAll.Next {...}`

Após isso, devemos criar variáveis para receber cada item da linha iterada da tabela e inserir seus respectivos endereços de memória na função `selectAll.Scan(<var> ...any)`.

**Ex:**

```
for selectAll.Next() {
  var id, estoque int
  var nome, descricao string
  var preco float64

  err := selectAll.Scan(&id, &nome, &descricao, &preco, &estoque)
  if err != nil {
    fmt.Println("ERROR -> Unable to scan each table line")
    fmt.Println(err.Error())
  }
}
```

Com isso, cada variável gardará automaticamente o valor de cada dado escaneado pela função

### INSERT
Para realizar uma operação SQL INSERT utilize os comandos: `db.Prepare("<stmt>")` e `Exec(...<var>)`

1. **Prepare( ):** Serve para validar comandos SQL. Recebe o comando SQL como parâmetro e retornar o argumento (stmt) e um erro (err). Se houver algum erro no código SQL, o erro será guardado pelo err.

  - **Ex:**

    ```
    stmt, err := db.Prepare("INSERT INTO alura_loja.produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)")
    if err != nil {
      fmt.Println("ERROR -> Wrong insert arguments.")
      fmt.Println(err.Error())
      return
    }
    ```
    Note que as "?" é onde as variáveis passadas no Exec( ) serão alocadas. 
    
    O stmt gerado pode ser reutilizado em futuras requisições. Para fechar a stmt atual utilize: `stmt.Close()`.

2. **Exec( ):** Serve para executar um comando ou stmt previamente definido. Nele, passamos como parâmetro todas as variáveis que utilizaremos no comando SQL.

  - **Ex:**

    ```
    stmt.Exec(nome, descricao, preco, estoque)
    ```

#### Obs: Após a execução do INSERT devemos lembrar de fechar a conexão com o DB: `db.Close()`.