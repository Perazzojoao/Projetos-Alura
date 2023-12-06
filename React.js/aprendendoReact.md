# Códigos React.js
> Resumo das principais funcionalidades do React.js

## Criando o projeto:
No terminal digite: npx create-react-app <nome_projeto>

- Códigos para rodar no terminal: 
  ```
  npm start 
       Starts the development server.
  
  npm run build
        Bundles the app into static files for productions.
  
  npm test
        Starts the test runner.
  
  npm run eject
        Removes this tool and copies build dependencies, configurations files and scripts into the app directory. If you do this, you can't go back!
  ```


## Componentes:
### Criando componentes:
Componentes são funções que criamos para construir o html da página.
```
  import <variável_imagem> from './<caminho_imagem>';   --> Importando imagens.
  import '<caminho_css>';                               --> Importando o css.
  OU
  import <variável> from './<caminho_css>'    --> 'styles' recebe um obj com todas as confugurações do css.
                                              OBS: para isso devemos criar um arquivo css desta forma: <nome>.module.css
  function <função_componente>() {
    <bloco_de_comandos_em_js>
    .
    .
    .
    return (Linguagem JSX: javascript + xml)
  }
  
  export default <função_componente>;
```

Ex:
```
  import './banner.css';    --> Import do css.
  
  function Banner() {
    return (
      <header className='banner'>
        <img src="/img/banner.png" alt="Banner principal do Organo."/>
      </header>
    )
  }
  
  export default Banner;
  ```

### Fragment:
Componentes devem retornar tudo dentro de uma única tag html. Caso queira retornar várias tags, envolva-as dentro da tag "<Fragment>...</Fragment>" ou de tags vazias "<>...</>".
Ex:
```
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
```

## Importando componentes:
Para utilizar os componentes criados precisamos importa-los:

Ex: **import Banner from './components/Banner/banner'; --> (caminho do arquivo).**

com isso, a função importada vira uma tag html e podemos utiliza-la no arquivo "App.js" para desenvolver-mos nossa aplicação.
```
Ex: <Banner/>
```

## Caminhos absolutos:
- Uso: podemos configurar um arquivo "jsconfig.json" na raiz do projeto para habilitar caminhos absolutos à pasta "src".
- Ex: import Banner from '../../components/Banner/banner'  -->  'components/Banner/banner' (caminho absoluto).
- Configuração: Crie uma pasta "**jsconfig.json**" na pasta raiz do projeto.
```
  {
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }
```

## Propriedades dos componentes (props):
Podemos passar propriedades das tags dos componentes criados diretamente para suas funções.
Ex:
```
  const CampoTexto = (props) => {       --> <props>: obj que contém os valores de todos os atributos passados para a tag do componente.
    return (                            --> <props> podem ser desestruturadas: Const campoTexto = ({label, placeholder}) - Não precisa mais utilizar props.<nome_propriedade>
      <div className="campo-texto">
        <label>{props.label}</label>
        <input placeholder={props.placeholder}/>    --> Para utilizar as variáveis devemos utilizá-las entre "{...}". Ex: {props.placeholder}
      </div>
    );
  }
```

```
  <CampoTexto label="Nome" placeholder="Digite seu nome"/>
  <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
  <CampoTexto label="Imagem" placeholder="Informe o indereço da imagem"/>
```

### Passar "childrenNodes" para a tag do componente: {props.children}
Ex:
```
  const Botao = (props) => {
    return ( 
      <button className='botao'>
        {props.children}
      </button>
    );
  }
```

```
  <Botao>Criar Card</Botao>         --> Tudo que estiver entre as tags (<tag>...</tag>) é passado para {props.children}
```


## Eventos:
Digitamos os eventos dentro das tags html ou JSX.
Ex:
```
 <form onSubmit={script js}></form>             --> {script js}: passamos funções previamente criadas no bloco de comandos js do componente
```
Ex:
```
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
```

## Hooks:
**Regra n1:** Hooks, no geral, devem ser usadas na ordem em que são declaradas, ou seja, proibido sua declaração em "if", loops...

### useState() 
--> Para alterar o estado de algum componente (mandar o react renderizar)

- Sintaxe: const [<valor_atual>, <função_altera_valor>] = useState(<valor_inicial>);
  Ex:
```
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
```

### .createContext() e useContext() 
--> Servem para passar valores de componentes pai para filho, ou vice versa, sem usar props
- 1° passo - criando contexto:
```
  export const <contexto> = React.createContext();
```

- 2° passo - Definir quais componentes terão acesso ao contexto:
```
  <<contexto>.Provider value={<variáveis_passadas>}>
    .
    .
    .
  </<contexto>.Provider>
```

