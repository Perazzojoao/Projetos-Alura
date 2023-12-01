import { conectaApi } from "./conexaoApi.js";
import constroiCard from "./mostrarVideos.js";

const pesquisar = document.querySelector('#pesquisar');

pesquisar.addEventListener('input', () => {
  const listaVideos = document.querySelectorAll('.videos__item');
  listaVideos.forEach(video => {
    const titulo = video.querySelector('iframe').getAttribute('title').toLocaleLowerCase();
    const pesquisa = pesquisar.value.toLocaleLowerCase();

    if(!titulo.includes(pesquisa)) {
      video.style.display = 'none';
    } else {
      video.style.display = 'block';
    }
  });
});

async function buscarVideos(evento) {
  evento.preventDefault();

  const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await conectaApi.buscaVideo(dadosPesquisa);

  const lista = document.querySelector('[data-lista]');

  while(lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach(elemento => lista.appendChild(constroiCard(elemento)));

  if(busca.length == 0) {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo!<h2>`;
  }
}

const btnPesquisa = document.querySelector('[data-botao-pesquisa]');

btnPesquisa.addEventListener('click', (evento) => buscarVideos(evento));