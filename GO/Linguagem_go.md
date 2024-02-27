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

Funções em GO podem receber uma quantidade indeterminada de parâmetros. Para isso utilize: func <nome\_> (<nome_param> `...<type>`) {. . .}

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

1.  **Forma completa:**
    ```
      exemplo := exemploStruct {
        var1:  valor1,
        var2:  valor2,
        var3:  valor3,
      }
    ```
2.  **Forma reduzida:**

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

1. `Ponteiros`: (<var*> \*<struct*>)

   - Quando queremos `alterar` valores de variáveis da struct `de forma persistente`.
   - Quando queremos `otimizar` o `uso de memória` do programa.

2. `Forma padrão`: (<var*> <struct*>)

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

1.  **Inicialização de servidor**

    **Sintaxe:** `http.ListenAndServe("<porta>", <handler_func>)`

    Esse comando inicia um servidor http na porta indicada, e utiliza a "handler_func" para gerenciar as requisições ao servidor.

    **Ex:**

        http.ListenAndServe(":8000", nil)

    Passamos "nil" ao invés de uma "handler_func", quando não queremos gerenciar as requisições ao servidor.

2.  **Rotas**

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

   import (\_ "github.com/go-sql-driver/mysql")

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

## Concurrency

Concurrency em go é uma forma de executar várias funções ao mesmo tempo, sem a necessidade de uma função esperar a finalização de outra para executar. Para isso utilizamos a palavra chave `go` antes da função a ser executada. Cada uso da palavra chave `go` inicia uma nova `goroutine` que roda em paralelo a mainroutine, goroutine principal utilizada pela função main.

**Ex:**

```
count := [5]int{1, 2, 3, 4, 5}
for _, v := range count {
  go printCount(v)
}
```

**Obs:** Ao utilizarmos a palavra chave `go` dessa forma, o programa como um todo, ao chegar ao fim, não espera todas as funções terminarem de executar para cessar, assim, o programa pode apresentar comportamentos indesejados. Para contornar temos os chamados `Channels`.

### Channels

Channels é uma forma que a linguagem GO utiliza para que uma função executada em paralelo à função main possa informar-la de seu término. Através dessa informação, a função main espera pelo término da função em paralelo para que possa cessar.

**Criação:** channel := `make(chan <type>)`

#### Uso:

Quando um channel é criado, por padrão, o channel é inicializado vazio. Com isso, a função main aguarda a incerção de algum valor no channel para que possar finalizar apropriadamente.

- **Inserção de valor:** `channel <- <valor>`.

- **Chamada de um channel:** "`<- channel`".

**Ex:**

```
func someFunction(ch chan bool) {
	time.Sleep(time.Second)
	fmt.Print("Função executada!")
	ch <- true  // Atribuindo valor ao channel.
}
```

```
func main() {
	channel := make(chan bool)
	go someFunction(channel)
	<-channel // Chamando channel na função main.
}
```

**Obs:** Para que um channel possa ser executado, é preciso chamá-la na função main.

### Buffered Channels

Channels, por padrão, são criados com capacidade = 1. Isso significa que apenas um valor pode ser inserido em um channel simples. Buffered channels são channels criados com capacidade superior a 1.

#### Criação: `make(chan <type>, <capacidade>)`

**Ex:**

```
func main() {
	channel := make(chan string, 2)
	channel <- "Primeira mensagem"
	channel <- "Segunda mensagem"

	fmt.Println(<-channel)
	fmt.Println(<-channel)
}
```

**Obs:** Channels armazenam valores utilizando a fila como estrutura de dados, onde o primeiro a entrar é o primeiro a sair (FIFO). Sendo assim, ao chamar um channel `<-channel`, o primeiro valor na fila é extraído, dando lugar aos demais.

### Iterando Channels

Podemos iterar channels de 3 formas: `for loop`, `for range` ou `for (while)`.

**Funçao count10:**

```
go func(channel chan string) {
  for i := 0; i < 10; i++ {
    score := rand.Intn(10) + 1
    channel <- fmt.Sprintf("%d°- Score: %d", i+1, score)
  }
  close(channel)  // Fechando channel
}(channel)
```

