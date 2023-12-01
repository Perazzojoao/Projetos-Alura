const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() {
  try {
    const busca = await fetch('http://localhost:3000/videos');
    const videos = await busca.json();

    videos.forEach(video => {
      if (video.categoria == '') {
        throw new Error('Vídeo não tem categoria.');
      }
      containerVideos.innerHTML += `
      <li class="videos__item">
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
          <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
          <h3 class="titulo-video">${video.titulo}</h3>
          <p class="titulo-canal">${video.descricao}</p>
          <p class="categoria" hidden>${video.categoria}</p>
        </div>
      </li>
      `;
    });
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos --> ${error}</p>`;
  }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  let valorFiltro = barraDePesquisa.value.toLocaleLowerCase();

    if(barraDePesquisa.value != '') {
      videos.forEach(video => {
        let titulo = video.querySelector('.titulo-video').textContent.toLocaleLowerCase();

        if(!titulo.includes(valorFiltro)) {
          video.style.display = 'none';
        } else {
          video.style.display = 'block';
        }
      });
    } else {
      for(let video of videos) {
        video.style.display = 'block';
      }
    }
}

barraDePesquisa.addEventListener('input', filtrarPesquisa);

const botaoCategoria = document.querySelectorAll('.superior__item');

function filtrarCategoria(filtro) {
  const videos = document.querySelectorAll('.videos__item');
  videos.forEach(video => {
    let categoria = video.querySelector('.categoria').textContent.toLocaleLowerCase();
    let valorFiltro = filtro.toLocaleLowerCase();

    if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
      video.style.display = 'none';
    } else {
      video.style.display = 'block';
    }
  });
}

botaoCategoria.forEach(botao => {
  let nomeCategoria = botao.getAttribute('name');
  botao.addEventListener('click', () => filtrarCategoria(nomeCategoria));
});
