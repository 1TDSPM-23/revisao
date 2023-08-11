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

    botaoExcluir.textContent = " X ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt) => {
        //Pegando o texto do Li e colocando em uma variável
        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        
        let indice = listaTarefasArray.indexOf(conteudoDoLi[0]);

        //Removendo o índice selecionado com o método splice
        listaTarefasArray.splice(indice, 1);

        // console.log(evt.target.parentNode.textContent);
        
        //Removendo o elemento li do html
        evt.target.parentNode.remove();
        
    });

    console.log(listaTarefasArray);
    tarefaInput.value = "";

});