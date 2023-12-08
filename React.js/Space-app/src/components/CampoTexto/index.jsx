import styled from "styled-components";
import search from "/public/arquivos/data/icones/lupa.png";

const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyled = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #C98CF1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeStyled = styled.img`
position: absolute;
width: 38px;
height: 38px;
top: 10px;
right: 10px;
`

const CampoTexto = (props) => {
  return ( 
    <ContainerStyled>
      <InputStyled placeholder="O que você procura?" {...props}/>
      <IconeStyled src={search} alt="Ícone de lupa"/>
    </ContainerStyled>
  );
}
 
export default CampoTexto;