`for loop`:

```
for i := 0; i < 10; i++ {
  fmt.Println(<-channel)
}
```

`for range`:

```
for mensagem := range channel {
  fmt.Println(mensagem)
}
```

`for (while)`:

```
for {
  mensagem, open := <-channel
  if !open {
    break
  }

  fmt.Println(mensagem)
}
```

**Obs:** Em loops do tipo `for range` ou `for (while)` devemos utilizar o comando `close(<chanel>)` ao final da última execução de uma função em paralelo, pois loops for range sempre checam se o próximo ítem do channel existe. Sendo assim mesmo após percorrerem todo o channel, ainda assim produzem o erro `deadlock` ao final. Para evitar isso devemos fechar o channel antes que isso ocorra.

### Channel Select

O select verifica quais channels estão prontos para serem executados e executa uma chamada de channel `<-channel` com base em seus casos (case) definidos.

**Ex:**

```
candidato1, candidato2 := make(chan string), make(chan string)
go elegerGanhador(candidato1, "Candidato 1")
go elegerGanhador(candidato2, "Candidato 2")

select {
  case vencedor := <-candidato1:
    fmt.Println(vencedor, "venceu!")
  case vencedor := <-candidato2:
    fmt.Println(vencedor, "venceu!")
  default:
    fmt.Println("Não há vencedores!")
}
```

Quando a função main chega em um `select`, quando há multiplos channels, é seu dever apenas executar a chamada de um channel, `e apenas um`, que esteja pronto no momento do select. Se mais de um channel está pronto, o select irá executar um aleatoriamente. No caso de não existir nenhum channel pronto, o select executará um caso `default`.

### WaitGroup

WaitGroup é uma forma de informar a mainroutine que aguarde a finalização de outras goroutine antes de prosseguir para o próximo comando.

**Inicializando um WaitGroup:** `var wait sync.WaitGroup`

**Adicionando quantidades:** `wait.Add(<quantidade>)`

**Comando esperar:** `wait.Wait()`

**Comando prosseguir:** `wait.Done()`

Deve ser adicionado ao WaitGroup a quantidade de vezes que a mainroutine deve esperar por uma goroutine antes de prosseguir. Com isso, ao final de cada goroutine deve ser utilizada o comando `wait.Done()` para informar de sua finalização.

**Ex:**

```
func main() {
	var wait sync.WaitGroup
	nomes := []string{"João", "Maria", "José"}
	wait.Add(len(nomes))  // Adicionando 3 esperas

	for _, nome := range nomes {
		go func(nome string, wait *sync.WaitGroup) {
			fmt.Println("Hello, ", nome)
			wait.Done()
		}(nome, &wait)
	}

	wait.Wait()
	fmt.Println("Fim do programa!")
}
```

Ao adicionado 3 esperas ao WaitGroup, o comando `wait.Wait()` da função main só será satisfeita após a execução do comando `wait.Done()` por 3 vezes.

**Obs:** Ao passar um WaitGroup como parâmetro de uma função, `é necessário enviar seu endereço de memória`, pois se não, um novo WaitGroup será criado dentro da função e o WaitGroup criado na função main nunca será alterado.

### Mutex

Mutex é uma técnica usada para evitar que múltiplas goroutines acessem ou alterem a mesma memória ao mesmo tempo, o que pode levar a resultados inesperados ou erros.

**Inicialização:** `var mutex sync.Mutex`

**Bloquear memória:** `mutex.Lock()`

**Desbloquear memória:** `mutex.Unlock()`

Quando uma goroutine chama a função `mutex.Lock()`, ela bloqueia a continuidade de todas as outras até que a função `mutex.Unlock()` seja chamada. Isso garante que apenas uma goroutine possa alterar uma variável ou performar uma ação de cada vez.

**Ex:**

```
var (
	counter int
	mutex   sync.Mutex
)
```

```
func main() {
	for i := 0; i < 1000; i++ {
		go func() {
			mutex.Lock()
			counter++
			mutex.Unlock()
		}()
	}

	time.Sleep(1 * time.Second)
	fmt.Println("Counter: ", counter)
}
```

