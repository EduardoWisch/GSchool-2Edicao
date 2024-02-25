const tarefas = document.querySelectorAll('.tarefa');
const edit = document.querySelectorAll('.hover');

// Função para fazer o elemento de edição aparecer
function aparecer(tarefa, editar) {
    editar.style.transition = '0.5s';
    editar.style.display = 'inline';
    tarefa.style.transition = '0.3s';
    tarefa.style.backgroundColor = '#F7F7F7';
}

// Função para fazer o elemento de edição desaparecer
function desaparecer(tarefa, editar) {
    editar.style.transition = '0.5s';
    editar.style.display = '';
    tarefa.style.transition = '0.3s';
    tarefa.style.backgroundColor = '';
}

// Iterar sobre todos os pares de elementos e adicionar os ouvintes de eventos
for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    const editar = edit[i];
    
    tarefa.addEventListener('mouseover', function() {
        aparecer(tarefa, editar);
    });
    
    tarefa.addEventListener('mouseout', function() {
        desaparecer(tarefa, editar);
    });
}

