// // console.log("Hello World!");

// //Declarando um array de nomes de alunos da FIAP:
// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luiz", "Marieta", "Enzo"
// ]

// //Imprimindo Array inteiro
// console.log(alunos);

// //Imprimindo um elemento do array e apresentando com Template String
// console.log(`O segundo aluno é ${alunos[1]}`);

// //Quebrando linha
// console.log("\n");

// //Imprimindo o array com for
// for(i = 0; i < alunos.length; ++i){
//     //Apresentação dos elementos do Array
//     let item = `${i+1} - ${alunos[i]} \n`;
//     console.log(`O aluno impresso é: ${item}`);
// }

// //Quebrando linha
// console.log("\n");

// //Imprimindo array com forEach e utilizando arrow function:
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Quebrando Linha
// console.log("\n");

// //Imprimindo array com forEach e função anônima:
// alunos.forEach(function(nome){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Imprimindo array com for of:
// for (const nome of alunos){
//     const item = `Aluno ${nome}`;
//     console.log(item);
// }

// //Imprimindo array com for in:
// for (const indice in alunos){
//     const item = `Aluno ${alunos[indice]}`;
//     console.log(item);
// }

// //Quebrando Linha
// console.log("\n");

//Declarar um array de Objetos de alunos:
let alunos = [
    {"Nome": "João", "Nota": 8, "Situação":"Aprovado"},
    {"Nome": "Maria", "Nota": 3, "Situação":"Reprovado"},
    {"Nome": "Pedro", "Nota": 7, "Situação":"Aprovado"},
    {"Nome": "Ana", "Nota": 2, "Situação":"Reprovado"},
    {"Nome": "Jose", "Nota": 5, "Situação":"Recuperação"},
];

//Imprimindo o array de objetos:
console.log(alunos);

//Quebrando linha
console.log("\n");  

//Imprimindo um únco objeto do Array
console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situação}`); 

//Quebrando linha
console.log("\n");  

//Imprimindo a lista de objetos com forEach:
alunos.forEach(aluno=>{
    if(aluno["Situação"] == "Recuperação")
        console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} e está de ${aluno["Situação"]}`)
    else
        console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} e está ${aluno["Situação"]}`)
})

//Quebrando linha
console.log("\n"); 