### RWMutex

O `sync.RWMutex` é uma estrutura em Go que implementa a funcionalidade de um Mutex de leitura/escrita, cujas funções `rwMutex.RLock()` e `rwMutex.RUnlock()` são específicas para leitura de dados e `rwMutex.Lock()` e `rwMutex.Unlock()` apenas para escrita em variáveis. Apenas uma goroutine pode escrever de cada vez, contudo a leitura dos dados é liberada para todas as goroutine executarem ao mesmo tempo.

**Ex:**

```
var (
	myMap = make(map[string]string)
	mutex sync.RWMutex
)
```

```
func write(key, value string) {
	mutex.Lock()
	myMap[key] = value
	mutex.Unlock()
}

func read(key string) {
	mutex.RLock()
	fmt.Println(myMap[key])
	mutex.RUnlock()
}
```

```
func main() {
	go write("Carro", "Vermelho")
	go read("Carro")
	go write("Carro", "Azul")
	go read("Carro")

	time.Sleep(1 * time.Second)
	fmt.Println("Done!")
}
```

As funções write e read usam o sync.RWMutex para garantir que apenas uma goroutine possa escrever no mapa de cada vez, mas várias goroutines podem ler do mapa ao mesmo tempo. Com isso, "Vermelho" é printado no terminal duas vezes, mesmo sendo alterado para "azul", pois `read()` é executado ao mesmo tempo, enquanto `write()` é executada uma de cada vez.

### Once

`sync.Once` é um comando que garante que uma função seja executada apenas uma vez. Assim, quando uma goroutine termina sua execução as demais são paradas automaticamente.

**Inicialização:** `var once sync.Once`

**Uso:** `once.Do(<função>)`

**Ex:**

```
var (
	acertou = false
)

func adivinharNumero() bool {
	return rand.Intn(10) == 0
}

func marcarAcerto() {
	acertou = true
}
```

```
func main() {
	var wait sync.WaitGroup
	wait.Add(100)

	var once sync.Once

	for i := 0; i < 100; i++ {
		go func() {
			if adivinharNumero() {
				once.Do(marcarAcerto)
			}
			wait.Done()
		}()
	}

	wait.Wait()
	if acertou {
		fmt.Println("Acertou!")
	} else {
		fmt.Println("Errou!")
	}
}
```

Neste exemplo a função `once.Do()` garante que assim que o número secreto for acertado, as demais goroutine irão ser interrompidas, afim de evitar operações desnecessárias.

### Resource Pool

`sync.Pool` é uma estrutura que armazena itens temporários que podem ser reutilizados, o que pode ajudar a melhorar a eficiência ao reduzir alocações de memória. Utilizando `sync.Pool` criamos uma função que cria uma nova variável e a insere no pool. Para ter acesso ao pool utilizamos o método `Get()`, que remove uma variável criada do pool. Utilizando o método `Put()`, retornamos a variável retirada de volta ao pool para que outras goroutine possam reutilizá-la.

**Criação:**

```
memPool := &sync.Pool{
  New: func() interface{} {
    mem := make([]byte, 1024)
    return &mem
  },
}
```

A função `New` é uma função que será chamada sempre que você tentar obter um item do pool e o pool estiver vazio. Esta função deve retornar um novo item que será colocado no pool.


**Uso:**

```
const chamadas = 1024 * 1024

wg := &sync.WaitGroup{}
wg.Add(chamadas)
for i := 0; i < chamadas; i++ {
  go func() {
    defer wg.Done()
    mem := memPool.Get().(*[]byte)

    fmt.Sprintln("Alocando memória...")
    memPool.Put(mem)
  }()
}

wg.Wait()
```

Neste exemplo, você pode obter um slice de bytes do `memPool` usando o método `Get`. Se o `memPool` estiver vazio, ele chamará a função `New` para criar um novo slice de bytes. Se o `memPool` já tiver um slice de bytes armazenado, ele retornará esse slice e removerá-o do pool. Depois de terminar de usar o slice de bytes, você pode colocá-lo de volta no pool usando o método `Put`, para que ele possa ser reutilizado no futuro.

