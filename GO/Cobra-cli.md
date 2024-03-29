# Cobra-cli

> Biblioteca para criação de programas cli

## Instalação

[Cobra](https://github.com/spf13/cobra) disponibiliza um programa cli que gera e configura novos projetos automaticamente. No terminal, utilize o seguinte comando:

    cobra init [nome_projeto]

No projeto, será gerado `cmd/root.go`, onde estará contido todos os comandos principais do seu projeto.

## Estrutura

O arquivo `root.go` está estruturado da seguinte maneira:

- `var rootCmd = &cobra.Command{...}`:

  Refere-se à `criação` do comando raíz da aplicação (`rootCmd`), que será `executado por padrao` se não for executado nenhum subcomando ou argumentos.

  **Ex:**

  ```
  var rootCmd = &cobra.Command{
    Use:   "<nome_aplicação>",
    Short: "A brief description of your application",
    Long: `A longer description that spans multiple lines of your application.`,
    Run: func(cmd *cobra.Command, args []string) { },
  }
  ```

- `func Execute()`:

  É o comando executado pela função main para iniciar a aplicação. É executado apenas uma vez e não necessita de alterações.

  **Ex:**

  ```
  func Execute() {
    err := rootCmd.Execute()
    if err != nil {
      os.Exit(1)
    }
  }
  ```

- `func init()`:

  Função responsavel por definir todas as `flags` e `configurações` do comando. Cobra suporta a criação de `flags locais` (vista apenas pelo comando atual) e `flags globais` (vista por toda a aplicação). Init é, também, a função em que é adicionado todos os `subcomandos` referente ao comando atual.

  **Ex:**

  ```
  func init() {
    rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
  }
  ```

## Adicionar comando

Cobra-cli possúi um comando que gera novos comandos para sua aplicação de forma automática. No terminal, execute o seguinte comando:

    cobra add [nome_comando]

`Cobra add`, por padrão, adiciona um novo comando cli atrelado ao `rootCmd`. Para especificar um comando pai para atrelar o novo subcomando utilize a flag `-p [nome_comando_pai]`.

Com isso, é gerado um novo arquivo Go com a seguinte estrutura:

- `var [nome_comando]Cmd = &cobra.Command{...}`

- `func init()`

**Ex:** `cobra add net`

```
// netCmd represents the net command
var NetCmd = &cobra.Command{
	Use:   "net",
	Short: "Net is a palett that contains network based commands.",
	Long:  ``,
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Help()
	},
}
```

```
func init() {
	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command and all subcommands, e.g.:

	// Cobra supports local flags which will only run when this command is called directly, e.g.:
}
```

### Struct cobra.Command{ }:

Define um novo objeto cmd com suas variáveis e métodos próprios. Neste novo objeto, definimos todas as características do comando criado.

**Principais configurações:**

- `Use`: Nome do comando.

- `Short`: Descrição curta do comando.

- `Long`: Descrição longa e detalhada do comando.

- `Run`: Fução a ser executada quando o comando for chamado.

## Atrelando subcomandos

Novos comandos criados, para serem utilizados, precisam ser atrelados à algum comando já existente. Novos comandos podem ser atrelados diretamente ao `rootCmd` (comando raíz) ou à outros, assim, se tornando um subcomando deste.

Para atrelar o novo comando criado ao `rootCmd` é preciso adicioná-lo a função `func init()` do arquivo `root.go`. Para isso utilize o método `AddCommand(<comando_filho>)`

**Ex:**

```
func addSubCommands() {
	rootCmd.AddCommand(net.NetCmd)
}
```

```
func init() {
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")

	addSubCommands()
}
```

**Obs:** Para atrelar novos subcomandos à outros, utilize o mesmo processo, porém, utilizando o método `AddCommand()` na função `func init()` do comando pai desejado.

## Flags

Flags são configurações pré definidas que damos aos comandos. São utilizadas após o uso de `-` ou `--`.

### Criação:

Flags são criadas utilizando o método `Flags()`, para flags locais, ou `PersistentFlags()`, para flags globais. Após isso é utilizado um método que captura um tipo de dado específico para o comando, como `String()`, `Bool()`, `Int()`, etc, bem como suas variações.

**Principais métodos:**

Cada tipo contém suas respectivas variações dos seguintes métodos:

- `<tipo>(<nome>, <default>, <uso>)`:

- `<tipo>P(<nome>, <apelido>, <default>, <uso>)`:

- `<tipo>Var(*<var>, <nome>, <default>, <uso>)`:

- `<tipo>VarP(*<var>, <nome>, <apelido>, <default>, <uso>)`:

**Obs**: `<tipo>` pode ser string, []string, bool, []bool, int, []int, float32, []float32 ...

**Ex:**

    var urlPath string

    pingCmd.Flags().StringVarP(&urlPath, "url", "u", "", "URL to ping")

Neste exemplo, o método `StringVarP()`, captura o valor passado na flag `-u` ou `--url`, converte para string e atribui seu valor à variável `urlPath`.

### Required flags

Flags são opcionais por padrão. `Required flags` garante que determinada flag seja obrigatoriamente utilizada. Para isso utilize o método `MarkFlagRequired(..."<flag>")` para `flags locais` ou `MarkPersistentFlagRequired(..."<flags>")` para `flags globais`.

**Ex:**

```
rootCmd.Flags().StringVarP(&urlPath, "url", "u", "", "URL to ping")
if err := pingCmd.MarkFlagRequired("url"); err != nil {
  fmt.Println(err)
}
```

```
rootCmd.PersistentFlags().StringVarP(&Region, "region", "r", "", "AWS region (required)")
rootCmd.MarkPersistentFlagRequired("region")
```

### Flag Groups

`Flag Groups` garante que duas ou mais flags sejam utilizadas em conjunto. Existem 3 métodos disponíveis:

- `MarkFlagsRequiredTogether(... "<flags>")`: Todas as flags devem ser utilizadas

  **Ex:**

  ```
  rootCmd.Flags().StringVarP(&u, "username", "u", "", "Username (required if password is set)")
  rootCmd.Flags().StringVarP(&pw, "password", "p", "", "Password (required if username is set)")
  rootCmd.MarkFlagsRequiredTogether("username", "password")
  ```

- `MarkFlagsMutuallyExclusive(... "<flags>")`: Flags do grupo não podem ser utilizadas em conjunto.

- `MarkFlagsOneRequired(... "<flags>")`: Pelo menos uma das flags deve ser utilizada.

  **Ex:**

  ```
  rootCmd.Flags().BoolVar(&ofJson, "json", false, "Output in JSON")
  rootCmd.Flags().BoolVar(&ofYaml, "yaml", false, "Output in YAML")
  rootCmd.MarkFlagsOneRequired("json", "yaml")
  rootCmd.MarkFlagsMutuallyExclusive("json", "yaml")
  ```

# Viper

[Viper](https://github.com/spf13/viper) é uma biblioteca de configurações para seu projeto Go que pode ser combinado com `Cobra`. Ela permite `ler` e `alterar` arquivos de configurações fornecidos pelo usuário.

## Instalação

`Viper` é integrado com `Cobra-cli`, sendo fornecido um comando para criar um projeto cobra já com o viper instalado. No terminal, utilize o seguinte comando:

    cobra init [nome_projeto] --viper

Ou, para configurar manualmente, utilize:

    go get github.com/spf13/viper

## Estrutura

Ao criar um projeto com viper, o arquivo `root.go` gerado é igual ao projeto cobra comum, porém, com as seguintes adições:

- `var cfgFile, userLicense string`:

  Variáveis que gardam o caminho dos seus respectivos arquivos.

- `rootCmd.PersistentFlags().StringVar(&cfgFile, ...)`:

  Flag que recebe o caminho do arquivo de configurações do usuário e o garda na variável `cfgFile`.

- `func initConfig()`:

  Função que utiliza o caminho do arquivo de configurações do usuário e o adiciona ao projeto.

## Uso

`Viper` adiciona varios métodos próprios que auxiliam a lidar com arquivos de configurações e variáveis.

### Compartilhamento de variáveis

`Viper` contém métodos que auxiliam a passar variáveis entre pacotes distintos. Elas são armazenadas em `maps` e acessíveis por todo o projeto. Para adicionar uma variável utilize o método `viper.Set("<key>", <value>)`. Para acessar o valor armazenado, utilize `viper.GetViper().Get("<key>")`. O método `viper.GetViper().Get()` retorna um valor do tipo `any`, assim, para especificar o tipo de seu retorno `viper` disponibiliza variações como `GetString()`, `GetInt()`, `GetFloat64()`, ...

**Ex:**

```
viper.Set("name", "Alex")
```

```
fmt.Println(viper.GetViper().GetString("name"))
```

Também podemos criar uma variável `default` que, se seu valor não for atribuído posteriormente, será utilizado o `default` indicado. Utilize `viper.SetDefault("<key>", <value>)`.

**Ex:**

    viper.SetDefault("port", "8080")

### Variáveis de arquivos de configuração

É possível acessar variáveis contidas em arquivos de configurações utilizando o mesmo método de compartilhamento de variáveis `viper.GetViper().Get()` e suas variações.

**Ex:** `toolbox.yaml`

```
hacker: true
name: steve
age: 35
eyes : brown
beard: true
```

    fmt.Println(viper.GetViper().GetString("eyes"))       // brown

### Criar arquivo de configuração

`Viper` possúi um método para criar um arquivo de configurações em tempo de execução. Neste arquivo, são carregadas todas as variáveis criadas pelos métodos `viper.Set()` e `viper.SetDefault()`. Para isso, utilize o método `viper.WriteConfigAs("<file_name>")`.

**Ex:**

```
err := viper.WriteConfigAs("runTimeVariables.yaml")
if err != nil {
  fmt.Println(err)
}
```