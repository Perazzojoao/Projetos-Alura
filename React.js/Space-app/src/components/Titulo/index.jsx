import styled from 'styled-components';

const Titulo = styled.h2`
	color: #7b78e5;
	font-size: 32px;
	line-height: 39px;
	text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : 'left')};
`;

export default Titulo;
