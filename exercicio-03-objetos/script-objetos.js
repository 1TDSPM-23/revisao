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
        organizarLista(listaTarefas);

        console.log(listaTarefas);
    
        addTarefa(dados);
    }
    else alert("Preencha todos os campos disponíveis")

    let btnDelTask = document.getElementById("idBtnDelTask");

    btnDelTask.addEventListener("click", (evt) => {
        evt.target.parentNode.remove();
    })
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
    <button id="idBtnDelTask" onclick="delTarefa()"> X </button>
    `

    tabela.appendChild(tr);

}

function delTarefa(index){

}

function validacao(){
    if(feitaAParte.checked){
        campoValor.removeAttribute("disabled");
        campoDuracao.removeAttribute("disabled");
    }
    else {
        campoValor.setAttribute("disabled", true);
        campoDuracao.setAttribute("disabled", true);
    }
}

function organizarLista(lista){
    lista.sort((a, b) => a.importancia - b.importancia);
}

function addTarefaImportante(tarefa){
    const tImportante = document.getElementById("idTabImportante");
    const ul = document.createElement("ul");

    ul.innerHTML = `
    <li>Importância: ${tarefa.importancia} | Descrição: ${tarefa.descricao}</li>
    `

    tImportante.appendChild(ul);
}