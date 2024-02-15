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


## Banco de dados (GORM)

**Instalação:**

    go get -u gorm.io/gorm

### Conexão (Postgres)

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