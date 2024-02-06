# Api Rest

> Tutorial de criação de aplicação web restfull

## Iniciando servidor

**Sintaxe:** `http.ListenAndServe("<porta>", <handler_func>)`

Esse comando inicia um servidor http na porta indicada, e utiliza a "handler_func" para gerenciar as requisições ao servidor.

**Ex:**

    http.ListenAndServe(":8000", nil)

Passamos "nil" ao invés de uma "handler_func", quando não queremos gerenciar as requisições ao servidor.

## Rotas

**Sintaxe:** `http.HandleFunc("<rota>", <handler_func>)`

A "handler_func", nesse caso, é a função que será chamada ao fazermos uma requisição na rota indicada, assim, a função é responsável por retornar uma resposta.

**Ex:**

```
http.HandleFunc("/", json)
```

```
func json(w http.ResponseWriter, r *http.Request) {
  json.NewEncoder(w).Encode(models.Personalidades)
}
```

A func `"json"` nesse caso, é responsável por `enviar um código json` dentro da `rota raíz ("/")`.

## Rotas com Gorilla Mux

Gorilla Mux é uma biblioteca de gerenciamento de rotas para ajudar no desenvolvimento de servidores web.

### **Instalação:**

    go get -u github.com/gorilla/mux

### **Uso:**

Substituimos as rotas padrões do go (`http.HandleFunc("<rota>", <handler_func>)`) pelas rotas do mux:

1. `r := mux.NewRouter()`
2. `r.HandleFunc("<rota>", <handler_func>)`

`r.HandleFunc("<rota>", <handler_func>)` funciona da mesma forma que a rota padrão do go (`http.HandleFunc("<rota>", <handler_func>)`)

**Ex:**

```
	r := mux.NewRouter()
	r.HandleFunc("/", controllers.Home)
	r.HandleFunc("/api/p", controllers.GetTodasPersonalidades).Methods("Get")
	r.HandleFunc("/api/p/{id}", controllers.GetPersonalidade).Methods("Get")
```

Após isso, devemos passar a nova rota para a função do servidor, para que a mesma sejas utilizada ao invés da rota padrão:

    http.ListenAndServe(":8080", r)

**Obs:** Adicionalmente, podemos especificar os tipos de requisições aceitas por cada rota. Para isso, ao final da rota, utilize o comando `Methods("<tipos_requisições>")`.

### Variáveis na URL:

Podemos passar variáveis no caminho da URL utilizando `{<nome>}`, ao final do caminho

**Ex:** `"/api/personalidades/{id}"`

Para acessá-las, utilizamos: `vars := mux.Vars(r)`. "vars" é um map em que a chave é o nome da variável passada na URL.

**Ex:** `id := vars["id"]`

## Banco de Dados com gorm

[Gorm](https://gorm.io/) é uma biblioteca go para acesso e manipulação de banco de dados SQL.

**Instalação:** `go get -u gorm.io/gorm`

Para cada banco de dados é necessário baixar o seu respectivo driver. No exemplo atual utilizaremos postgres

**Driver:** `go get gorm.io/driver/postgres`

### Conexão:

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
### Query (SELECT):
Para executar um select, primeiro precisamos criar uma variável do exato mesmo tipo contido no db.

**Tipo db:**

```
type Personalidade struct {
	Id       int    `json: "id"`
	Nome     string `json:"nome"`
	Historia string `json:"historia"`
}
```

**Variável a receber o SELECT:** `var p []Personalidade` (Vai receber uma lista de personalidades).

Após isso, utilizamos a função `DB.Find(&<destino>)`, e passamos o endereõ de memória da variável que desejamos receber os valores.

**Ex:**

```
func GetTodasPersonalidades(w http.ResponseWriter, r *http.Request) {
	var p []models.Personalidade
	database.DB.Find(&p)
	json.NewEncoder(w).Encode(p)
}
```

**Obs:** A função `Find()` vai procurar, automaticamente, pelos dados correspondentes ao tipo de variável passado, e vai devolver uma lista com dodas elas.