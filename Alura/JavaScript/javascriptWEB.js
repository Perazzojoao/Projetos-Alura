// OBS: As tags do html, quando passadas para o js através, por exemplo, de um seletor (.querySelector), viram um OBJ do js.

//Linkar um arquivo .js à um html:
//  <script src="arquivo.js" defer></script>   //defer --> Atrasa a leitura do script. O script é lido após o carregamento completo da página.

//Selecionar um elemento em um html:
  //document.querySelector('...');
    //document --> seleciona todo o arquivo
    //.querySelector(<parâmetro>) --> função para buscar um elemento
      // parâmetro: 'nome_tag' ou '.nome_classe' ou '#nome_id' ou 'nome_tag[nome_atributo=valor]'

  //document.getElementBy...();
    //Formato antigo.

  //Para utilizar o elemento selecionado:
    //1- document.querySelector('...').<função>();
    //2- const <variável> = document.querySelector('...');
    //   <variável>.<função>();


//Selecionar vários elementos em um html (vetor):
  //document.querySelectorAll('...');
    // const <variável> = document.querySelectorAll('...');   --> retorna um array de elementos


//Escrever no HTML
  // .innerHTML ou .textContent --> document.querySelector('...').innerHTML = 'Hello';
  // document.write() --> <script>document.write('Hello')</script>  //utilizar apenas para testes.
  // window.alert() --> <script>alert('Hello')</script>             //gera um pop-up
  // console.log() --> console.log('Escreve apenas no terminal');

    // OBS: DIferença entre innerHTML e textContent -> innerHTML aceita tags html, enquanto o textContent apenas aceita o texto puro.


//Manipular atributos do HTML
  // .attribute --> Retorna um obj com todos os atributos de uma tag.
  // .getAttribute('<nome_atributo>') --> Retorna o valor do primeiro atributo que comece com "<nome_atributo>".
  // .setAttribute('<nome_atributo>', '<novo_valor>') --> Define ou altera o valor do atributo especificado (caso o atributo não exista ele é criado).
  // .removeAttribute('nome_atributo') --> Remove o atributo especificado da tag.
  // .hasAttribute('<nome_atributo>') --> Retorna true se o atributo existe ou false se não existe.


//Manipular classes do HTML
  // Selecionar as classes de uma tag: .classList (retorna um array com os valores de todas as classes presentes na tag).

  // Métodos de manipulação:
    // .add('<nome_classe>') --> Adiciona a nova classe ao final do array.
    // .remove('<nome_classe>') --> Remove a classe especificada.
    // .replace('<nome_classe>', '<nova_classe>') --> Substitui uma classe por outra (a classe antiga é apagada).
    // .toggle('<nome_classe>') --> Se a classe ja existe ele remove, se não existe ele adiciona.
    // .contains('<nome_classe>') --> Verifica se a classe especificada está presente no array (retorna "true" ou "false").
    // .length() --> Retorna o numero de classes no array. 


//Eventos do JavaScript
  // Adicionar um evento: .addEventListener('evento', <função_callback>)

  // Exemplos de eventos:
    // click --> Quando o usuário clica em algo.
    // keydown --> Quando o usuário pressiona alguma tecla.
    // keyup --> Quando o usuário solta uma tecla pressionada.
    // keypress --> Quando o usuário mantém uma tecla pressionada.
    // submit --> Quando o usuário envia um formulário.
    // input --> Quando o usuário envia input. (EX: executa toda vez que o usuário digita algo em um input de um form).
    // focus --> Quando um elemento ganha foco (EX: usuário clica em um campo de um formulário).
    // blur --> Quando um elemento perde foco (EX: usuário clica fora de um campo de um formulário que estava em foco).
    // change --> Quando um elemento da página é alterado.


//Navegando no DOM
  // .parentNode --> Acessa o nó "pai" de um elemento no DOM.
  // .childNodes --> Acessa todos os nós "filhos" de um elemento no DOM (gera um array de elementos)
  // .nextElementSibling --> Acessa o próximo nó "filho" de um elemento no DOM.
  // .previousElementSibling --> Acessa o último nó "filho" de um elemento no DOM.

    // EX Sintaxe: const <variável> = document.querySelector('...').childNodes;


//Setar intervalos de tempo (setIntervale e clearInterval)
  // setInterval --> const <variável> = setInterval(<call_back>), <tempo_em_ms>;
  // clearInterval --> clearInterval(<variável>);
  // EX:
    const intervalo = setInterval(() => {console.log('Função será executada em loop com intervalo de 5s');}, 5000);
    clearInterval(intervalo);


//Criando elementos no DOM pelo js
  // .createElement('<tag_html>') --> const <variável> = document.createElement('<tag_html>');

  // O elemento será criado sem nenhum atributo e filho. Adicione-os dinamicamente:
    // Adiciona classe: <variável>.classList.add('<classe>');
    // Adiciona atributo: <variável>.setAttribute('<nome_atributo>', '<novo_valor>');
    
    // OBS: Novos elementos podem ser adicionados como "filho" de outro elemento, e vice versa.
      // Adiciona filho: .appendChild(<elemento_filho>);


//Armazenamento de dados local
  // localStorage --> Armazena dados, localmente, no navegador. (apenas strings)

  // Métodos de manipulação:
    // .setItem('<chave>', <valor>) --> Cria um par de chave e valor.
    // .removeItem('<chave>') --> Remove o par chave/valor especificado do armazenamento.
    // .getItem('<chave>') --> Retorna o valor da chave especficada.
    // .clear() --> Deleta todos os pares chave/valor armazenados.
  
  // OBS: Para converter de obj para str --> JSON.stringify(<variável>).
  //      Para converter de str para obj --> JSON.parse(<variável>).


// Validando campos de forms
  // .validity --> Obj do javaScript que guarda informações de possíveis erros, podendo ser utilizado para validar campos.
  // .checkValidity() --> Função que retorna "true" se o campo não apresenta nenhum erro, ou "false" se há um ou mais erros.
  // .setCustomValidity() --> Função que edita o valor da "validationMessage" da tag  

    // EX: <tag>.validity; --> Retorna um obj.


// Redirecionando a página
  // window.location.href = 'caminho_nova_pagina';
  // location.href = 'caminho_nova_pagina';


// Buscar ou enviar dados em outros arquivos ou servidores (fetch())
  // Sintaxe --> const <variável> = fetch('URL', {'configurações de requisição (opcional)'}(obj)); --> Retorno: promise
    // OBS: Ao deixar as configurações de requisição em branco ele irá utilizar o método padrão --> GET.

  // Método POST --> const <variável> = fetch('URL', {method: "POST",});
  // EX:
        /*
          async function criaVideo(titulo, descricao, url, imagem) {
        const conexao = await fetch('http://localhost:3000/videos', {
          method: "POST",                                       --> Método de requisição: POST
          headers: {
            "content-type": "application/json"                  --> Tipo de conteúdo
          },
          body: JSON.stringify({                                --> Criando a estrutura de dados (corpo)
            titulo: titulo,
            descricao: `${descricao} mil visualizações.`,
            url: url,
            imagem: imagem
          })
      });

      const conexaoConvertida = await conexao.json();           --> Convertendo a "conexao" em um obj json.
      return conexaoConvertida;
      }
        */ // OBS: O método POST serve para enviar dados
