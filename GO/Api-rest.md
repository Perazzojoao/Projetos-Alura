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
