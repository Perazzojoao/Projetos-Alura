/** @format */

const Livros = [
	{
		nome: "javascript",
		valor: 25,
	},
	{
		nome: "php",
		valor: 15,
	},
	{
		nome: "Java",
		valor: 30,
	},
	{
		nome: "Elixir",
		valor: 50,
	},
	{
		nome: "Go",
		valor: 45,
	},
	{
		nome: "Python",
		valor: 20,
	},
];

const ordenaLivros = (Livros, tipo) => {
	const livrosOrdenados = Livros.sort((a, b) => {
		if (a[tipo] > b[tipo]) return 1;
		if (a[tipo] < b[tipo]) return -1;
		else return 0;
	});
	return livrosOrdenados;
};

console.log(ordenaLivros(Livros, "valor"));
