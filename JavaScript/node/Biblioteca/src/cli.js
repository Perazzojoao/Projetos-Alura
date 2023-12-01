#!/usr/bin/env node

import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";
import fs from "fs";
import chalk from "chalk";

const caminho = process.argv;
// Caminho: "./Biblioteca/arquivos/texto.md"

async function imprimeLista(valida, resulado, identificador = "") {
	if (valida) {
		console.log(
			chalk.yellow(`Lista validada:`),
			chalk.black.bgGreen(identificador),
			"\n",
			chalk.blue(JSON.stringify(await listaValidada(resulado)))
		);
	} else {
		console.log(
			chalk.yellow(`Lista de links`),
			chalk.black.bgGreen(identificador),
			"\n",
			chalk.blue(JSON.stringify(resulado))
		);
	}
}

async function processaTexto(argumentos) {
	const caminho = argumentos[2];
	const valida = argumentos[3] === "--valida";

	try {
		fs.lstatSync(caminho);
	} catch (erro) {
		if (erro.code === "ENOENT") {
			console.log(chalk.red("Arquivo ou diretório não existe!"));
			return;
		}
	}

	if (fs.lstatSync(caminho).isFile()) {
		const resulado = await pegaArquivo(caminho);
		imprimeLista(valida, resulado);
	} else if (fs.lstatSync(caminho).isDirectory()) {
		const arquivos = await fs.promises.readdir(caminho);

		arquivos.forEach(async (nomeDeArquivo) => {
			const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
			imprimeLista(valida, lista, nomeDeArquivo);
		});
	}
}

processaTexto(caminho);
