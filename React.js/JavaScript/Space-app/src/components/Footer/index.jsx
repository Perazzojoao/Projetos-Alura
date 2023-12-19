import styled from "styled-components";
import IconeFace from '/public/imagens/sociais/facebook.svg';
import IconeInsta from '/public/imagens/sociais/instagram.svg';
import IconeTwit from '/public/imagens/sociais/twitter.svg';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  height: 60px;
  background-color: #04244F;

  div {
    display: flex;
    gap: 30px;

    p {
      margin: 0;
      color: #FFFFFF;
      font-size: 16px;
      line-height: 20px;
    }
  }
`

const Footer = () => {
  return ( 
    <FooterContainer>
      <div>
        <img src={IconeFace} alt="Imagem da logo do Facebook" />
        <img src={IconeInsta} alt="Imagem da logo do Instagram" />
        <img src={IconeTwit} alt="Imagem da logo do Twitter" />
      </div>
      <div>
        <p>Desenvolvido por João Victor Perazzo</p>
      </div>
    </FooterContainer>
  );
}
 
export default Footer;