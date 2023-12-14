# Typescript
> Resumo das principais funcionalidades do typescript

## Criando arquivo de configurações do TS
No terminal digite:

    npx tsc --init

Um arquivo .json será criado, contendo todas as configs do TS no seu projeto.


## Tipagem

### Inferência de tipos:
O typescript consegue identificar automaticamente o tipo de variáveis e funções quando seu tipo está explícito na sua criação.

**Ex:** 
```
  const senha = 123456        --> Tipo: number

  function userName() {
    return "perazzojoao";     --> Tipo: string
  }
```
Note que o retorno da função é explicitamente uma `string`, sendo assim, o TS a identificará automaticamente. Nesses casos, não precisamos manualmente tipar um dado.


### Adicionando tipo:
Qundo uma variável ou função é definida sem um tipo explícito o TS nos da uma mensagem de erro, pois, como o tipo não foi especificado, ele pode ser de qualquer tipo e o TS não admite isso. Sendo assim, precisamos manualmente tipar cada variável e função sem tipo especificado.

- Tipando variáveis e funções:

  **Sintaxe:**

      let <nome_variável>: <tipo>;

      function <nome_função> (param1: <tipo>, param2: <tipo>) {
        .
        .
        .
      }
    
  **OBS:** Para tipar o retorno da função utilize "<>" contendo o tipo

    Ex: `function enviaEmail<void> () {...}`

- Tipando objetos:

  Para tipar objs temos que criar uma "interface"

  **Sintaxe:**

      interface <Nome> {
        <key>: <tipo>;
        .
        .
        <key>: <tipo>;
      }

  **Ex:**
  ```
    interface MailTo {
      nome: string;
      email: string;
    }

    interface MailMessage {
      tema: string;
      corpo: string;
      anexos?: string[];      --> "?": informa que é um campo opcional.
  .                                string[]: define o tipo como um array de strings.
    }

    function enviaEmail (to: MailTo, message: MailMessage) {
      .
      .
      .
    }
  ```


- Tipando props de componentes

  Criamos uma interface e adcionamos suas props com seus respectivos tipos. Após isso, adcionamos os tipos às props.

  **Ex:**

  ```
    interface BannerProps {
      pathImg: string;
      alt?: strring;
    }

    const Banner = ({ pathImg, alt }:BannerProps) => {
      return (
        .
        .
        .
      );
    }
  ```

### Tipos do TS:

- Tipos primitivos:
  - string
  - number
  - boolean
  - symbol
  - null
  - undefined
  - object
  - void

- Tipo de função:

  ```
    interface TiposEx {
      funcao: (<parametro>: <tipo>) => <tipo_retorno>
    }
  ```