- 3° passo - Ir no componente filho desejado e extrair o contexto:
```
  import { <contexto> } from '<caminho_do contexto>';
  
  const <componente> = () => {

    const <variavel_a_receber_contexto> = useContext(<contexto>);       --> Contexto extraido para nova variável.

    return (
      .
      .
      .
    )
  }
```

### useEffect() 
--> Executa uma função após um componente ser renderizado.
- Sintaxe: useEfect(() => {<bloco_de_comandos>}, <condição>)
- Condições:
1. VAZIO: Função é executada SEMPRE que um componente é renderizado (Pode causar loop infinito).
2. [...]: Função é executada apenas na 1ª renderização.
3. [<variável>]: Função é executada toda vez que a variável é alterada (Variável utilizada é proveniente do "useState()".

### useRef() 
--> Similar ao useState(), porém, ao ser alterada, não força a renderização de um componente (evita loops infinitos dentro do useEffect). Além disso, seu valor não     é perdido à cada renderização.
- Sintaxe:
```
  const <variavel> = useRef(<valor_inivial>);
```
<variável> recebe um obj com o campo "current: <valor_inicial>".
    

## Condicionais
Não podemos utilizar "if()" no formato JSX, sendo assim, para aplicarmos uma condição à um componente utilizamos:
```
  <condição> && <comando_se_verdadeiro>    ou    <condição> ? <comando_se_verdadeiro> : <comando_se_falso>
```
Ex: 
```
  const Botao = (props) => {
        return ( 
          (props.children.length > 0) && <button className='botao'>   --> componente "Botao" apenas será renderizado se "(props.children.length > 0) === true".
            {props.children}
          </button>
        );
      }
```


## React-router-dom: Biblioteca de rotas do react
- **Instalação:** npm instal react-router-dom@<versão>
- **Uso:** gerencia as rotas da url da página, renderizando apenas os componentes que fazem parte daquela rota (url) específica.
- Ex:
```
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />                           // "element" --> Define o componente que será renderizado naquela url.
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />       // path="*" --> Todos os outros caminhos não definidos.
        </Routes>
      </BrowserRouter>
    );
  }
```
  
### Link:
- **Uso:** Cria um link que leva o usuário a uma nova página sem recarregar a página.
- **Sintaxe:**
```
  <Link to='/<caminho_relativo>' >...</Link>
```
**OBS:** Deve ser utilizado fora da tag "<Routers></Routers>".

### NavLink:
- **Uso:** Cria um link semelhante ao componente "Link" que sabe quando foi ativo.
- **Sintaxe:**
```
  <NavLink className={({isActive}) => `${...}`} to='/<caminho_relativo>' end >...</NavLink>
```
- **end:** Por padrão, o NavLink compara o início das url. Com o atributo "end" ele passa a comparar o final, assim diferenciando "/" de "/<caminho>".
- **className:** O "NavLink", caso verifique que o link está ativo, adiciona automaticamente a classe "active", podendo ser utilizada em um arquivo CSS.
- **className:** O "NavLink", também, fornece acesso a uma função com os parâmetros "{isActive, isPending, isTransitioning}", em que cada um retorna um booleano (true or false). Com isso, podemos retornar uma tamplate string com uma condicional que verifique se o link está ativo, pendente e/ou transicionando ou não.
Ex:
```
  <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.linkDestacado : ''}`} to={href} end >{children}</NavLink>
```
**OBS:** A função com os parâmetros especiais pode ser acessada por "className" (retornar string), "style" (retornar obj) e "children" (retornar tags html).

#### Funções:
- useLocation(): retorna a url relativa da página atual.
> Ex: const location = useLocation();

### Rotas Aninhadas:
--> Quando aninhamos rotas dentro de outras rotas, afim de evitar repetições de código

Ex:
```
  <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>         --> Rotas aninhadas sobre uma mesma rota.
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
```

1. **OBS:** As rotas "filhas" são dependentes da rota "pai" e só renderizam se a rota pai renderizar.

2. **OBS:** Se a rota pai tivesse o caminho "/qualquercoisa", os caminhos das duas rotas aninhadas seriam equivalentes a "/qualquercoisa e "/qualquercoisa/sobremim".

2. **OBS:** As rotas "filhas" não são renderizadas por padrão, para isso devemos utilizar o componente: 
```
  <Outlet />
```

**Ex:**

Dentro do componente "PaginaPadrao" temos:
```
  const PaginaPadrao = () => {
  return ( 
    <main>
      <Banner />                --> Para o Banner aparecer em todas as páginas "filhas" devemos utilizar esta técnica!
      <Outlet />                --> Indica ao react-router-dom para renderizar os componentes "filhos".
    </main>
   );
}
```