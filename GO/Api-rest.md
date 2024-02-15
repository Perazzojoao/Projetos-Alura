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

### Middleware

Middleware é uma forma de aplicar uma funcionalidade a todas as rotas criadas sem a necessidade de copiar código.

**Criação:** Devemos criar um package novo e definir uma função à ela.

- **Função:**

      ```
      func ContentType(next http.Handler) http.Handler {
      	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
      		.
      		.
      		.
      		next.ServeHTTP(w, r)
      	})
      }
      ```

  No exemplo em questão, queremos adicionar um "content-type" ao header das requisições do servidor para todas as rotas, para que todas devolvam um json.

  **Ex:**

  ```
  func ContentType(next http.Handler) http.Handler {
  	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  		w.Header().Set("Content-type", "application/json")
  		next.ServeHTTP(w, r)
  	})
  }
  ```

**Uso:** Para utilizar o middleware criado, devemos utilizar a função `Use()` no "package routes".

- **Ex:**

      r := mux.NewRouter()
      r.Use(middleware.ContentType)

## CORS

Cors é uma política de segurança que impede o acesso de domínios externos à sua aplicação backend. Para liberar o acesso, é necessário especificar as URL's permitidas.

### CORS com gorilla mux handlers

1. **Instalação:**

    go get github.com/gorilla/handlers

2. **Uso:**

	Para liberar o CORS, utilizamos 2 funções da biblioteca adicionada: `handlers.CORS()` e `handlers.AllowedOrigins()`. Essas funções devem ser passadas, como parâmetro, à função GO responsável por aniciar o servidor na porta indicada.

	**Ex:**

		http.ListenAndServe(":8080", handlers.CORS(handlers.AllowedOrigins([]string{"localhost:8000"}))(r))
	
	**Obs:** Nesse exemplo, estamos liberando o acesso `apenas` ao "localhost:8000". Para dar acesso a mais domínios, inclua seu URL no array de string. Para liberear acesso a `todos os domínios`, passe apenas `"*"` como domínio.

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

### Query (SELECT ALL):

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

Após isso, utilizamos a função `DB.Find(&<destino>)`, e passamos o endereço de memória da variável que desejamos receber os valores.

**Ex:**

```
func GetTodasPersonalidades(w http.ResponseWriter, r *http.Request) {
	var p []models.Personalidade
	database.DB.Find(&p)
	json.NewEncoder(w).Encode(p)
}
```

**Obs:** A função `Find()` vai procurar, automaticamente, pelos dados correspondentes ao tipo de variável passado, e vai devolver uma lista com dodas elas.

### SELECT First

Para selecionar o primeiro valor encontrado utilizamos `First(&<destino>, <condições>)`

**Ex:**

    database.DB.First(&p, id)

`First()` irá retonar o primeiro valor encontrado, dado uma certa condição, para o endereço de memória passado.

**Ex completo:**

```
func GetPersonalidade(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	var p models.Personalidade

	database.DB.First(&p, id)
	json.NewEncoder(w).Encode(p)
}
```

### INSERT

Para adicionarmos dados ao banco de dados utilizamos a função `Create(&<valor>)`, em que passamos o endereço de memória da variável que contém os valores a serem inseridos como parâmetro.

**Ex:**

    database.DB.Create(&p)

Para isso, precisamos receber um json pelo método "POST" e adicionar seu conteúdo a variável "p". Sendo assim, temos que `decodificar um json` recebido pela api: `json.NewDecoder(r.Body).Decode(&p)`.

**Ex completo:**

```
func AddPersonalidade(w http.ResponseWriter, r *http.Request) {
	var p models.Personalidade
	json.NewDecoder(r.Body).Decode(&p) // Quando queremos receber um json
	database.DB.Create(&p)
	json.NewEncoder(w).Encode(p) // Quando queremos exibir ou enviar um json
}
```

**Obs:** Para o INSERT funcionar, precisamos receber um json no corpo de uma requisição do tipo POST, sendo assim, deve ser criada uma rota que apenas aceia requisições "POST".

    r.HandleFunc("/api/personalidades", AddPersonalidade).Methods("Post")

### DELETE

Para atualizarmos um valor no banco de dados precisamos apenas do id do ítem específico. Com isso, utilizamos a função `database.DB.Delete(&<valor>, <condições>)` para deletar o ítem.

**Ex completo:**

```
func DeletePersonalidade(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	var p models.Personalidade

	database.DB.Delete(&p, id)
	json.NewEncoder(w).Encode(p)
}
```

### UPDATE

Para atualizarmos um valor no banco de dados precisamos do id do ítem e dos dados atualizados.

**Recebendo id:**

    vars := mux.Vars(r)
    id := vars["id"]

Após isso, precisamos encontrar o ítem antigo no banco de dados: `database.DB.First(&p, id)`. Com isso, recebemos o json com os dados atualizados e utilizamos a função `Save(&<valor>)` para salvar as alterações no banco de dados.

**Ex completo:**

```
func EditPersonalidade(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	var p models.Personalidade

	database.DB.First(&p, id)
	json.NewDecoder(r.Body).Decode(&p)
	database.DB.Save(&p)
	json.NewEncoder(w).Encode(p)
}
```

**Obs:** Para o UPDATE funcionar, precisamos receber o "id" e um json no corpo de uma requisição do tipo PUT, sendo assim, deve ser criada uma rota que apenas aceia requisições "PUT".

    r.HandleFunc("/api/personalidades/{id}", EditPersonalidade).Methods("Put")
