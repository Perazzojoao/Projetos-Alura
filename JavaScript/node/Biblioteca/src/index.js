/** @format */

import chalk from "chalk";
import fs from "fs";
// fs: Biblioteca nativa do node.js para manipular arquivos externos. Por ser nativa, não necessita do npm!

// Sintaxe .readFile: fs.readFile(<caminho_arquivo>, <encoding>, funçãoCallback(<erro>, <conteúdo>) => {...});
// function pegaArquivo(pathFile) {
// 	const encoding = "utf-8";
// 	fs.readFile(pathFile, encoding, (erro, texto) => {
// 		if (erro) trataErro(erro);
// 		console.log(chalk.blue(texto));
// 	});
// }

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "Arquivo não existe no diretório!"));
}

// Função pegaArquivo de forma assíncrona (.then):
// function pegaArquivo(pathFile) {
// 	const encoding = "utf-8";
// 	fs.promises
// 		.readFile(pathFile, encoding)
// 		.then((texto) => console.log(chalk.blue(texto)))
// 		.catch(trataErro); // Se hover erro --> trataErro(erro);
// }

// Função pegaArquivo de forma assíncrona (async/await):
async function pegaArquivo(pathFile) {
	try {
		const encoding = "utf-8";

		const texto = await fs.promises.readFile(pathFile, encoding);
		return extraiLinks(texto);
	} catch (erro) {
		trataErro(erro);
	}
}

function extraiLinks(texto) {
	const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	const capturas = [...texto.matchAll(regex)];
	const resultados = capturas.map((captura) => ({[captura[1]]: captura[2]}));
	return resultados.length !== 0 ? resultados : "Não há links no arquivo!";
}

export default pegaArquivo;
