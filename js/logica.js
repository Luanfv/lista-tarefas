var elementInput = document.querySelector("#menu #add #input")
var elementButton = document.querySelector("#menu #add #button")
var containerPendent = document.querySelector("#principal .titulo_tarefas .tarefas")
var tasksList = []

elementButton.onclick = createTask

function createTask(){
    if(elementInput.value == '' || elementInput.value == null){
        return;
    }

    tasksList.push(elementInput.value)
    elementInput.value = ''
    viewTasks()
}

function viewTasks(){
    containerPendent.innerHTML = ''

    for(list of tasksList){
        var elementNew = document.createElement("li")
        elementNew.setAttribute("class", "tarefas")
        elementNew.appendChild(document.createTextNode(list))

        containerPendent.appendChild(elementNew)
    }
}