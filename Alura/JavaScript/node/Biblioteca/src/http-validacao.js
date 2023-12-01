/** @format */

import chalk from "chalk";

function extraiLInks(arrLinks) {
	return arrLinks.map((objLink) => {
		return Object.values(objLink).join();
	});
}

async function checaStatus(listaURLs) {
	const arrStatus = await Promise.all(
		listaURLs.map(async (url) => {
			try {
				const response = await fetch(url, {method: "HEAD"});
				return `${response.status} - ${response.statusText}`;
			} catch (erro) {
				return manejaErros(erro);
			}
		})
	);
	return arrStatus;
}

function manejaErros(erro) {
	if (erro.cause.code === "ENOTFOUND") {
		return "Link não encontrado!";
	} else {
		return "Ocorreu um erro.";
	}
}

export default async function listaValidada(listaLinks) {
	const links = extraiLInks(listaLinks);
	const status = await checaStatus(links);

	return listaLinks.map((obj, i) => ({
		...obj,
		status: status[i],
	}));
}
