const guardarTarea = document.querySelector('#guardarTarea');
const selectPrioridad = document.querySelector('#selectPrioridad');
const inputGuardar = document.querySelector('#inputGuardar');
const btnGuardar = document.querySelector('#guardar');
const ul = document.querySelector('main ul');
const inputSearch = document.querySelector('#search');
const filtro = document.querySelector('#filtro');

let id = 3;

guardarTarea.addEventListener('submit', getData);
inputSearch.addEventListener('keypress', getSearch);
filtro.addEventListener('change', getPriority);

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

function deleteElement(event) {
    event.target.parentElement.remove();
}


function getSearch(event) {
    let word = '';
    if (event.target.id === 'search') {
        if (event.key = 'Enter') {
            word = event.target.value;
            const listFiltered = filterByWord(taskList, word);
            printAllTasks(listFiltered, ul);
        }
    }

}

function filterByWord(pList, pWord) {
    return pList.filter(task => task.titulo.toLowerCase().includes(pWord.toLowerCase()));
}

const filtrarPalabra = filterByWord(taskList, task.titulo)

function getName(event) {
    let palabraBuscar = event.target.value;
    let listaFiltrada = filterByWord(taskList, palabraBuscar);
    printTasks(listaFiltrada, ul);
}

function filterByPriority(pList, pPrioridad) {

    const listaFiltrada = [];

    for (let task of pList) {
        if (task.prioridad.toLowerCase() === pPrioridad.toLowerCase()) {
            listaFiltrada[listaFiltrada.length] = task;
        }
    }

    return listaFiltrada;
}

function getPriority(event) {
    let listaFiltrada = filterByPriority(taskList, event.target.value);
    printTasks(listaFiltrada, ul);

}



function printTasks(pList, pDom) {
    /* pList.forEach(task => printOneTask(task, pDom)); */
    pDom.innerHTML = '';
    if (pList.length !== 0) {
        pList.forEach(task => printOneTask(task, pDom));
    } else {
        pDom.innerHTML = '<h2>NO HAY RESULTADOS</h2>'
    }
}

printTasks(taskList, ul);

function printAllTasks(pList, pDom) {
    pDom.innerHTML = ''
    pList.forEach(task => printOneTask(task, pDom));
}

printAllTasks(taskList, ul);


/*<ul id="listaTareas">
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
</ul> */