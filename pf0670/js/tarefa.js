
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

    botaoExcluir.addEventListener("click", (evt)=>{
        let conteudoDoLi = evt.target.parentNode.textContent
       

        //Removendo o elemento li do HTML
        evt.target.parentNode.remove();

         // console.log(evt.target.parentNode.textContent);
    });

    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});