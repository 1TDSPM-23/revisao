listaTarefas = [];

const btnAddTask = document.getElementById("idBtnAddTask");
const feitaAParte = document.getElementById("idFeitaAParte");

let campoValor = document.getElementById("idValor");
let campoDuracao = document.getElementById("idDuracao");


btnAddTask.addEventListener("click", (evt) => {
    evt.preventDefault();

    // let dados = {
    //     descricao: document.getElementById("idDescricao").value,
    //     autor: document.getElementById("idAutor").value,
    //     departamento: document.getElementById("idDepartamento").value,
    //     importancia: document.getElementById("idImporancia").value
    // };

    const descricao = document.getElementById("idDescricao").value;
    const autor = document.getElementById("idAutor").value;
    const departamento = document.getElementById("idDepartamento").value;
    const importancia = document.getElementById("idImportancia").value;
    const feitaAParte = document.getElementById("idFeitaAParte").value;
    const valor = document.getElementById("idValor").value;
    const duracao = document.getElementById("idDuracao").value;

    if(descricao && autor && departamento && importancia && feitaAParte !== ""){
        let dados = {
            descricao: descricao,
            autor: autor,
            departamento: departamento,
            importancia: importancia,
            feitaAParte : feitaAParte,
            valor: valor,
            duracao: duracao
        };
    
        listaTarefas.push(dados);
        listaTarefasOrganizada = organizarLista(listaTarefas);

        console.log(listaTarefas);
    
        addTarefa(dados);

        addTarefaImportante(listaTarefasOrganizada, dados);
    }
    else alert("Preencha todos os campos disponíveis")

    let btnDelTask = document.getElementById("idBtnDelTask");

})


function addTarefa(tarefa){
    const tabela = document.getElementById("idTabela");

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${tarefa.descricao}</td>
    <td>${tarefa.autor}</td>
    <td>${tarefa.departamento}</td>
    <td>${tarefa.importancia}</td>
    <td>${tarefa.valor}</td>
    <td>${tarefa.duracao}</td>
    <button class="idBtnDelTask">X</button>
    `;

    tabela.appendChild(tr);

    const delTarefaBtn = tr.querySelector(".idBtnDelTask");
    delTarefaBtn.addEventListener("click", (evt) =>{
        const rowIndex = Array.from(tabela.getElementsByTagName("tr")).indexOf(tr);
        delTarefa(rowIndex);
        console.log(listaTarefas)
        tr.remove();
    })
}

function delTarefa(index){
    listaTarefas.splice(index, 1);
}

function validacao(){
    if(feitaAParte.checked){
        campoValor.removeAttribute("disabled");
        campoDuracao.removeAttribute("disabled");
    }
    else {
        campoValor.setAttribute("disabled", true);
        campoDuracao.setAttribute("disabled", true);
        campoValor.value = "";
        campoDuracao.value = "";
    }
}

function organizarLista(lista){
    lista.sort((a, b) => a.importancia - b.importancia);   
}

function addTarefaImportante(lista, tarefa){
    const tImportante = document.getElementById("idTabImportante");
    const ul = document.createElement("ul");

    ul.innerHTML = `
    <li class="tarefa">Importância: ${tarefa.importancia} | Descrição: ${tarefa.descricao}</li>
    <button class="idBtnDelTask">X</button>
    `
    tImportante.appendChild(ul);

    const delTarefaBtn = ul.querySelector(".idBtnDelTask");
    delTarefaBtn.addEventListener("click", (evt) =>{
    ul.remove();
})
}
//Funcionando
// const tImportante = document.getElementById("idTabImportante");
// const ul = document.createElement("ul");

// ul.innerHTML = `
//     <li class="tarefa">Importância: ${tarefa.importancia} | Descrição: ${tarefa.descricao}</li>
//     <button class="idBtnDelTask">X</button>
//     `
// tImportante.appendChild(ul);

// const delTarefaBtn = ul.querySelector(".idBtnDelTask");
// delTarefaBtn.addEventListener("click", (evt) =>{
//     ul.remove();
// })

//Teste
/*
const tImportante = document.getElementById("idTabImportante");
    const ul = document.createElement("ul");
    
    tImportante.innerHTML = `
        <li class="tarefa">Importância: ${tarefa.importancia} | Descrição: ${tarefa.descricao}</li>
        <button class="idBtnDelTask">X</button>
        `
    tImportante.appendChild(ul);

    const delTarefaBtn = ul.querySelector(".idBtnDelTask");
    delTarefaBtn.addEventListener("click", (evt) =>{
        ul.remove();
    })

    const tarefas = Array.from(tImportante.getElementsByClassName("tarefa"));

    for(let tarefa of lista){
        tImportante.insertBefore(tarefa, tImportante.firstChild);
    }*/ 