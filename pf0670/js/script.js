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
let alunos = [
    {nome: "João", nota:8, situacao:"Aprovado"},
    {nome: "Maria", nota:3, situacao:"Reprovado"},
    {nome: "Pedro", nota:7, situacao:"Aprovado"},
    {nome: "Ana", nota:2, situacao:"Reprovado"},
    {nome: "Jose", nota:5, situacao:"Recuperação"}
]

//Imprindo o array de objetos:
console.log(alunos);
//Quebrando linha
console.log("\n");

//imprimindo um unico objeto do array
console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situacao}`);

//quebrando linha
console.log("\n");

//imprimindo a lista de objetos com forEach
alunos.forEach(aluno=>{
    if(aluno["situacao"]== "Recuperação"){
        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e ficou de ${aluno["situacao"]}`)
    }
    console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
});







