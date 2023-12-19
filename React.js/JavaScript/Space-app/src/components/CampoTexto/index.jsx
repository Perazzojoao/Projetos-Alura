import styled from 'styled-components';
import search from './search.png';

const ContainerStyled = styled.div`
	position: relative;
	display: inline-block;
`;

const InputStyled = styled.input`
	height: 56px;
	padding: 12px 16px;
	border-radius: 10px;
	border: 2px solid;
	border-color: #c98cf1;
	background: transparent;
	box-sizing: border-box;
	width: 566px;
	color: #d9d9d9;
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
`;

const CampoTexto = ({ aoDigitar }) => {
	return (
		<ContainerStyled>
			<InputStyled placeholder='O que você procura?' onChange={event => aoDigitar(event.target.value)} />
			<IconeStyled src={search} alt='Ícone de lupa' />
		</ContainerStyled>
	);
};

export default CampoTexto;
