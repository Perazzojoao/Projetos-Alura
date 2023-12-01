/** @format */

const filtraClientes = () => {
	const listaClientes = require("../json/clientes.json");

	const clientesSemComple = listaClientes.filter((cliente) => {
		return (
			cliente.endereco.apartamento &&
			!cliente.endereco.hasOwnProperty("complemento") // ".hasOwnProperty()" --> Checa se o obj possui determinada propriedade.
		);
	});
	return clientesSemComple;
};

console.log(filtraClientes());
