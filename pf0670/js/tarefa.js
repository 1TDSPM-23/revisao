
let listaTarefasArray = [];

//const botaAddTarefa = document.getElementById("btnAddTarefa");
const botaAddTarefa = document.querySelector("#btnAddTarefa");

botaAddTarefa.addEventListener("click",( evt )=>{

    evt.preventDefault();

    const tarefaInput = document.querySelector("#idTarefa");

    listaTarefasArray.push(tarefaInput.value)

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    let li = document.createElement("li");

    li.textContent = tarefaInput.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    

    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});