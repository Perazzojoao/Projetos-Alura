/** @format */

const {edFolha, edGalho} = require("./listas/lista_livros");

function juntaListas(lista1, lista2) {
	let listaFinal = [];
	let posicaoAtualLista1 = 0;
	let posicaoAtualLista2 = 0;

	while (
		posicaoAtualLista1 < lista1.length &&
		posicaoAtualLista2 < lista2.length
	) {
		let produtoAtualLista1 = lista1[posicaoAtualLista1];
		let produtoAtualLista2 = lista2[posicaoAtualLista2];

		if (produtoAtualLista1.valor < produtoAtualLista2.valor) {
			listaFinal.push(produtoAtualLista1);
			posicaoAtualLista1++;
		} else {
			listaFinal.push(produtoAtualLista2);
			posicaoAtualLista2++;
		}
	}

	while (posicaoAtualLista1 < lista1.length) {
		listaFinal.push(lista1[posicaoAtualLista1]);
		posicaoAtualLista1++;
	}
	while (posicaoAtualLista2 < lista2.length) {
		listaFinal.push(lista2[posicaoAtualLista2]);
		posicaoAtualLista2++;
	}
	return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));
