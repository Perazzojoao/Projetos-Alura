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