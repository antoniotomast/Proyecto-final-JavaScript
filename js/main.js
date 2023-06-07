const guardarTarea = document.querySelector('#guardarTarea');
const selectPrioridad = document.querySelector('#selectPrioridad');
const inputGuardar = document.querySelector('#inputGuardar');
const btnGuardar = document.querySelector('#guardar');
const ul = document.querySelector('main ul');
const inputSearch = document.querySelector('#search');

let id = 3;

guardarTarea.addEventListener('submit', getData);
inputSearch.addEventListener('keypress', getSearch);

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
    const button = document.createElement('button');
    button.classList.add('delete');
    button.addEventListener('click', deleteElement);

    const li = document.createElement('li');

    li.classList.add(`${pTask.prioridad}`);


    li.textContent = pTask.titulo;
    button.textContent = 'Borrar';
    pDom.append(li);
    li.append(button);

}

function getSearch(event) {
    event.key === 'enter';

}


function deleteElement(event) {
    event.target.parentElement.remove();
}

function filterByPriority(pList, pPrioridad) {
    return pList.filter(task => task.prioridad.toLowerCase() === pPrioridad.toLowerCase());
}

function printAllTasks(pList, pDom) {
    pList.forEach(task => printOneTask(task, pDom));
}

printAllTasks(taskList, ul);


/*<ul id="listaTareas">
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
</ul> */