# Styled components
> Resumo das principais funcionalidades 

## Criando um "Styled component":
**Sintaxe:**
```
  import styled from "styled-components";

  const StyledComponent = styled.<tag>`...`

  function App() {
    return (
      <StyledComponent>
        
      </StyledComponent>
    )
  }
```

- **"tag":** Digitamos qualquer tag html que queiremos criar.

- **`...`:** Todo código css é digitado neste campo 

- **Utilização:** A variável criada vira um componente react contendo a tag html e seu respectivo css, sendo assim, a utilizamos como um componente react comum.  

## Passando props para o componente estilizado:
**Sintaxe:**

```
  const ItemNavegacao = ({ children, ativo = false }) => {
    return (
      <StyledComponent $atributo={ativo}>         --> $atributo é uma prop do StyledComponent.
        {children}
      </StyledComponent>
    );
  };
```
Para passar props para dentro do css criamos um atributo qualquer com o prefixo "$".

**Acessando a prop:**

```
  const StyledComponent = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  `
```
Dentro da template srting, para utilizarmos javascript, utilizamos "${...}". Para acessarmos as props precisamos criar uma arrow function passando as props como parâmetro.