const guardarTarea = document.querySelector('#guardarTarea');
const selectPrioridad = document.querySelector('#selectPrioridad');
const inputGuardar = document.querySelector('#inputGuardar');
const btnGuardar = document.querySelector('#guardar')
let id = 3;

guardarTarea.addEventListener('submit', getData);

/* function saveTask(pList, pTask) {
    let duplicado = pList.findIndex(task => task.titulo === pTask.titulo);
    if (duplicado === -1) {
        //puedo hacer push
        pList.push(pTask);
        return 'Tarea guardada';
    }
    //no puedo hacer push
    return 'Tarea duplicada';
} */



function getData(event) {
    event.preventDefault();

    const newTask = {
        id: id,
        titulo: event.target.titulo.value,
        prioridad: event.target.prioridad.value
    }

    /* let guardado = saveTask(taskList, newTask) */

    console.log(newTask)
}
