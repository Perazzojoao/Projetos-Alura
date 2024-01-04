# Linguagem SQL
> Principais comandos da linguagem SQL

## Acessar informações (SELECT)

**Sintaxe:** 

    SELECT <coluna> FROM <tabela> + Filtros...


## Filtros

- ### WHERE:
  Filtra pelo valor de uma coluna desejada.

  **Sintaxe:**

      ...Comando + WHERE <coluna> = <valor>

  **OBS:** Se o valor for do tipo `text` temos que envolve-lo em aspas simples ( '...' )

- ### DISTINCT:
  Filtra o retorno excluindo itens repetidos

  **Sintaxe:**

      SELECT DISTINCT <coluna> FROM <tabela>


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

**OBS:** O termo "COLUMN" pode ser omitido do código.


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