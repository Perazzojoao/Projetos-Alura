
// Criando o projeto:
  // No terminal digite: npx create-react-app <nome_projeto>

  // Códigos para rodar no terminal: 
  /*
    npm start 
         Starts the development server.

    npm run build
          Bundles the app into static files for productions.

    npm test
          Starts the test runner.

    npm run eject
          Removes this tool and copies build dependencies, configurations files and scripts into the app directory. If you do this, you can't go back!
  */


// Componentes:
  // Criando componentes:
    // componentes são funções que criamos para construir o html da página.
    /*
      import '<caminho_css>';     --> Importando o css.

      function <função_componente>() {
        <bloco_de_comandos_em_js>
        .
        .
        .
        return (Linguagem JSX: javascript + xml)
      }

      export default <função_componente>;
    */

      // Ex:
      /*
        import './banner.css';    --> Import do css.

        function Banner() {
          return (
            <header className='banner'>
              <img src="/img/banner.png" alt="Banner principal do Organo."/>
            </header>
          )
        }

        export default Banner;
      */

    // Fragment:
      // Componentes devem retornar tudo dentro de uma única tag html. Caso queira retornar várias tags, envolva-as dentro da tag "<Fragment>...</Fragment>" ou de tags vazias "<>...</>"
      // Ex:
        /*
          function Banner() {
          return (
            <Fragment>
              <header className='banner'>
                <img src="/img/banner.png" alt="Banner principal do Organo."/>
              </header>
              <p1>Teste de fragment</p1>
            </Fragment>
          )
        }
        */
  
  // Importando componentes:
    // para utilizar os componentes criados precisamos importa-los:
      // Ex: import Banner from './components/Banner/banner'; (caminho do arquivo).

    // com isso, a função importada vira uma tag html e podemos utiliza-la no arquivo "App.js" para desenvolver-mos nossa aplicação.
      // Ex: <Banner/>

  // Propriedades dos componentes (props):
    // podemos passar propriedades das tags dos componentes criados diretamente para suas funções
    // Ex:
        /*
          const CampoTexto = (props) => {       --> <props>: obj que contém os valores de todos os atributos passados para a tag do componente.
            return (                            --> <props> podem ser desestruturadas: Const campoTexto = ({label, placeholder}) - Não precisa mais utilizar props.<nome_propriedade>
              <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>    --> Para utilizar as variáveis devemos utilizá-las entre "{...}". Ex: {props.placeholder}
              </div>
            );
          }
        */

        /*
          <CampoTexto label="Nome" placeholder="Digite seu nome"/>
          <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
          <CampoTexto label="Imagem" placeholder="Informe o indereço da imagem"/>
        */

    // Passar "childrenNodes" para a tag do componente: {props.children}
    // Ex:
        /*
          const Botao = (props) => {
            return ( 
              <button className='botao'>
                {props.children}
              </button>
            );
          }
        */

        /*
          <Botao>Criar Card</Botao>         --> Tudo que estiver entre as tags (<tag>...</tag>) é passado para {props.children}
        */


// Eventos:
  // Digitamos os eventos dentro das tags html ou JSX
  // Ex: <form onSubmit={script js}></form>             --> {script js}: passamos funções previamente criadas no bloco de comandos js do componente
  // Ex:
      /*
        const Formulario = () => {
          
          const aoSalvar = (evento) => {
            evento.preventDefault();
            .
            .
            .
          }

          return (
            <section className='formulario'>
              <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <Botao>Criar Card</Botao>
              </form>
            </section>
          );
        }
      */


// Hooks:
  // Regra n1: Hooks, no geral, devem ser usadas na ordem em que são declaradas, ou seja, proibido sua declaração em "if", loops...

  // useState() --> Para alterar o estado de algum componente (mandar o react renderizar)

    // Sintaxe: const [<valor_atual>, <função_altera_valor>] = useState(<valor_inicial>);
    // Ex:
      /*
        function Exemplo() {

          const [count, setCount] = useState(0);      --> "useState(0)" é executado sempre que usamos o setCount, oq reduz a performance.
                                                          para resolver utilize uma arrow functio: useState(() => 0);
          function contar() {
            setCount(prevCount => prevCount + 1);     --> Forma CORRETA de alterar um valor! - "prevCount" é o valor prévio, ou seja, estamos atribuindo ao <valor_atual> o <valor_antigo> + 1.
            setCount(count + 1);                      --> Forma INCORRETA! - Pode dar problema ao chamar "setCount" várias vezes em sequência.
          }

          return (
             <div>
              <p>Você clicou {count} vezes</p>
              <button onClick={contar}>
                Clique aqui
              </button>
            </div>
          )
        }
      */

  // .createContext() e useContext() --> Servem para passar valores de componentes pai para filho, ou vice versa, sem usar props
    // 1° passo - criando contexto: export const <contexto> = React.createContext();

    // 2° passo - Definir quais componentes terão acesso ao contexto:
      /*
        <<contexto>.Provider value={<variáveis_passadas>}>
          .
          .
          .
        </<contexto>.Provider>
      */

    // 3° passo - Ir no componente filho desejado e extrair o contexto:
      /*
        import { <contexto> } from '<caminho_do contexto>';
        
        const <componente> = () => {

          const <variavel_a_receber_contexto> = useContext(<contexto>);       --> Contexto extraido para nova variável.

          return (
            .
            .
            .
          )
        }
      */

  // useEfect() --> Executa uma função após um componente ser renderizado.
    // Sintaxe: useEfect(() => {<bloco_de_comandos>}, <condição>)
    // Condições:
      // VAZIO: Função é executada SEMPRE que um componente é renderizado (Pode causar loop infinito).
      // []: Função é executada apenas na 1ª renderização.
      // [<variável>]: Função é executada toda vez que a variável é alterada (Variável utilizada é proveniente do "useState()".
    

// Condicionais
  // Não podemos utilizar "if()" no formato JSX, sendo assim, para aplicarmos uma condição à um componente utilizamos:
    // <condição> && <comando_se_verdadeiro>    ou    <condição> ? <comando_se_verdadeiro> : <comando_se_falso>

  // Ex: 
    /*
      const Botao = (props) => {
            return ( 
              (props.children.length > 0) && <button className='botao'>   --> componente "Botao" apenas será renderizado se "(props.children.length > 0) === true".
                {props.children}
              </button>
            );
          }
    */