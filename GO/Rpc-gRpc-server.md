# Rpc e gRpc

São protocolos de comunicação mais rápidos e eficientes que http e https. São utilizados principalmente para a comunicação entre micro serviços.

## Rpc

Servidores Rpc podem der criados e executados em paralelo a servidores http comuns

### Criação

Para criar um servidor Rpc, primeiro devemos criar uma função para tal `func RpcListen() error {...}`.
Nela, utilizamos o método `net.Listen(<network>, <address>)`, onde `network` é o tipo de conexão que será aceito pelo servidor e `addres` é o endereço de ip cujo o servidor irá aceitar requisições e a porta em que o servidor irá escutar.

**Ex:**

    listen, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", RpcPort))
    if err != nil {
      return err
    }
    defer listen.Close()

Endereço vazio ou "0.0.0.0" indica que serão aceitos `qualquer` endereços de ip.

Para que o servidor comece a ouvir por requisições, utilizamos o método `listen.Accept()`, que irá aguardar (bloquear a go routine) até que uma conexão seja realizada. Ao receber uma conexão, o método irá retornar uma nova conexão `rpcConn`. Com ela utilizamos o método `rpc.ServeConn(<conn>)`, passando `rpcConn` como parâmetro. Este método bloqueia a go routine até que a conexão seja desfeita pelo cliente.

Para que a main routine não seja bloqueada pelo servidor Rpc e possa estabelecer várias conexões em paralelo utilizamos os métodos de programação paralela do Go.

**Ex:**

```
for {
  rpcConn, err := listen.Accept()
  if err != nil {
    continue
  }
  go rpc.ServeConn(rpcConn)
}
```

Desta forma, o servidor aguarda por uma conexão e, ao conectar, estabelece a conexão em uma go routine separada, assim, ficando pronta para receber uma nova conexão em paralelo.

#### Ex completo

```
func (app *Config) RpcListen() error {
	log.Println("Starting RPC server on port ", RpcPort)

	listen, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", RpcPort))
	if err != nil {
		return err
	}
	defer listen.Close()

	for {
		rpcConn, err := listen.Accept()
		if err != nil {
			continue
		}
		go rpc.ServeConn(rpcConn)
	}
}
```

### Iniciando servidor

Antes de iniciarmos o servidor, precisamos registrar nosso servidor na função main através do método `rpc.Register(<receiver>)`. Por meio desse método registramos uma struct contendo todos os métodos disponíveis que serão chamados pelas requisições, semelhante às rotas de um servidor http.

Para isso criamos a struct `RPCServer` e adicionamos a ela todos os métodos disponíveis para o servidor.

**Ex:**

    type RPCServer struct{}

```
err = rpc.Register(new(RPCServer))
if err != nil {
  log.Panic(err)
}
```

Após isso, podemos chamar o método que irá iniciar o servidor

    go app.RpcListen()

**OBS:** Executamos o servidor em uma go routine separada para não bloquearmos a execução do servidor http, assim, executando os dois servidores em paralelo.

### Adicionando "rotas" ao servidor

Em vez de rotas, o servidor Rpc aceita métodos de uma struct como "rotas" para sua execução. Para isso, criamos a struct `type RPCServer struct{}` e adicionamos seus métodos.

Para receber os dados do corpo da requisição, criamos a struct `RPCPayload`

**Ex:**

    type RPCPayload struct {
      Name string
      Data string
    }

Os métodos devem ser criados aceitando os seguintes parâmetros:

- `payload RPCPayload`: Variável que irá receber o corpo da requisição.

- `resp *string`: Resposta do servidor que será enviada de volta ao cliente.

**Ex:**

```
func (r *RPCServer) Exemplo(payload RPCPayload, resp *string) error {...}
```

#### Ex completo

```
// RPCServer é a estrutura que implementa os métodos do servidor RPC
type RPCServer struct{}

// RPCPayload é a estrutura que representa os dados enviado via RPC
type RPCPayload struct {
	Name string
	Data string
}

// LogInfo é o método que escreve o payload para o mongoDB
func (r *RPCServer) LogInfo(payload RPCPayload, resp *string) error {
	colecton := client.Database("logs").Collection("logs")
	_, err := colecton.InsertOne(context.TODO(), data.LogEntry{
		Name:      payload.Name,
		Data:      payload.Data,
		CreatedAt: time.Now(),
	})
	if err != nil {
		log.Println("Error inserting log int to mongo: ", err)
		return err
	}

	*resp = "Processed payload via RPC: " + payload.Name
	return nil
}
```

