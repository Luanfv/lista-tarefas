var elementInput = document.querySelector("#menu #add #input")
var elementButton = document.querySelector("#menu #add #button")
var containerPendent = document.querySelector("#principal .titulo_tarefas .principal_tarefas")
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
        var elementNew = document.createElement("div")
        elementNew.setAttribute("class", "tarefas")

        var elementTask = document.createElement("div")
        elementTask.setAttribute("class", "tarefa")
        elementTask.appendChild(document.createTextNode(list))

        var elementRemove = document.createElement("a")
        elementRemove.setAttribute("class", "excluir")
        elementRemove.setAttribute("href", "#")
        elementRemove.appendChild(document.createTextNode("Excluir"))

        var elementResolved = document.createElement("a")
        elementResolved.setAttribute("class", "resolvido")
        elementResolved.setAttribute("href", "#")
        elementResolved.appendChild(document.createTextNode("Resolvido"))

        var elementFunction = document.createElement("div")
        elementFunction.setAttribute("class", "funcoes")
        elementFunction.appendChild(elementResolved)
        elementFunction.appendChild(elementRemove) 

        elementNew.appendChild(elementTask)
        elementNew.appendChild(elementFunction)
        containerPendent.appendChild(elementNew)
    }
}