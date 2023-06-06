const guardarTarea = document.querySelector('#guardarTarea');
const selectPrioridad = document.querySelector('#selectPrioridad');
const inputGuardar = document.querySelector('#inputGuardar');
const btnGuardar = document.querySelector('#guardar');
const ul = document.querySelector('main ul');

let id = 3;

guardarTarea.addEventListener('submit', getData);

function saveTask(pList, pTask) {
    let duplicado = pList.findIndex(task => task.titulo === pTask.titulo);
    if (duplicado === -1) {
        //puedo hacer push
        pList.push(pTask);
        return 'Tarea guardada';
    }
    //no puedo hacer push
    return 'Tarea duplicada';
}


function comprobarForm(pForm) {
    return pForm.titulo.value !== "";
}


function getData(event) {
    event.preventDefault();

    const newTask = {
        id: id,
        titulo: event.target.titulo.value,
        prioridad: event.target.prioridad.value
    }

    let guardado = saveTask(taskList, newTask)

    if (guardado !== null) {
        printOneTask(newTask, ul);
    } else {
        alert('No se ha podido crear la tarea. Inténtalo de nuevo');
    }
}


function printOneTask(pTask, pDom) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.classList.add(`${pTask.prioridad}`);

    li.textContent = pTask.titulo;
    button.textContent = 'Borrar';
    pDom.append(li);
    li.append(button);
}


/*<ul id="listaTareas">
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
</ul> */