# Api Rest Gin

Gin é um framework GO utilizado para criação de servidores web http.

## Instalação

    go get -u github.com/gin-gonic/gin

## Iniciando servidor

Para criar o servidor, nas configurações padrões, utilizamos a função `gin.Default()` e depois, para iniciá-lo, utilizamos `r.Run("<porta>")`.

**Ex:**

```
  r := gin.Default()

  err := r.Run()
  if err != nil {
    log.Panic(err.Error())
  }
```

**Obs:** A função `"r.Run()"` irá iniciar o servidor na porta `:8080` por padrão, caso não seja especificada outra porta.

## Rotas

Para criar rotas devemos primeiro especificar o tipo de requisição que a rota vai suportar (GET, POST, PUT, DELETE...). No Gin, as rotas são criadas já com esses métodos em questão: `GET("<rota>", <handlerFunc>)`, `POST("<rota>", <handlerFunc>)`, `PUT("<rota>", <handlerFunc>)`, `DELETE("<rota>", <handlerFunc>)`.

**Ex:**

    r.GET("/alunos", controllers.GetTodosAlunos)

### HandlerFunc

A "Handlefunc" é uma função que serve para lidar com as requisições que chegam na sua rota. Ela recebe como parâmetro `c *gin.Context `.

**Ex:**

```
  func GetTodosAlunos(c *gin.Context) {
    c.JSON(200, gin.H{
      "id":   "1",
      "nome": "João Victor Perazzo",
    })
  }
```

**Obs:** Nesse exemplo retonamos como resposta um JSON com a função `JSON(<status_code>, <obj_body>)`. `gin.H{}` é equivalente a uma instância de `map[string]any`.

### Parâmetros de URL

Para passar variáveis na url utilizamos `:<nome_variável>`.

**Ex:**

    r.GET("/:nome", controllers.Saudacao)

O `c *gin,Context` da HandlerFunc tem acesso aos valores passados. Para utilizarmos podemos usar a função `c.Params.ByName("<nome_variável>")` ou `c.Params.GET("<nome_variável>")`

- **ByName( ):** Procura pela primeira variável passada e retorna seu valor.

- **GET( ):** Procura pela primeira variável passada e retorna seu valor e um bool. Caso não ache, retorna uma string vazia e false.

**Ex:**

    nome := c.Params.ByName("nome")

## CORS

Cors é uma política de segurança que impede o acesso de domínios externos à sua aplicação backend. Para liberar o acesso, é necessário especificar as URL's permitidas.

### CORS com GIN

