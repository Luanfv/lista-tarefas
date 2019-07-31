var elementInput = document.querySelector("#menu #add #input")
var elementButton = document.querySelector("#menu #add #button")
var containerPendent = document.querySelector("#principal .titulo_tarefas .principal_tarefas")
var containerResolved = document.querySelector("#principal .titulo_tarefas .principal_resolvidas")
var tasksList = JSON.parse(localStorage.getItem("lista_tarefas")) || []
var resolvedList = JSON.parse(localStorage.getItem("lista_resolvidos")) || []

viewTasks()
elementButton.onclick = createTask

function createTask(){
    if(elementInput.value == '' || elementInput.value == null){
        return;
    }

    tasksList.push(elementInput.value)
    elementInput.value = ''
    viewTasks()
    saved()
}

function viewTasks(){
    containerPendent.innerHTML = ''
    containerResolved.innerHTML = ''

    //Mostra as tarefas pendentes
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
        elementRemove.setAttribute("onclick", "removeTask(" + tasksList.indexOf() + ")")
        elementRemove.appendChild(document.createTextNode("Excluir"))

        //Cria um link que irá realocar a tarefa para a lista resolvedList
        var elementResolved = document.createElement("a")
        elementResolved.setAttribute("class", "resolvido")
        elementResolved.setAttribute("href", "#")
        elementResolved.setAttribute("onclick", "resolvedTask(" + i + ")")
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

    //Mostra as tarefas concluidas
    for(i = resolvedList.length - 1; i >= 0; i--){
        //Cria a div principal de uma tarefa
        var elementNew = document.createElement("div")
        elementNew.setAttribute("class", "tarefas")

        //Cria uma div que irá conter o nome da tarefa 
        var elementTask = document.createElement("div")
        elementTask.setAttribute("class", "tarefa")
        elementTask.appendChild(document.createTextNode(resolvedList[i]))

        elementNew.appendChild(elementTask)
        containerResolved.appendChild(elementNew)
    }

    if(tasksList.length <= 0){
        var element = document.createElement("div")
        element.appendChild(document.createTextNode("NENHUMA"))
        containerPendent.appendChild(element)
    }
    if(resolvedList.length <= 0){
        var element = document.createElement("div")
        element.appendChild(document.createTextNode("NENHUMA"))
        containerResolved.appendChild(element)
    }

}

//Função ativa quando clicar em resolvido
function resolvedTask(posicao){
    resolvedList.push(tasksList[posicao])
    tasksList.splice(posicao, 1)
    saved()
    viewTasks()
}

//Função ativa quando clicar em excluir
function removeTask(posicao){
    tasksList.splice(posicao, 1)
    saved()
    viewTasks()
}

function saved(){
    localStorage.setItem("lista_tarefas", JSON.stringify(tasksList))
    localStorage.setItem("lista_resolvidos", JSON.stringify(resolvedList))
}