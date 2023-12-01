import { conectaApi } from "./conexaoApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
  evento.preventDefault();

  const url = document.querySelector('[data-url]').value;
  const titulo = document.querySelector('[data-titulo]').value;
  const imagem = document.querySelector('[data-imagem]').value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    location.href = "../pages/envio-concluido.html";
  } catch (error) {
    window.alert(`Ocorreu um erro --> ${error}`);
  }
}

formulario.addEventListener('submit', evento => criarVideo(evento));