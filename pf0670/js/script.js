//console.log("Olá mundo")
//Declarando um array de nomes de alunos da FIAP
// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
// ]

//Imprimindo o array completo
//console.log(alunos);

//Imprimindo um elemento do array e apresentando com Template String:
//console.log(`O segundo aluno é ${alunos[1]}`);

//Quebrando linha
//console.log("\n");

//Imprimindo o array com for
//for (i=0; i=alunos.length; ++i){
    //apresentação de elementos do array:
//    let item = `${i+1} - ${alunos[i]} \n`;
//    console.log(`O aluno impresso é: ${item}`);
//}

//imprimindo o array com forEach e utilizando arrow function
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

//imprimindo o array com forEach e utilizando função anonima, unica coisa que vai mudar é q vai escreve function e tira arrow function
// alunos.forEach(function(nome){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

//imprimindo o array com for of:
// for (const nome of alunos){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// }

//Quebrando linha
//console.log("\n");

//Imprimindo o array com for in:
// for (const i in alunos){
//     const item = `Aluno ${alunos[indice]}`;
//     console.log(item);
// }

//Declarar um array de Objetos de alunos:
// let alunos = [
//     {nome: "João", nota:8, situacao:"Aprovado"},
//     {nome: "Maria", nota:3, situacao:"Reprovado"},
//     {nome: "Pedro", nota:7, situacao:"Aprovado"},
//     {nome: "Ana", nota:2, situacao:"Reprovado"},
//     {nome: "Jose", nota:5, situacao:"Recuperação"}
// ]

//Imprindo o array de objetos:
//console.log(alunos);
//Quebrando linha
//console.log("\n");

//imprimindo um unico objeto do array
//console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situacao}`);

//quebrando linha
//console.log("\n");

//imprimindo a lista de objetos com forEach
// alunos.forEach(aluno=>{
//     if(aluno["situacao"]== "Recuperação"){
//         console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e ficou de ${aluno["situacao"]}`)
//     }
//     console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
// });

//recuperando o elemento div da pagina
//const divLista = document.getElementById("lista-nomes");

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
// alunos.forEach((aluno)=>{
//     divLista.innerHTML += `<p>Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}</p>`
// });

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
//alunos.forEach( (aluno, index)=>{
    //criando um elemento p no html
//    let p = document.createElement("p");
    //inserindo o texto no elemento p
//    p.textContent = `Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}`;
    //Inserindo o elemento p dentro da div:
//    divLista.appendChild(p);

    //imprimir o id do elemento pai do elemento p
 //   console.log(index + " " + p.parentElement.id);
//});

//quebrando linha
//console.log("\n");

//declarando um array de nomes de alunos:
let alunos = [
    "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
]

//inserindo um elemento no final do array com o metodo push:
//alunos.push("Maria");

//Inserindo um elemento no inicio do array com metodo unshift:
//alunos.unshift("José");

//imprimindo o array completo
//console.log(alunos);

//removendo o ultimo elemento do array com metodo pop:
//alunos.pop();

//console.log(alunos);

//removendo o primeiro elemento do array com metodo shift:
//alunos.shift();

//console.log(alunos);

//Quebrando linha
//console.log("\n");

//Colocando o array em ordem alfabética com o método sort:
//alunos.sort();
//Imprimindo o array completo:
//console.log(alunos);

//colocando o array em ordem inversa com o metodo reverse:
//alunos.reverse();
//console.log(alunos);
//console.log("\n");

//utilizando o metodo indexOf para encontrar a posição de um elemento do array:
// let posicao = alunos.indexOf("Marieta");
// console.log(`O aluno está na posição ${posicao}`);

//utilizando o metodo splice para alterar um elemento do array:
// alunos.splice(1,1,"Juca");
// console.log(alunos);
// console.log("\n")

//utilizando o metodo splice para alterar um elemento do array:
// alunos.splice(1,2,"Arnaldo");
// console.log(alunos);
// console.log("\n")

//Utilizando o método splice remover um elemento do array:
//alunos.splice(3,1);
//Imprimindo o array completo:
//console.log(alunos);
//Quebrando linha
//console.log("\n");
//alunos.splice(alunos.indexOf("Arnaldo"), 1)

const botaoPesquisar = document.getElementById("btnProcurar");

botaoPesquisar.addEventListener("click", (evt)=>{
    
    evt.preventDefault(); //previne o recarregamento da pagina/formulario/evento -- pra n dar refresh na pagina 
    
    //recuperando os dados do input:
    const nome = document.getElementById("idNmAl").value;

    //verificando se o nome existe no array
    if(alunos.indexOf(nome) != -1){
        alert(`O aluno ${nome} está na lista`)
    }else{
        alert(`O aluno ${nome} não está na lista`)
    }

});













