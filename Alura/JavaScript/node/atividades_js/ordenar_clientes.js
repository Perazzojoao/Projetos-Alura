/** @format */

const ordenarLista = (propriedade) => {
	const listaClientes = require("../json/clientes.json");

	const listaEmOrdem = listaClientes.sort((a, b) => {
		// O ".sort()" compara "a" e "b" a cada nova iteração
		if (a[propriedade] > b[propriedade]) {
			return 1;
		}
		if (a[propriedade] < b[propriedade]) {
			return -1;
		} else return 0;
	});
	return listaEmOrdem;
};

console.log(ordenarLista("nome"));
