import React, { useContext } from 'react';
import Produto from './Produto';
import produtos from '@/mocks/produtos.json';
import Titulo from '@/components/Titulo';
import { CarrinhoContext } from '@/contexts/CarrinhoContext';

const Produtos = () => {
	const { carrinho, setCarrinho } = useContext(CarrinhoContext);

	function adicionarProduto(novoProduto) {
		const temOProduto = carrinho.some((itemDoCarrinho) => {
			itemDoCarrinho.id === novoProduto.id;
		});

		if (!temOProduto) {
			novoProduto.quantidade = 1;
			return setCarrinho((prev) => [...prev, novoProduto]);
		}

		setCarrinho((prev) =>
			prev.map((itemDoCarrinho) => {
				if (itemDoCarrinho.id === novoProduto.id) itemDoCarrinho.quantidade += 1;
			})
		);
	}

	return (
		<section role='produtos' aria-label='Produtos que estão bombando!'>
			<Titulo>Produtos que estão bombando!</Titulo>
			<div className='container row mx-auto'>
				{produtos.map((produto) => (
					<Produto key={produto.id} {...produto} adicionarProduto={adicionarProduto} />
				))}
			</div>
		</section>
	);
};

export default Produtos;
