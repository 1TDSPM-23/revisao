// //console.log("Olá Mundo");
// // declarando um array de nomes dos alunos

// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
// ]
// // imprimindo array completo
// console.log(alunos);

// //imprimindo um elemento só da array
// console.log(`o segundo aluno é ${alunos[6]}`);

// //quebrando linha
// console.log("\n");

// //imprimir o array com for:
// for (i=0; i<alunos.length ; ++i){
//     //apresentação dos elementos do array
//     let item = `${i+1} - ${alunos[i]} \n`;
//     console.log(`O alunoe impresso é: ${item}`);
// }

// //Quebrando linha
// console.log("\n");


// //imprimindo array com foreach e utilizando arrow function
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// console.log("\n");

// function soma(a, b){
//     return a *2, b *3;
// }

// const soma2 = ()=>{ return a *2, b *3;}

// //imprimindo array com for of
// for (const nome of alunos) {
//     const item = `Aluno ${nome}`;
//     console.log (item)
// }
     
// //Quebrando linha
// console.log("\n");

// //imprimindo com for in
// for (const indice in alunos){
//     const item = `Aluno ${alunos[indice]}`;
//     console.log (item)


//Declarar um array de Objetos de alunos:
let alunos = [
    {nome:"João",nota:8,situacao:"Aprovado"},
    {nome:"Maria",nota:3,situacao:"Reprovado"},
    {nome:"Pedro",nota:7,situacao:"Aprovado"},
    {nome:"Ana",nota:2,situacao:"Reprovado"},
    {nome:"Jose",nota:5,situacao:"Recuperação"}
];

//imprimindo array de objetos
console.log(alunos);

console.log("\n")

//imprimindo um unico objeto da array
console.log(`Aluno ${alunos[3].nome} ${alunos[3].nota} ${alunos[3].situacao}`);

console.log("\n")

//imprimindo a lista de objetos com foreach
alunos.forEach( aluno=>{
    if(aluno["situacao"] == "Recuperação"){
        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} ficou de ${aluno["situacao"]}`)    
    }else{
        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
    }
});
