/** @format */

// document.querySelector('.tecla_pom').onclick = tocaPom;   //retorna a seleção de um elemento do html.

const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaPom() {
	document.querySelector("#som_tecla_pom").play();
}

function tocaClap() {
	const clap = document.querySelector("#som_tecla_clap");
	clap.play();
}

function tocaSom(idAudio) {
	const elemento = document.querySelector(idAudio);

	if (elemento === null || elemento.localName != "audio") {
		console.log("Elemento não existe!");
	} else {
		elemento.play();
	}
}

for (let i = 0; i < listaDeTeclas.length; i++) {
	const instrumento = listaDeTeclas[i].classList[1]; //.classList -> retorna todos os valores de uma classe ume um array.
	const idAudio = `#som_${instrumento}`;

	listaDeTeclas[i].onclick = () => {
		tocaSom(idAudio);
	};

	listaDeTeclas[i].onkeydown = (evento) => {
		//'evento' --> obj contendo todas as infos sobre a tecla pressionada.
		if (evento.code === "Enter" || evento.code === "Space") {
			listaDeTeclas[i].classList.add("ativa");
		}
	};

	listaDeTeclas[i].onkeyup = () => {
		listaDeTeclas[i].classList.remove("ativa");
	};
}
