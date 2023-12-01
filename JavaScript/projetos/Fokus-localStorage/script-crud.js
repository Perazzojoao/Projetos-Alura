const taskListContainer = document.querySelector('.app__section-task-list');

const formTask = document.querySelector('.app__form-add-task');
const formLabel = document.querySelector('.app__form-label');
const textArea = document.querySelector('textarea.app__form-textarea');
const adicionaTarefaBtn = document.querySelector('.app__button--add-task');
const cancelaFormBtn = document.querySelector('.app__form-footer__button--cancel');
const deletaParagraph = document.querySelector('.app__form-footer__button--delete');
const localStorageTarefas = localStorage.getItem('tarefas');
const limpaTarefasBtn = document.querySelector('#btn-remover-todas');
const limpaTarefasCompletasBtn = document.querySelector('#btn-remover-concluidas');
const taskActiveDescription = document.querySelector('.app__section-active-task-description');

let tarefas = localStorageTarefas ? JSON.parse(localStorageTarefas) : [];

const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#FFF" />
<path
d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
fill="#01080E" />
</svg>`;

let tarefaSelecionada = null;
let itemtarefaSelecionada = null;

let tarefaEmEdicao = null;
let paragraphEmEdicao = null;

const selecionaTarefa = (tarefa, li) => {
  if(tarefa.status) return;

  taskListContainer.childNodes.forEach((child) => {
    child.classList.remove('app__section-task-list-item-active');
  });

  if(tarefaSelecionada == tarefa) {
    taskAtiveDescription.textContent = null
    itemTarefaSelecionada = null
    tarefaSelecionada = null
    return
  }

  tarefaSelecionada = tarefa;
  itemtarefaSelecionada = li;
  taskActiveDescription.textContent = tarefa.descricao;
  li.classList.add('app__section-task-list-item-active'); 
}

const limparForm = () => {
  tarefaEmEdicao = null;
  paragraphEmEdicao = null;

  textArea.value = null;
  formTask.classList.add('hidden');
}

const selecionaTarefaEdicao = (tarefa, elemento) => {
    if(tarefaEmEdicao == tarefa) {
      limparForm();
      return;
    }

    formLabel.textContent = 'Editando tarefa';
    tarefaEmEdicao = tarefa;
    paragraphEmEdicao = elemento;
    textArea.value = tarefa.descricao;
    formTask.classList.remove('hidden');
}

cancelaFormBtn.addEventListener('click', limparForm);

deletaParagraph.addEventListener('click', () => {
  if(tarefaEmEdicao) {
      let tarefaDelet = null;
      let tarefasDesatualizadas = tarefas;
      taskListContainer.childNodes.forEach((child, i) => {
      if(child.childNodes[1].innerHTML == tarefaEmEdicao.descricao) {
        tarefaDelet = child;
        tarefasDesatualizadas[i] = null;
      }
    });
    tarefas = tarefasDesatualizadas.filter(tarefa => tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    tarefaDelet.remove();
  }
  limparForm();
});

function creatTask(tarefa) {
  const li = document.createElement('li');
  li.classList.add('app__section-task-list-item');

  const svgIcon = document.createElement('svg');
  svgIcon.innerHTML = taskIconSvg;

  const paragraph = document.createElement('p');
  paragraph.classList.add('app__section-task-list-item-description');
  paragraph.textContent = tarefa.descricao;

  const button = document.createElement('button');
  button.classList.add('app_button-edit');

  const editIcon = document.createElement('img');
  editIcon.setAttribute('src', '/imagens/edit.png');
  button.appendChild(editIcon);

  li.onclick = () => {
    selecionaTarefa(tarefa, li);
  }

  button.onclick = (evento) => {
    evento.stopPropagation;
    selecionaTarefaEdicao(tarefa, paragraph);
  };

  svgIcon.addEventListener('click', (evento) => {
    evento.stopPropagation;
    button.setAttribute('disabled', true);
    li.classList.toggle('app__section-task-list-item-complete');
  });

  if(tarefa.status) {
    button.setAttribute('disabled', true);
    li.classList.toggle('app__section-task-list-item-complete');
  }

  li.appendChild(svgIcon);
  li.appendChild(paragraph);
  li.appendChild(button);

  return li;
}

tarefas.forEach(task => {
  const taskItem = creatTask(task);
  taskListContainer.appendChild(taskItem);
  });

adicionaTarefaBtn.addEventListener('click',() => {
  formTask.classList.remove('hidden');
});

const updateLocalStorage = () => {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

formTask.addEventListener('submit', (evento) => {
  evento.preventDefault();

  if(tarefaEmEdicao) {
    tarefaEmEdicao.descricao = textArea.value;
    paragraphEmEdicao.textContent = textArea.value;
  } else {
    const task ={
      descricao: textArea.value,
      status: false,
    }
    tarefas.push(task);
    const taskItem = creatTask(task);
    taskListContainer.appendChild(taskItem);
  }

  updateLocalStorage();
  limparForm();
});

limpaTarefasBtn.addEventListener('click', () => {
  tarefas = [];
  localStorage.clear();
  deletChild();
});

limpaTarefasCompletasBtn.addEventListener('click', () => {
  taskListContainer.childNodes.forEach((li, i) => {
    if(li.classList.contains('app__section-task-list-item-complete')) {
      tarefas[i] = null;
      const tarefasDesatualizadas = tarefas;
      let data = JSON.parse(localStorage.getItem('tarefas'));
      data[i] = null;
      const dataAtualizado = data.filter(tarefa => {
        if(tarefa) {
          return tarefa;
        }
      });
      localStorage.setItem('tarefas', JSON.stringify(dataAtualizado));
      li.remove();

      tarefas = tarefasDesatualizadas.filter(task => {
        return task;
      });
    }
  });
});

function deletChild() {
  let child = taskListContainer.lastChild;
  while(child) {
    taskListContainer.removeChild(child);
    child = taskListContainer.lastChild;
  }
}

document.addEventListener('TarefaFinalizada', () => {
  if(tarefaSelecionada) {
    tarefaSelecionada.status = true;
    itemtarefaSelecionada.classList.add('app__section-task-list-item-complete');
    itemTarefaSelecionada.querySelector('button').setAttribute('disabled', true);
    updateLocalStorage();
  }
});