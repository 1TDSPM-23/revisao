//Cria um array vazio para armazenar as tarefas
let listaTarefasArray = [];

//Seleciona o botão adicionar tarefa pelo seu ID
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Um evento de chamada para o botão, a função será executada quando o botão for acionado. 
botaoAddTarefa.addEventListener("click",( evt )=>{

//Não deixa que o botão seja chamado
    evt.preventDefault();

//Elemento de entrada de texto pelo ID
    const tarefaInput = document.getElementById("idTarefa");
    const descricaoInput = document.getElementById("idDescricao");
    const autorInput = document.getElementById("idAutor");
    const departamentoInput = document.getElementById("idDepartamento");
    const importanciaInput = document.getElementById("idImportancia");
    const valorInput = document.getElementById("idValor");
    const duracaoInput = document.getElementById("idDuracao");

    const tarefa = {tarefa: tarefaInput.value,

        descricao: descricaoInput.value, 
        autor: autorInput.value, 
        departamento: departamentoInput.value,
        importancia: importanciaInput.value, 
        valor: valorInput.value, 
        duracao: duracaoInput.value};

//Adiciona valor ao campo de entrada (tarefa)
    listaTarefasArray.push(tarefa);

//Mostrar no console a lista
    console.log(listaTarefasArray);

//Seleciona a lista ul onde as tarefas serão exibidas. 
    const listaTarefasTb = document.querySelector("#listaTarefas");

//Cria os elementos da tabela
    let trTarefas = document.createElement("tr");

//Cria as células da tabela
//Primeira linha - criei o elemento
//Segunda linha - declarei o que vai no elemento 
    let tdDescricao = document.createElement("td");
    tdDescricao.textContent = descricaoInput.value;
    let tdAutor = document.createElement("td");
    tdAutor.textContent = autorInput.value;
    let tdDepartamento = document.createElement("td");
    tdDepartamento.textContent = departamentoInput.value;
    let tdImportancia = document.createElement("td");
    tdImportancia.textContent = importanciaInput.value;
    let tdValor = document.createElement("td");
    tdValor.textContent = valorInput.value; 
    let tdDuracao = document.createElement("td");
    tdDuracao.textContent = duracaoInput.value; 

    console.log(listaTarefasArray);

    //Cria um botão para excluir a tarefa
    let botaoExcluir = document.createElement("button");

//Texto escrito no botão de excluir a tarefa
    botaoExcluir.textContent = " Excluir tarefa ";
//Coloquei todas as informações no html
    listaTarefasTb.appendChild(trTarefas);

//Coloquei todas as informações na linha do html (falo para onde ele vai)
    trTarefas.appendChild(tdDescricao);
    trTarefas.appendChild(tdAutor);
    trTarefas.appendChild(tdDepartamento);
    trTarefas.appendChild(tdImportancia);
    trTarefas.appendChild(tdValor);
    trTarefas.appendChild(tdDuracao); 
    trTarefas.appendChild(botaoExcluir);



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

//map - mapeia cada elemento da lista

//Copia a primeira lista inteira 
    let listaTarefasOrdenadas = [...listaTarefasArray];
    listaTarefasOrdenadas.sort ((a,b)=>{
        return b.importancia - a.importancia; 
    })

    const botaoOrdenacao = document.getElementById("btnOrdenar"); 

    botaoOrdenacao.addEventListener("click",()=>{
        const listaOrdenacao = document.getElementById("listaTarefasOrdenadas");

    //Não permite que a lista ordenada duplique
        listaOrdenacao.innerHTML = "";

//Fiz o for para o código saber que o elemento que ele precisa pegar é o elemento.descricao
        for (const elemento of listaTarefasOrdenadas){
            let trOrdenacao = document.createElement("tr");
            let tdDescricaoOrdenacao = document.createElement("td");
            tdDescricaoOrdenacao.textContent = elemento.descricao;

            listaOrdenacao.appendChild(trOrdenacao);
            trOrdenacao.appendChild(tdDescricaoOrdenacao);

        }
    })

    console.log(importanciaInput.value); 

//Deixar os campos em branco de novo
    tarefaInput.value = "";
    descricaoInput.value="";
    autorInput.value="";
    departamentoInput.value="";
    importanciaInput.value="";
    valorInput.value="";
    duracaoInput.value=""; 

    
    
});