**Documentação:** [CORS](https://github.com/gin-contrib/cors)

**Instalação:**

    go get github.com/gin-contrib/cors

**Uso:**

Cors são estabelecidos via middlewares, que são configurações que afetam todas as rotas. Para Ciar um middleware utilize a função `Use()`. Como parâmetro, podemos criar um novo CORS ou utilizar um padrão do GIN: `cors.New(<cors.Config{}>)` ou `cors.Default()`.

1. `cors.New()`: Cria um novo CORS do zero. Configuração customizada.
2. `cors.Default()`: Utiliza a config padrão do GIN para CORS (`AllowAllOrigins = true`)

**Configs:**

Para configurar o CORS, utilize como parâmetro a struct `cors.Config{}`.

**Ex completo:**

```
  r.Use(cors.New(cors.Config{
      AllowOrigins:     []string{"http://localhost:8000"},
      AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
      AllowHeaders:     []string{"Content-Length"},
      AllowCredentials: true,
      MaxAge:           15 * time.Minute,
  }))
```

## Docker postgres server

Ao criar um novo server postgres precisamos informar um endereço. No terminal digite:
`docker-compose exec postgres sh` e `hostname -i`. O output é o endereço desejado.

## Banco de dados (GORM)

**Instalação:**

    go get -u gorm.io/gorm

### Conexão (Postgres)

**Plugin postgres:**

    go get gorm.io/driver/postgres

Para realizar a conexão com um DB já existente, precisamos utilizar `gorm.Open()`, que recebe como parâmetro a abertura do banco de dados `postgres.Open()`

**Ex:**

    DB, err = gorm.Open(postgres.Open(dsn))

**DNS:** É uma string que contém as informação de acesso ao banco de dados. As informações devem ser preenchidas com base no `docker-compose.yml`, no que diz respeito ao banco de dados.

**Ex:**

    dsn := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"

#### Exemplo de conexão:

```
var (
	DB  *gorm.DB
	err error
)

func ConectarDB() {
	dsn := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"
	DB, err = gorm.Open(postgres.Open(dsn))
	if err != nil {
		fmt.Println("Erro ao conectar com database")
		log.Panic(err.Error())
	}
}
```

### Criação de tabelas no banco de dados com GORM

Para criar tabelas do zero, primeiro precisamos criar uma struct que irá servir de base para a tabela a ser criada.

**Ex:**

```
 type Aluno struct {
	gorm.Model
	Nome string `json:"nome"`
	CPF  string `json:"cpf"`
	RG   string `json:"rg"`
}
```

**Obs:** O `gorm.Model` adiciona automaticamente à struct as colunas ID, CreatedAt, UpdatedAt, DeletedAt.

Após a criação da struct, devemos adicionar ao final da função `ConectarDB()` o comando que irá criar a tabela: `DB.AutoMigrate(&<struct_base{}>)`.

**Ex completo:**

```
  func ConectarDB() {
    dsn := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"
    DB, err = gorm.Open(postgres.Open(dsn))
    if err != nil {
      log.Println("Erro ao conectar com DB")
      log.Panic(err.Error())
    }
    DB.AutoMigrate(&models.Aluno{})
  }
```

### SELECT All

Para enviar uma lista com todos os dadosa encontrados devemos, primeiro, criar uma variável de destino.

**Variável a receber o SELECT:** Deve ser um struct que contenha todos os campos da tabela do DB -> **Ex:** `var alunos []models.Aluno`.

Após isso, utilizamos a função `DB.Find(&<destino>)`, e passamos o endereço de memória da variável que desejamos atribuir os valores.

**Ex:**

```
  func GetTodosAlunos(c *gin.Context) {
    var alunos []models.Aluno
    database.DB.Find(&a)
    c.JSON(200, a)
  }
```

### SELECT First

Para selecionar o primeiro valor encontrado utilizamos `First(&<destino>, <condições>)`

**Ex:**

    database.DB.First(&aluno, id)

`First()` irá retonar o primeiro valor encontrado, dado uma certa condição, para o endereço de memória passado.

**Ex completo:**

```
  func GetAluno(c *gin.Context) {
    var a models.Aluno
    id := c.Params.ByName("id")

    database.DB.First(&a, id)
    if a.ID == 0 {
      c.JSON(http.StatusNotFound, gin.H{
        "Not found": "Id não encontrado",
      })
      return
    }
    c.JSON(http.StatusOK, a)
  }
```

### INSERT

Para adicionarmos dados ao banco de dados utilizamos a função `Create(&<valor>)`, em que passamos o endereço de memória da variável que contém os valores a serem inseridos como parâmetro.

**Ex:**

    database.DB.Create(&aluno)

Para isso, precisamos receber um json pelo método "POST" e adicionar seu conteúdo a variável "aluno".

**Acessando JSON recebido:** `c.ShouldBindJSON()`

    var aluno models.Aluno
      err := c.ShouldBindJSON(&aluno)

**Ex completo:**

```
  func AddAluno(c *gin.Context) {
    var aluno models.Aluno
    err := c.ShouldBindJSON(&aluno)
    if err != nil {
      log.Println("Erro ao inserir aluno do DB.")
      c.JSON(http.StatusBadRequest, gin.H{
        "Error": err.Error(),
      })
      return
    }

    database.DB.Create(&aluno)
    c.JSON(http.StatusOK, aluno)
  }
```

### DELETE

Para deletarmos um valor no banco de dados precisamos apenas do id do ítem específico. Assim, acessamos o id através de `c.Params.ByName("<nome_variável>")`. Com isso, utilizamos a função `database.DB.Delete(&<valor>, <condições>)` para deletar o ítem.

**Ex completo:**

```
  func DeleteAluno(c *gin.Context) {
    var a models.Aluno
    id := c.Params.ByName("id")

    database.DB.Delete(&a, id)
    if a.ID != 0 {
      c.JSON(http.StatusNotFound, gin.H{
        "Not found": "Id não encontrado",
      })
      return
    }
    c.JSON(http.StatusOK, gin.H{
		  "DELETE": "Alunoi deletado com sucesso",
	  })
  }
```

### UPDATE

Para atualizarmos um valor no banco de dados precisamos do id do ítem e dos dados atualizados.

**Recebendo id:**

    var aluno models.Aluno
    id, found := c.Params.Get("id")

**Acessando JSON:**

    err := c.ShouldBindJSON(&aluno)

Após isso, precisamos encontrar o ítem antigo no banco de dados: `database.DB.First(&aluno, id)`. Com isso, recebemos o json com os dados atualizados e utilizamos a função `Save(&<valor>)` para salvar as alterações no banco de dados.

**Ex completo:**

```
  func EditAluno(c *gin.Context) {
    var a models.Aluno
    id := c.Params.ByName("id")

    database.DB.Find(&a, id)
    if a.ID == 0 {
      c.JSON(http.StatusNotFound, gin.H{
        "Not found": "Id não encontrado",
      })
      return
    }
    err := c.ShouldBindJSON(&a)
    if err != nil {
      log.Println("Erro ao receber json.")
      c.JSON(http.StatusBadRequest, gin.H{
        "Erro": err.Error(),
      })
      return
    }
    database.DB.Model(&a).UpdateColumns(a)
    c.JSON(http.StatusOK, a)
  }
```

## .ENV files

Para ter acesso às variáveis de ambiente do arquivo .env, precisamos estabelecer uma conexão com ele. Para isso utilizamos uma biblioteca chamada `godotenv`.

**Instalação:**

    go get github.com/joho/godotenv

### Uso

Para abrir uma conexão com o .env utilizamos `godotenv.Load()`. Após isso, temos acesso às variáveis contidas no .env através da função `os.Getenv("<nome_variável>")`.

**Ex completo:**

```
  godotenv.Load()
  dns := fmt.Sprintf("host=localhost user=%s password=%s dbname=%s port=5432 sslmode=disable",
    os.Getenv("DB_USER"),
    os.Getenv("DB_PASSWORD"),
    os.Getenv("DB_NAME"),
  )
```

## Validações (GO validator)

[Validator](https://pkg.go.dev/github.com/go-playground/validator/v10#section-readme) é uma biblioteca destinada o desenvolvimento de validações de dados.

### Instalação

**Go get:**

    go get github.com/go-playground/validator/v10

**Import:**

    import "github.com/go-playground/validator/v10"

### Uso

Para validar os dados, primeiro precisamos especificar as validações que vamos utilizar no projeto

#### Especificando validações:

Na struct que criamos como base para a tabela no banco de dados, especificamos todas as validações necessárias: `validate:"<tag>"`

```
  type Aluno struct {
    gorm.Model
    Nome string `json:"nome" validate:"required"` -> Obrigatório
    CPF  string `json:"cpf" validate:"len=11,number"`  -> Tamanho de exatamente 11 e apenas caracteres numéricos
    RG   string `json:"rg" validate:"len=9,number"`  -> Tamanho de exatamente 9 e apenas caracteres numéricos
  }
```

**Obs:** A validação é feita `seguindo a ordem` das tags passadas. Além disso, múltiplas validações devem ser separadas por vírgula ( , ) e `sem espaço`.

Para uma lista completa com todas as validações disponíveis, visite o site oficial da [Validator](https://pkg.go.dev/github.com/go-playground/validator/v10#section-readme).

#### Criando funções para validação:

Para validar dados temos que instanciar uma nova validação, sendo assim, utilizamos : `<validação> := validator.New(...<options>)`. Além disso, é recomendável que passemos a função `validator.WithRequiredStructEnabled()` como parâmetro.

**Ex:**

    var validate = validator.New(validator.WithRequiredStructEnabled())

Com isso podemos criar uma função responsável por validar a struct indicada:
`func ValidaStruct(<struct> *<Struct_type>) error {...}`. Para validar a struct utilizamos a função `validate.Struct(<endereço_struct>)`.

**Ex completo:**

```
  var validate = validator.New(validator.WithRequiredStructEnabled())

  func ValidaAluno(aluno *Aluno) error {
    if err := validate.Struct(aluno); err != nil {
      return err
    }
    return nil
  }
```

#### Combinando tags:

Múltiplas validações podem ser combinadas em uma única tag. Para isso utilize: `validate.RegisterAlias("<nova_tag>", "<combinação_tags>")`.

**Ex:**

    validate.RegisterAlias("cpf", "len=11,number")

## Testes

Para criar testes precisamos criar um arquivo `*_test.go` na raíz do projeto. Nesse arquivo, criamos uma função main para testes: `func Test*(t *testing.T) {...}`. Ao rodar o comando `go test` o GO executará todas funções `Test*()`.

**Ex:**

```
  func TestFalhador(t *testing.T) {
    t.Fatalf("Teste falhou!")
  }
```

**Obs:** Para executar apenas um teste específico utilize `go test -run <nome_função_teste>`.

### Teste de StatusCodeOK:

```
  func SetupRoutersTest() *gin.Engine {
    gin.SetMode(gin.ReleaseMode)
    r := gin.Default()
    return r
  }
```

```
  func TestStatusCode(t *testing.T) {
    r := SetupRoutersTest()
    r.GET("/alunos/exemplo", controllers.Exemplo)

    req, _ := http.NewRequest("GET", "/alunos/exemplo", nil)  -> Cria requisição
    resp := httptest.NewRecorder()  -> Cria variável que guardará resposta
    r.ServeHTTP(resp, req)  -> Envia requisição criada

    if resp.Code != http.StatusOK {
      t.Fatalf("Status error: valor recebido foi %d e o esperado era %d.", resp.Code, http.StatusOK)
    }
  }
```

## Testes com testify

[Testify](https://github.com/stretchr/testify) é uma biblioteca para testes em GO.

### Instalação

    go get github.com/stretchr/testify

### Imports disponíveis

```
github.com/stretchr/testify/assert
github.com/stretchr/testify/require
github.com/stretchr/testify/mock
github.com/stretchr/testify/suite
github.com/stretchr/testify/http (deprecated)
```

### Uso

Para utilizar suas funções, primeiro criamos um novo assert utilizando a função `assert.New(<t *testing.T>)`.

**Ex:**

    assert := assert.New(t)

**Assert functions:**

- **Assert equality:** `assert.Equal()`

- **Assert inequality:** `assert.NotEqual()`

- **Assert for nil (good for errors):** `assert.Nil()`

- **Assert for not nil (good when you expect something):** `assert.NotNil()`

[Clique aqui](https://github.com/stretchr/testify?tab=readme-ov-file#assert-package) para exemplos.

#### Ex teste statusCode e resposta

```
  func TestRouteExemplo(t *testing.T) {
    r := SetupRoutersTest()
    r.GET("/alunos/exemplo", controllers.Exemplo)

    // Enviando requisição
    req, _ := http.NewRequest("GET", "/alunos/exemplo", nil)
    resp := httptest.NewRecorder()
    r.ServeHTTP(resp, req)

    // Testando StatusCode
    assert := assert.New(t)
    assert.Equal(http.StatusOK, resp.Code)

    // Testando Corpo da resposta
    mockResp := `{"cpf":"00000000000","nome":"Fulano","rg":"000000000"}`
    respBody, _ := io.ReadAll(resp.Body)
    assert.Equal(mockResp, string(respBody))
  }
```
