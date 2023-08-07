// console.log("Olá Mundo!");
//Declarando um array de nomes de alunos da FIAP:
// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
// ]
// //Imprimindo o array completo:
// console.log(alunos);
// //Imprimindo um elemento do array e apresentando com Template String:
// console.log(`O segundo aluno é ${alunos[1]}`);
// //Quebrando linha
// console.log("\n");

// //Imprimindo o array com for:
// for (i=0; i<alunos.length ; ++i) {
//     //Apresentação dos elementos do Array:
//     let item = `${i+1} - ${alunos[i]} \n`;
//     console.log(`O aluno impresso é : ${item}`);
// }

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com forEach e utilizando arrow function:
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com forEach e utilizando fuunção anônima
// alunos.forEach(function(nome){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com for of:
// for (const nome of alunos){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// }

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com for in:
// for (const indice in alunos){
//     const item = `Aluno ${alunos[indice]}`;
//     console.log(item);
// }

// //Declarar um array de Objetos de alunos:
// let alunos = [
//     {nome:"João",nota:8,situacao:"Aprovado"},
//     {nome:"Maria",nota:3,situacao:"Reprovado"},
//     {nome:"Pedro",nota:7,situacao:"Aprovado"},
//     {nome:"Ana",nota:2,situacao:"Reprovado"},
//     {nome:"Jose",nota:5,situacao:"Recuperação"}
// ];

// //Imprindo o array de objetos:
// console.log(alunos);
// //Quebrando linha
// console.log("\n");

// //Imprimindo um único Objeto do array:
// console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situacao}`);
// //Quebrando linha
// console.log("\n");


// //Imprimindo a lista de objetos com forEach:
// alunos.forEach( aluno=>{
//     if(aluno["situacao"] == "Recuperação"){
//         console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} ficou de ${aluno["situacao"]}`)    
//     }else{
//         console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
//     }
// });
// //Quebrando linha
// console.log("\n");

// //Recuperando o elemento div da página:
// const divLista = document.getElementById("lista-nomes");

// //Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
// // alunos.forEach( (aluno)=>{
// //     divLista.innerHTML += `<p>Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}</p>`;
// // });

// //Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
// alunos.forEach( (aluno,index)=>{
//     //Criando um elemento p no HTML:
//     let p = document.createElement("p");
//     //Inserindo o texto no elemento p:
//     p.textContent = `Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}`;
//     //Inserindo o elemento p dentro da div:
//     divLista.appendChild(p);

//     //Imprimir o id do elemento pai do elemento p:
//     console.log(index + " "+ p.parentElement.id);
// });

// //Quebrando linha
// console.log("\n");


//Declarando um array de nomes de alunos:
let alunos = [
    "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
]

//Inserindo um elemento no final do array com o método push:
alunos.push("Maria");

//Inserindo um elemento no início do array com o método unshift:
alunos.unshift("José");

//Imprimindo o array completo:
console.log(alunos);

//Removendo o último elemento do array com o método pop:
alunos.pop();

//Imprimindo o array completo:
console.log(alunos);

//Removendo o primeiro elemento do array com o método shift:
alunos.shift(); 
//Imprimindo o array completo:
console.log(alunos);

//Quebrando linha
console.log("\n");

//Colocando o array em ordem alfabética com o método sort:
alunos.sort();
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");

//Colocando o array em ordem inversa com o método reverse:
alunos.reverse();
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");


//Utilizando o método indexOf para encontrar a posição de um elemento no array:
let posicao = alunos.indexOf("juca");
console.log(`O aluno Juca está na posição ${posicao}`);
//Quebrando linha
console.log("\n");

//Utilizando o método splice para alterar um elemento do array:
alunos.splice(1,1,"Juca");
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");

//Utilizando o método splice para alterar eu remover um elemento do array:
alunos.splice(1,2,"Arnaldo");
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");

//Utilizando o método splice remover um elemento do array:
alunos.splice(3,1);
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");

alunos.splice(alunos.indexOf("Enzo"),1);
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");
const botaoPesquisar = document.getElementById("btnProcurar");

botaoPesquisar.addEventListener("click",(evt)=>{
    console.log(evt.target);

    evt.preventDefault();

    //Recuperando o valor do input:
    const nome = document.getElementById("idNmAl").value;

    //Verificando se o nome existe no array:
    if(alunos.indexOf(nome) != -1){
        alert(`O aluno ${nome} está na lista`);
    }else{
        alert(`O aluno ${nome} não está na lista`);
    }
});