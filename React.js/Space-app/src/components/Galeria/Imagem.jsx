import { useState } from "react";
import styled from "styled-components";

const FigureStyle = styled.figure`
  margin: 0;
`

const ImagemStyle = styled.img`
  width: 448px;
  height: 256px;
  border-radius: 20px;
`;

const CaptionStyle = styled.figcaption`
  background-color: #001634;
  color: #FFFFFF;
  position: relative;
  top: -20px;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 24px;
  }
`;

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    font-size: 16px;
    line-height: 19px;
  }
  div {
    display: flex;
    gap: 25px;
  }
`;

const IconeStyle = styled.img`
  width: 22px;
  cursor: pointer;
`;

const Imagem = ({ foto }) => {

  const [favorito, setFavorito] = useState(false);

  return ( 
    <FigureStyle>
      <ImagemStyle src={foto.path} alt="Imagem do espaço" />
      <CaptionStyle>
        <h3>{foto.titulo}</h3>
        <FooterStyle>
          <p>{foto.fonte}</p>
          <div>
            <IconeStyle 
              src={`/arquivos/icones/${favorito ? 'favorito-ativo' : 'favorito'}.png`} 
              alt="Ícone de coração"
              onClick={() => setFavorito(antigo => !antigo)}
            />
            <IconeStyle src="/arquivos/icones/expandir.png" alt="Ícone de seta dupla"/>
          </div>
        </FooterStyle>
      </CaptionStyle>
    </FigureStyle>
  );
}
 
export default Imagem;