
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
        // Pegando o texto do li e colocando em uma variavel
        let conteudoDoli = evt.target.parentNode.textContent.split(" ");
       // console.log(evt.target.parentNode.textContent);3
       // localizando  indice do elemento a ser removido
       let indice = listaTarefasArray.indexOf(conteudoDoli[0])

       //Removendo o indice seleionado com metodo splice
       listaTarefasArray.splice(indice,1);

       // Removendo o elemento li do HTML
       evt.target.parentNode.remove();

       //console.log(evt.target.parentNode.textContent);

       console.log(listaTarefasArray);
    });

    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});