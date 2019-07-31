var elementInput = document.querySelector("#menu #add #input")
var elementButton = document.querySelector("#menu #add #button")
var containerPendent = document.querySelector("#principal .titulo_tarefas .principal_tarefas")
var tasksList = []
var resolvedList = []

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

    for(i = tasksList.length - 1; i >= 0; i--){
        //Cria a div principal de uma tarefa
        var elementNew = document.createElement("div")
        elementNew.setAttribute("class", "tarefas")

        //Cria uma div que irá conter o nome da tarefa 
        var elementTask = document.createElement("div")
        elementTask.setAttribute("class", "tarefa")
        elementTask.appendChild(document.createTextNode(tasksList[i]))

        //Cria o link que será utilizado para remover uma tarefa da lista
        var elementRemove = document.createElement("a")
        elementRemove.setAttribute("class", "excluir")
        elementRemove.setAttribute("href", "#")
        var posicao = tasksList.indexOf()
        elementRemove.setAttribute("onclick", "removeTask(" + posicao + ")")
        elementRemove.appendChild(document.createTextNode("Excluir"))

        

        //Cria um link que irá realocar a tarefa para a lista resolvedList
        var elementResolved = document.createElement("a")
        elementResolved.setAttribute("class", "resolvido")
        elementResolved.setAttribute("href", "#")
        elementResolved.appendChild(document.createTextNode("Resolvido"))

        //Cria a div no qual irá ficar os elementos remove e resolved
        var elementFunction = document.createElement("div")
        elementFunction.setAttribute("class", "funcoes")
        elementFunction.appendChild(elementResolved)
        elementFunction.appendChild(elementRemove) 

        //Poem o nome e as funcionalidades dentro da div tarefa
        elementNew.appendChild(elementTask)
        elementNew.appendChild(elementFunction)
        //Poem a div tarefa dentro da div que agrupa todas tarefas
        containerPendent.appendChild(elementNew)
    }
}

function removeTask(posicao){
    tasksList.splice(posicao, 1)
    viewTasks()

    if(tasksList.length <= 0){
        var element = document.createElement("div")
        element.appendChild(document.createTextNode("VAZIO"))
        containerPendent.appendChild(element)
    }
}