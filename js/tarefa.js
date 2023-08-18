//Cria um array vazio para armazenar as tarefas
let listaTarefasArray = [];

//Seleciona o botão adicionar tarefa pelo seu ID
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Um evento de chamada para o botão, a função será executada quando o botão for acionado. 
botaoAddTarefa.addEventListener("click",( evt )=>{

//Não deixa que o botão seja chamado
    evt.preventDefault();

//Elemento de entrada de texto pelo ID
    const tarefaInput = document.getElementById("#idTarefa");

    const descricaoInput = document.getElementById("#idDescricao");

    const autorInput = document.getElementById("#idAutor");

    const departamentoInput = document.getElementById("#idDepartamento");

    const importanciaInput = document.getElementById("#idImportancia");

    const tarefa = {'tarefa':tarefaInput.value, 'descricao':descricaoInput.value, 'autor': autorInput.value, 'departamento':departamentoInput.value, 'importancia':importanciaInput.value}


//Adiciona valor ao campo de entrada (tarefa)
    listaTarefasArray.push(tarefa);

//Mostrar no console a lista
    console.log(listaTarefasArray);

//Seleciona a lista ul onde as tarefas serão exibidas. 
    const listaTarefasUL = document.querySelector("#lista-tarefas");

//Cria um elemento li (elemento na lista) para a nova tarefa
    let li = document.createElement("li");

//Define o conteúdo de texto do elemento li como valor da tarefa. 
    li.textContent = tarefaInput.value;

//Cria um botão para excluir a tarefa
    let botaoExcluir = document.createElement("button");

//Texto escrito no botão de excluir a tarefa
    botaoExcluir.textContent = " Excluir tarefa ";

//Adiciona o botão de excluir tarefa ao elemento da li
    li.appendChild(botaoExcluir);

//Adiciona elemento li com a tarefa e o botao a lista de tarefas no html. 
    listaTarefasUL.appendChild(li);

//Evento de chamada para o botão, que será executado quando for aciondado.
    botaoExcluir.addEventListener("click", (evt)=>{

        //Pegando o texto do Li e colocando em uma variável
        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");


        //Localizando o indice do elemento a ser removido
        let indice = listaTarefasArray.indexOf(conteudoDoLi[0])

        //Removendo o indice selecionado com o método splice
        listaTarefasArray.splice(indice,1);
        
        //Removendo o elemento li do HTML (target - retorna o elemento para onde o evento ocrreu)
        evt.target.parentNode.remove();

//
        console.log(listaTarefasArray.sort());
    });

//Limpa o campo de entrada da tarefa
    console.log(listaTarefasArray);
    tarefaInput.value = "";
    
});

