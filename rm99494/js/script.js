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

//Declarar um array de Objetos de alunos:
let alunos = [
    {nome:"João",nota:8,situacao:"Aprovado"},
    {nome:"Maria",nota:3,situacao:"Reprovado"},
    {nome:"Pedro",nota:7,situacao:"Aprovado"},
    {nome:"Ana",nota:2,situacao:"Reprovado"},
    {nome:"Jose",nota:5,situacao:"Recuperação"}
];

//Imprindo o array de objetos:
console.log(alunos);
//Quebrando linha
console.log("\n");

//Imprimindo um único Objeto do array:
console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situacao}`);
//Quebrando linha
console.log("\n");


//Imprimindo a lista de objetos com forEach:
alunos.forEach( aluno=>{
    if(aluno["situacao"] == "Recuperação"){
        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} ficou de ${aluno["situacao"]}`)    
    }else{
        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
    }
});
//Quebrando linha
console.log("\n");

const divLista = document.getElementById("lista-nomes");

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
// alunos.forEach( (aluno)=>{
//     divLista.innerHTML += `<p>Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}</p>`;
// });

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
alunos.forEach( (aluno)=>{
    let p = document.createElement("p");
    p.textContent = `Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}`;
    divLista.appendChild(p);
    
});