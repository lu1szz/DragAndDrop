const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".coluna")

let tarefaArrastada = null

tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", 
    iniciarArrasto)
    tarefa.addEventListener("dragend",
    finalizarArrasto)
   
})

colunas.forEach(coluna => {
    coluna.addEventListener("dragover", 
    permitirSoltar)
    coluna.addEventListener("drop", soltarTarefa)

})

function iniciarArrasto(event){
    tarefaArrastada = this;
    this.classList.add("arrastada")
}

function finalizarArrasto(event){
    this.classList.remove("arrastando")
}

function permitirSoltar(event){
    event.preventDefault();

}


function soltarTarefa(event){
    event.preventDefault();
    if(tarefaArrastada){
        this.querySelector(".tarefas").appendChild(tarefaArrastada)
        tarefaArrastada = null
    }
}

const formAdicionarTarefa = document.getElementById
("adicionar-tarefa")

formAdicionarTarefa.addEventListener("submit",
adicionarTarefa)

function adicionarTarefa(event){
    event.preventDefault()

    const novaTarefa = document.getElementById("nova-tarefa").value
    if(novaTarefa){
        const novaTarefaLi = document.createElement("li")
        novaTarefaLi.innerHTML = novaTarefa
        novaTarefaLi.draggable = true
        novaTarefaLi.classList.add("tarefa")


        document.getElementById("tarefas-a-fazer").appendChild(novaTarefaLi)
        document.getElementById("nova-tarefa").value = ""

        novaTarefaLi.addEventListener("dragstart", iniciarArrasto)
        novaTarefaLi.addEventListener("dragend", finalizarArrasto)
    }
}