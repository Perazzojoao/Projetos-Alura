/** @format */

const listaLivros = require("./listas/lista_ordenada");

function busca(array, de, ate, valorBuscado) {
	const meio = Math.floor((de + ate) / 2);
	const atual = array[meio];

	if (de > ate || de < ate) {
		console.error("Valor especificado não existe!");
		return -1;
	}

	if (valorBuscado === atual.preco) return meio;

	if (valorBuscado < atual.preco) {
		return busca(array, de, meio - 1, valorBuscado);
	}

	if (valorBuscado > atual.preco) {
		return busca(array, meio + 1, ate, valorBuscado);
	}
}

console.log(listaLivros[busca(listaLivros, 0, listaLivros.length - 1, 40)]);