### Estabelecendo conexão com o servidor

Para se conectar com o servidor Rpc através de um serviço externo utilizamos o método `rpc.Dial(<network>, <address>)`, onde `network` é o tipo de conexão aceito pelo servidor Rpc e `addres` é o endereço do servidor Rpc.

**Ex:**

    client, err := rpc.Dial("tcp", "logger-service:5001")
    if err != nil {
      app.errorJSON(w, err)
      return
    }

### Enviando requisições

Para enviar requisições, primeiro, devemos criar uma struct `exatamente igual` à criada para receber o corpo das requisições no servidor Rpc (`RPCPayload`).

**Ex:**

    type RPCPayload struct {
      Name string
      Data string
    }

Com isso, adicionanmos à struct os dados a serem enviados ao servidor. Alem disso, criamos uma variável responsável por receber a resposta do servidor, `var result <any>`. Esta variável deve ser do `mesmo tipo` da resposta do servidor.

Finalmente, utilizamos o método `client.Call(<serviceMethod>, <corpo>, &<reply>)` para enviar a requisição. Onde:

- `serviceMethod`: Método ("rota") a ser executado pelo servidor Rpc.

- `corpo`: Dados a serem enviados ao servidor Rpc.

- `reply`: Resposta do servidor Rpc.

**Ex:**

    err = client.Call("RPCServer.Exemplo", rpcPayload, &result)
    if err != nil {
    	app.errorJSON(w, err)
    	return
    }

**OBS:** O método a ser chamado deve ser escrito exatamente igual ao criado no servidor Rpc e deve corresponder a struct registrada no método `rpc.Register(new(RPCServer))` do mesmo.

#### Ex completo

```
type RPCPayload struct {
	Name string
	Data string
}
```

```
func (app *Config) logItemViaRPC(w http.ResponseWriter, l LogPayload) {
	client, err := rpc.Dial("tcp", "logger-service:5001")
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	rpcPayload := RPCPayload{
		Name: l.Name,
		Data: l.Data,
	}

	var result string
	err = client.Call("RPCServer.LogInfo", rpcPayload, &result)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	payload := jsonResponse{
		Error:   false,
		Message: result,
	}

	app.writeJSON(w, http.StatusOK, payload)
}
```

## gRpc

Semelhante a um Rpc convencional, porém atualizado para se comunicar com servidores escritos em linguagens de programação diferente.

### Dependências necessárias

- `protoc`: Baixar última versão para windows 64 bits (Executável deve estar no GOBIN)

  https://github.com/protocolbuffers/protobuf/releases

- `protoc-gen`:

      go install google.golang.org/protobuf/cmd/protoc-gen-go

- `protoc-gen-go-grpc`:

      go install google.golang.org/grpc/cmd/protoc-gen-go-grpc

### Arquivo de configurações

Precisamos criar um arquivo de configuração `"*.proto"` que, em conjunto com as dependências baixadas, irão gerar arquivos necessários ao servidor gRpc.

#### Arquivo `<nome>.proto`

```
syntax = "proto3";

// The package name is the same as the go package name
package logs;

// The go_package option specifies the Go package name
option go_package = "/logs";

// The Log is the message that will be sent to the server
message Log {
  string name = 1;
  string data = 2;
}

// The LogRequest is the request to the server
message LogRequest {
  Log logEntry = 1;
}

// The LogResponse is the response from the server
message LogResponse {
  string result = 1;
}

// The LogService is the service definition
service LogService {
  rpc WriteLog(LogRequest) returns (LogResponse);
}
```

### Gerando os códigos necessários

Para gerar os códigos de forma automática, utilizamos o executável `protoc` baixado no GOBIN. Assim, na mesma pasta em que o arquivo `.proto` está localizado, utilize o seguinte comando noterminal:

		protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative <nome>.proto

Após isso, utilize o comando `go mod tidy` para baixar todas as dependências