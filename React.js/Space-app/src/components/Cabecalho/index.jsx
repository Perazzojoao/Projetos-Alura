import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 25px;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ aoDigitar }) => {
  return ( 
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="Image da logo do Space app"/>
      <CampoTexto aoDigitar={aoDigitar}/>
    </HeaderStyled>
  );
}
 
export default Cabecalho;