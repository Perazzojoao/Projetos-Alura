# Linguagem SQL
> Principais comandos da linguagem SQL

## Acessar informações (SELECT)

**Sintaxe:** 

    SELECT <coluna> FROM <tabela> + Filtros...


## Inserindo dados novos na tabela (INSERT)

**Sintaxe:**

    INSERT INTO <tabela> (<nome_coluna1>, <nome_coluna2>, ...) VALUES (<valor_coluna1>, <valor_coluna2>, ...);

É, também, possível adicionarmos mais de uma linha na tabela em um único código. Para isso, ao adicionar os valores, novos valores envolvidos em parêntesis são consideradas novas linhas:

    ...Comando VALUES (<valores_linha1>), (<valores_linha2>), (<valores_linha3>), ... ;


###  INSERT + SELECT:
É possível copiar dados de uma tabela já existente em outras. Para isso combinamos os comandos INSERT e SELECT.

**Sintaxe:**

  `INSERT INTO` ...Parâmetros `SELECT` <colunas_a_copiar> `FROM` <tabela_a_copiar> + Condicionais* (WHERE, DISTINCT, ... );

**OBS:** Condicionais são opcionais.

**Ex:**

```
  INSERT INTO tabelapedidosgold 
  (id_pedido_gold, data_do_pedido_gold, status_gold, total_do_pedido_gold, cliente_gold, data_de_envio_estimada_gold)
  SELECT
  id, data_do_pedido, status, total_do_pedido, cliente, data_de_envio_estimada
  FROM tabelapedidos
  WHERE total_do_pedido >= 400;
```


## Filtros

- ### WHERE:
  Filtra pelo valor de uma coluna desejada.

  **Sintaxe:**

      ...Comando + WHERE <coluna> = <valor>

  **OBS:** Se o valor for do tipo `text` temos que envolve-lo em aspas simples ( '...' )

  Também é possível realizar o filtro utilizando strings:

  **Ex:**

      ...Comando + WHERE <coluna> > 'C'  --> Exclui todas as strings que começam com 'A' ou 'B'.

- ### ORDER BY:
  Ordena o retorno com base no parâmetro passado.

  **Sintaxe:** 

      ...Comando ORDER BY <coluna> DESC* ou ASC*

    - DESC --> Ordena de forma decrescente (opcional).

    - ASC --> Ordena de forma crescente. Pode ser omitido, pois é o argumento padrão.

- ### DISTINCT:
  Filtra o retorno excluindo itens repetidos

  **Sintaxe:**

      SELECT DISTINCT <coluna> FROM <tabela>

- ### LIKE:
  Filtra o retorno com base em se uma string contém determinado valor

  **Sintaxe:**

      SELECT <coluna> FROM <tabela> WHERE <coluna> `LIKE` '%string%';

  - %string% --> Se o valor da coluna contém a string como valor.

  - %string --> Se o valor da coluna termina com a string passada.

  - string% --> Se o valor da coluna começa com a string passada.

  **Ex:**

      SELECT * FROM tabela_de_produtos WHERE SABOR LIKE '%Maça%';


## Operadores lógicos

  - **AND:** Operador lógico 'E' = &&.

  - **OR:** Operador lógico 'OU' = ||.

  - **NOT (<>):** Operador lógico 'NÃO' = !. --> Ex: ... WHERE NOT <coluna_> = <valor_>; ou ... WHERE <coluna_> <> <valor_>;

  - **BETWEEN:** Operador lógico 'ENTRE'. -->Ex: ... BETWEEN <valor_1> AND <valor_2>;


## GROUP BY
Agrupa a resposta do SELECT com base no parâmetro especificado.

**Sintaxe:**

    SELECT <coluna>, <parâmetro> AS <apelido> FROM <tabela> GROUP BY <coluna>;

**OBS:** É obrigatório o uso do `AS <apelido>` após o parâmetro dado.

### Parâmetros:

- SUM(coluna): Soma o valor de todas as colunas do grupo. 

- MAX(coluna): Valor máximo de todas as colunas do grupo.

- MIN(coluna): Valor mínimo de todas as colunas do grupo.

- AVG(coluna): Média de todas as colunas do grupo.

- COUNT(*): Exibe a contagem de todas as ocorrências iguais do grupo.

### HAVING:
Filtro aplicado à resposta após o uso do `GROUP BY`.

**Sintaxe:** ...Comandos GROUP BY `<coluna>` `HAVING` <coluna> = '...' ;

**OBS:** `HAVING` é equivalente à `WHERE`, porém é aplicado apenas após o comando `GROUP BY`.


## Condicionais
Forma de utilizar if/else em código SQL

**Sintaxe:** `CASE` <comandos_> `THEN` <comandos_> `END`;

- CASE: Início do "if".

