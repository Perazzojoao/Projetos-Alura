import { useContext } from 'react';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from '../reducers/carrinhoReducer';

const addProdutoAction = (novoProduto) => ({
	type: ADD_PRODUTO,
	payload: novoProduto,
});

const removeProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateQuantidadeAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade },
});


export const useCarrinhoContext = () => {
	const { carrinho, quantidade, valorTotal, dispatch } = useContext(CarrinhoContext);

	function adicionarProduto(novoProduto) {
		dispatch(addProdutoAction(novoProduto));
	}

	function removerProduto(id) {
		const produto = carrinho.find((item) => item.id === id);

    if (produto && produto.quantidade > 1) {
        dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
    } else {
        dispatch(removeProdutoAction(id));
    }
	}

	function excluirProduto(id) {
		dispatch(removeProdutoAction(id));
	}

	return {
		carrinho,
		adicionarProduto,
		removerProduto,
		excluirProduto,
		quantidade,
		valorTotal,
	};
};
