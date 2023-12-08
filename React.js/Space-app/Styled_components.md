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