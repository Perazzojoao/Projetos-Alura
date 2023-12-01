/** @format */

const encontraCliente = (nomeCliente) => {
	const objCliente = require("../json/clientes.json");

	const cliente = objCliente.find((dadosCliente) => {
		if (dadosCliente.nome.includes(nomeCliente)) {
			return dadosCliente;
		}
	});

	if (cliente == undefined) return console.log("Cliente nÃ£o cadastrado!");
	else return cliente;
};

const cliente = encontraCliente("Amye");
console.log(cliente);
