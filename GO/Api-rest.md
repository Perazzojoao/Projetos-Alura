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