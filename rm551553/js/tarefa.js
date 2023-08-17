
let listaTarefasArray = [];

// const botaAddTarefa = document.getElementById("btnAddTarefa");
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
        ///Pegando o texto do 'Li' e colocando em uma variável
        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        // console.log(conteudoDoLi[0]);
        ///Localizando o indice do elemento a ser removido
        let indice = listaTarefasArray.indexOf(conteudoDoLi[0])

        ///Removendo o indice selecionado com o método splice
        listaTarefasArray.splice(indice,1);
        
        ///Removendo o elemento 'li' do 'HTML'
        evt.target.parentNode.remove();

        console.log(listaTarefasArray);
    });

    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});