**Obs:** A utilização desse método garante que apenas a quantidade necessária de memória seja alocada, assim, evitando desperdícios.

### Cond (Signal & Broadcast)

`sync.Cond` trabalha em conjunto com `Mutex` para bloquear e desbloquear a execução de goroutines. Utilizando `sync.NewCond(&<mutex>)` criamos uma nova `cond` atrelada a uma `mutex` já existente. 

**Criação:** 

    cond := sync.NewCond(&sync.Mutex{})

`sync.NewCond()` nos da acesso a cinco métodos:

- `cond.L.Lock()`: Acessa o método `mutex.Lock()` da mutex passada como parâmetro.

- `cond.L.Unlock()`: Acessa o método `mutex.Unlock()` da mutex passada como parâmetro.

- `cond.Wait()`: Semelhante ao método `WaitGroup.Wait()`. Faz todas as goroutine durmam.

- `cond.Signal()`: Envia um sinal para que `uma` goroutine adormecida acorde.

- `cond.Broadcast()`: Envia um sinal para que `todas` as goroutine adormecidas acordem.

**Ex:**

```
var pronto bool

func baixando(cond *sync.Cond) {
	func() {
		tempo := time.Duration(rand.Intn(5)+1) * time.Second
		time.Sleep(tempo)
	}()
	pronto = true
	cond.Signal()
}
```
```
func main() {
	cond := sync.NewCond(&sync.Mutex{})

	go baixando(cond)
	intervalo := 0

	cond.L.Lock()
	for !pronto {
		intervalo++
		cond.Wait()
	}
	cond.L.Unlock()

	fmt.Println("Estamos prontos após", intervalo, "intervalos.")
}
```
1. **Obs:** Utilize `cond.Broadcast()` apenas quando mais de uma goroutine são iniciadas, assim, acordando todas elas de uma vez.

2. **Obs:** É importante notar que `cond.Wait()` não retorna automaticamente quando a condição é verdadeira - em vez disso, ele retorna quando a condição pode ter mudado. Isso significa que você geralmente vai querer chamar `cond.Wait()` em um loop que verifica a condição que você está esperando.

### Map

O pacote `sync` fornece métodos para realizar operações com maps, visto que maps comuns, ao serem utilizados por outras goroutine, são ineficientes e podem apresentar erros.

**Criação:** `myMap := sync.Map{}`

**Métodos principais:**

- `myMap.Store(<key>, <value>)`: Insere uma chave e seu respectivo valor no map.

- `myMap.Load(<key>)`: Retorna o valor da chave passada como parâmetro.

- `myMap.Delete(<key>)`: Deleta o conjunto chave e valor do map.

- `myMap.LoadOrStore(<key>, <value>)`: Retorna o valor da chave passada como parâmetro. Se a chave não existe, ele a insere e depois retorna seu valor inserido.

- `myMap.LoadAndDelete(<key>)`: Deleta o conjunto chave e valor do map e retorna seu antigo valor.

### Atomic

O pacote `atomic` em Go fornece funções de baixo nível para operações atômicas de sincronização. São utilizadas em programação multithread para garantir que as operações de leitura e gravação em um valor compartilhado sejam feitas como uma única operação ininterrupta.

Ao declarar uma variável podemos usar o pacote `atomic` para atribuir ou ler valores da variável se forma segura em multithread.

**Criação:** `atom := atomic.Value{}`

**Métodos Principais:**

- `atom.Store(<valor>)`: Atribui um valor à variável.

- `atom.Load()`: Retorna o valor atribuído à variável.

- `atom.Swap(<valor>)`: Atribui um novo valor à variável e retorna o valor antigo. Se não houver, retorna `nil`.

- `atom.CompareAndSwap(<esperado>, <novo>)`: Compara se o valor esperado é igual ao atual e retorna um booleano. Se a comparação for verdadeira ele retorna true e atualiza a variável para o novo valor indicado.

**Obs:** Ao utilizar o pacote `atomic` não faz-se necessário utilizar `Mutex`, pois `atomic` já garante a continuidade de leitura e escrita de dados em operações multithread.