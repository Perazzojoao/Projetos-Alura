import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';

const AsideStyle = styled.aside`
	max-width: 212px;
	padding: 0px 24px;
`;

const ListaStyle = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const SideBar = () => {
	return (
		<AsideStyle>
			<nav>
				<ListaStyle>
					<ItemNavegacao
						iconeAtivo='public/arquivos/icones/home-ativo.png'
						iconeInativo='public/arquivos/icones/home-inativo.png'
						ativo
          >
						Início
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo='public/arquivos/icones/mais-vistas-ativo.png'
						iconeInativo='public/arquivos/icones/mais-vistas-inativo.png'
          >
						Mais Vistas
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo='public/arquivos/icones/mais-curtidas-ativo.png'
						iconeInativo='public/arquivos/icones/mais-curtidas-inativo.png'
          >
						Mais curtidas
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo='public/arquivos/icones/novas-ativo.png'
						iconeInativo='public/arquivos/icones/novas-inativo.png'
          >
						Novas
					</ItemNavegacao>
					<ItemNavegacao
						iconeAtivo='public/arquivos/icones/surpreenda-me-ativo.png'
						iconeInativo='public/arquivos/icones/surpreenda-me-inativo.png'
          >
						Surpreenda-me
					</ItemNavegacao>
				</ListaStyle>
			</nav>
		</AsideStyle>
	);
};

export default SideBar;
