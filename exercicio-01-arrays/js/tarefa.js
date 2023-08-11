let listaTarefasArray = [];

const botaoAddTarefa = document.getElementById("btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    evt.preventDefault();

    const tarefaInput = document.getElementById("idTarefa");

    listaTarefasArray.push(tarefaInput.value);

    const listaTarefasUL = document.getElementById("lista-tarefas");

    let li = document.createElement("li");

    li.textContent = tarefaInput.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "X";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    console.log(listaTarefasArray);
    tarefaInput.value = "";

});