- THEN: Após o `THEN`, utilizamos os comandos a serem executados caso a condicional seja verdadeira.

- END: Indica que finalizamos a condicional.

**Ex:**

```
  SELECT X,
  CASE
    WHEN Y>=8 AND Y<=10 THEN 'OTIMO'
    WHEN Y>=7 AND Y<8 THEN 'BOM'
    WHEN Y>5 AND Y<7 THEN 'MEDIO'
    ELSE 'RUIM'
  END
  FROM tabela;
```


## Criar tabelas

**Sintaxe:**

```
  CREATE TABLE <nome_tabela> (<nome_coluna1> <tipo_variável>, <nome_coluna2> <tipo_variável>, ... );
```

**Ex:**

```
  CREATE TABLE tabelaclientes (ID_Cliente INT PRIMARY KEY, Nome_Cliente VARCHAR (250), Informacoes_de_Contato VARCHAR (250));
```

## Deletar tabela

**Sintaxe:**

    DROP TABLE <tabela>;


## Alterar tabela

**Sintaxe:**

    ALTER TABLE <tabela> + ...Comando de edição;

- **Renomear Tabela:** ALTER TABLE `<tabela>` RENAME TO `<novo_nome>`;
- **Renomear Coluna:** ALTER TABLE `<tabela>` RENAME COLUMN* `<coluna>` TO `<novo_nome>`;
- **Adicionar Coluna:** ALTER TABLE `<tabela>` ADD COLUMN* `<nome_coluna>` `<tipo_variável>`;
- **Remover Coluna:** ALTER TABLE `<tabela>` DROP COLUMN* `<nome_coluna>`;
- **Adicionar chave extrangeira:** ALTER TABLE `<tabela>` ADD FOREIGN KEY `<nome_coluna>` REFERENCES `<tabela_externa>`(`<coluna_tabela_externa>`);

**OBS:** O termo "COLUMN" pode ser omitido do código.


## Atualizar tabela
> Para quando queremos alterar o valor de uma ou mais células dentro de uma tabela.

**Sintaxe:**

    UPDATE <tabela> SET <coluna> = <valor_desejado> WHERE <coluna> = <valor_referência>;

**Ex:**

    UPDATE tabelacategorias SET id_categoria = 1 WHERE nome_categoria = 'Bebidas';


## Tipos de Variáveis

- ### Texto (String):

  - **CHAR:** Strings de tamanho fixo.
  - **VARCHAR:** Strings de tamanho variável.
  - **TEXT:** Strings de tamanhos muito grande como documentos ou descrições.

- ### Numéricos:

  - **INTEGER (INT):** Números inteiros.
  - **FLOAT:** Números com casas decimais.
  - **NUMERIC (DECIMAL):** Números com casas decimais que demandam uma precisão superior.

- ### Data e hora:

  - **DATE:** Datas sem informação de horário.
  - **TIME:** Informações de horário.
  - **TIMESTAMP:** Combina data e hora em um único tipo.

- ### Booleano:

  - **BOOLEAN (BOOL):** Valores booleanos (true ou false).

- ### Binário:

  - **BLOB:** Dados binários, como imagens, vídeos ou arquivos.
  - **BIT:** Valores binários, como 0 ou 1.


## Chaves
Chaves são valores únicos dados a cada linha de uma tabela usados para podermos localizar um dado de forma mais eficiente. Existem dois tipos de chaves, `primárias` e `extrangeiras`.

- **PRIMARY KEY:** Valor único dado para cada linha de uma tabela. Pode ser um ID, CPF, Número de identificação de um funcionário, etc.

- **FOREIGN KEY:** Uma chave que se relaciona a uma chave primária de outra tabela, fazendo a ligação entre ambas as tabelas.

### Criando chaves:
As chaves são criadas junto à definição do tipo de variável de uma coluna.

**Sintaxe:** 

- **PRIMARY KEY:** CREATE TABLE .... (<nome_coluna> INT `PRIMARY KEY`);

- **FOREIGN KEY:** CREATE TABLE .... (<coluna_1>, <coluna_2>, ... , `FOREIGN KEY` (<coluna_1>) `REFERENCES` <tabela_externa>(<coluna_tabela_externa>));

**Ex:**

```
  CREATE TABLE tabelaprodutos (
    ID_Produto INT PRIMARY KEY, 
    Nome_do_Produto VARCHAR(250), 
    Descricao TEXT, 
    Categoria INT, 
    Preco_de_Compra DECIMAL (10,2),   --> (10: número total de dígitos, 2: casas decimais)
    Unidade VARCHAR(50), 
    Fornecedor INT,
    Data_de_Inclusao DATE, 
    FOREIGN KEY (Categoria) REFERENCES tabelacategorias(id_categoria),
    FOREIGN KEY (Fornecedor) REFERENCES tabelafornecedores(id)
  );
```