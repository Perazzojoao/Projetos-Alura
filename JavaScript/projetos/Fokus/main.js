const listaBotoes = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('img[class=app__image]');
const html = document.querySelector('html');
const valorBotao = ['foco', 'descanso-curto', 'descanso-longo'];
const titulo = document.querySelector('.app__title');
const botaoMusica = document.querySelector('#alternar-musica');
const botaoTemp = document.querySelector('#start-pause');
const imagemBotaoTemp = document.querySelector('#start-pause img');
const timer = document.querySelector('#timer');
const listaTempBotoes = [1500, 300, 900];

const musica = new Audio('./sons/luna-rise-part-one.mp3');
const play =  new Audio('./sons/play.wav');
const pause = new Audio('./sons/pause.mp3');
const beep = new Audio('./sons/beep.mp3');
musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;




botaoMusica.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
  
});

listaBotoes.forEach((botao, i) => {
  botao.onclick = () => {
    tempoDecorridoEmSegundos = listaTempBotoes[i];
    alterarContexto(valorBotao[i]);
    
    listaBotoes.forEach(botao => {
      botao.classList.remove('active');
    });
    botao.classList.add('active');
  }
});

function alterarContexto(contexto) {
  mostrarTempo();
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `./imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = 
      `Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
      case 'descanso-curto':
        titulo.innerHTML = 
        `Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case 'descanso-longo':
      titulo.innerHTML = 
      `Hora de voltar à superfície.<br>
      <strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
      break;
    }
  }
  
  const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
      beep.play();
      alert('Tempo Finalizado!');
      zerar();
      botaoTemp.childNodes[3].textContent = 'Começar';
      imagemBotaoTemp.setAttribute('src', './imagens/play_arrow.png');
      if(!beep.paused) beep.pause();
      return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
  }
  botaoTemp.addEventListener('click', iniciarOuPausarTemp);
  
  function iniciarOuPausarTemp() {
    if(intervaloId) {
      zerar();
      pause.play();
      botaoTemp.childNodes[3].textContent = 'Retomar';
      imagemBotaoTemp.setAttribute('src', './imagens/play_arrow.png');
      return;
    }
    play.play();
    botaoTemp.childNodes[3].textContent = 'Pausar';
    imagemBotaoTemp.setAttribute('src', './imagens/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
  }
  
  function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
  timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();