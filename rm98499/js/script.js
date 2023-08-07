//console.log("Olá Mundo!");

//Declarando um array de nomes de alunos da Fiap
//let alunos =["João", "Pedro", "Robson", "Luiz", "Marieta", "Enzo"]

//Imprimindo array inteiro
//console.log(alunos);

//Imprimindo um elemento do array e apresentando com 
//console.log(`O segundo aluno é ${alunos[1]}`);

//Quebrando linha
//console.log("\n");

//Imprimindo o array com for:
//for (i=0; i<alunos.length ; ++i) {
    //Apresentação dos elementos do Array:
//    let item = `${i+1} - ${alunos[i]} \n`;
//    console.log(`O aluno impresso é : ${item}`);}

//Quebrando linha
//console.log("\n");

//Imprimindo o array com forEach e utilizando arrow function:
//alunos.forEach((nome)=>{
//    const item = `Aluno ${nome}`;
//    console.log(item);});

//Quebrando linha
//console.log("\n");

//Imprimindo o array com for of:
//for (const nome of alunos){
//   const item = `Aluno ${nome}`;
//    console.log(item);}

//Quebrando linha
//console.log("\n");

//for (const indice in alunos){
//    const item = `Aluno ${alunos[indice]}`;
//   console.log(item);}
 
//Quebrando linha
//console.log("\n");

//Declarar um array de Objetos de alunos:

let alunos = [ 
    {"Nome":"João","Nota":8,"Situacao":"Aprovado"},
    {"Nome":"Pedro","Nota":9,"Situacao":"Reprovado"},
    {"Nome":"Robson","Nota":7,"Situacao":"Aprovado"},
    {"Nome":"Luiz","Nota":6,"Situacao":"Reprovado"},
    {"Nome":"Marieta","Nota":5,"Situacao":"Recuperação"},
    {"Nome":"Enzo","Nota":4,"Situacao":"Recuperação"},
];
//Imprindo o array de objetos:
console.log(alunos);

//Quebrando linha
console.log("\n");

//Imprimindo um único Objeto do array:
console.log(`Aluno ${alunos[0].Nome} - ${alunos[0].Nota} - ${alunos[0].Situacao}`);

//Quebrando linha
console.log("\n");

//Imprimindo a lista de objetos com forEach:
alunos.forEach( aluno=>{
    if(aluno["Situação"] == "Recuperação"){
    console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} e está ${aluno["Situacao"]}`)}
    else{
    console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} e está ${aluno["Situacao"]}`)}});

//Quebrando linha
console.log("\n");

//Recuperando o elemento div da página:
const divLista = document.getElementById("lista-nomes");

//
alunos.forEach( (aluno)=>{
    divLista.innerHTML += <p>Aluno ${aluno["Nome"]} - ${aluno["Nota"]} - ${aluno["situação"]}</p>
});

alunos.forEach( (aluno)=>{

});



