let listaTarefasArray = [];

//const botaAddTarefa = document.getElementById("btnAddTarefa");
const botaAddTarefa = document.querySelector("#btnAddTarefa");

botaAddTarefa.addEventListener("click",( evt )=>{

    evt.preventDefault();

    const tarefaInput = document.querySelector("#idTarefa");

    listaTarefasArray.push(tarefaInput.value)

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    let li = document.createElement("li");

    

    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});