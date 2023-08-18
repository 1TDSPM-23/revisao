
let tarefaDone= []

const btnAddTarefa = document.querySelector("#btnAddTarefa");

btnAddTarefa.addEventListener("click",( evt )=>{

    evt.preventDefault();

    const descricao = document.querySelector("#descricao");
    tarefaDone.push(descricao.value)
    const listaDes = document.querySelector("#tarefaDescricao");
    listaDes.appendChild(l1);

    const autor = document.querySelector("#autor");
    tarefaDone.push(autor.value)
    const listaAut = document.querySelector("#tarefaAutor");
    listaAut.appendChild(l2);


    const departamento = document.querySelector("#departamento");
    tarefaDone.push(departamento.value)
    const listaDepar = document.querySelector("#tarefaDepartamento");
    listaDepar.appendChild(l3);

    const importância = document.querySelector("#importância");
    tarefaDone.push(importância.value)
    const listaImpor = document.querySelector("#tarefaImportância");
    listaImpor.appendChild(l4);

    let l1 = document.createElement("l1");
    let l2 = document.createElement("l2");
    let l3 = document.createElement("l3");
    let l4 = document.createElement("l4");

    l1.textContent = tarefaDone.value;
    l2.textContent = tarefaDone.value;
    l3.textContent = tarefaDone.value;
    l4.textContent = tarefaDone.value;

    let removeBtn = document.createElement("button");

    removeBtn.textContent = " FEITO ";

    li.appendChild(removeBtn);


    removeBtn.addEventListener("click", (evt)=>{
       
        let conteudoDol1 = evt.target.parentNode.textContent.split(" ");
        let conteudoDol2 = evt.target.parentNode.textContent.split(" ");
        let conteudoDol3 = evt.target.parentNode.textContent.split(" ");
        let conteudoDol4 = evt.target.parentNode.textContent.split(" ");
        
        let indice1 = tarefaDone.indexOf(conteudoDol1[0])
        let indice2 = tarefaDone.indexOf(conteudoDol2[0])
        let indice3 = tarefaDone.indexOf(conteudoDol3[0])
        let indice4 = tarefaDone.indexOf(conteudoDol4[0])


        tarefaDone.splice(indice1,1);
        tarefaDone.splice(indice2,1);
        tarefaDone.splice(indice3,1);
        tarefaDone.splice(indice4,1);
        

        evt.target.parentNode.remove();

        console.log(tarefaDone);
    });

    console.log(tarefaDone);
    tarefaInput.value = "";
    
});