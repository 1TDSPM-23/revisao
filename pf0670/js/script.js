// //console.log("Olá Mundo! ");
// //Declarando um array de nomes de alunos da FIAP:
// //let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo" 
// //]
// //console.log(alunos);
// //imprimindo um elemento do array e apresentando com Template String
// //console.log(`O segndo aluno é ${alunos[1]}`);
// //Quebrando linha
// console.log("\n");

// //Imprimir o array com for:
// //for (i=0; i<alunos.length ; ++i) {
//     //Apresentação dos elementos do Array:
//     //let item = `${i+1} - ${alunos[i]} \n`;
//    // console.log(`O aluno impresso é : ${item}`);

// //}

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com forEach e utilizando arrow function:
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Imprimindo o array com for of:
// for (const indice in alunos)
// {const item = `Aluno ${alunos[indice]}`;
// console.log(item);
// }

// //Quebrando linhas
// console.log("\n");

// //Declarar um array de Objetos de alunos:

let alunos = [
    {"Nome":"João","Nota":8,"Situacao":"Aprovado"},
    {"Nome":"Pedro","Nota":9,"Situacao":"Reprovado"},
    {"Nome":"Robson","Nota":7,"Situacao":"Aprovado"},
    {"Nome":"Luiz","Nota":6,"Situacao":"Reprovado"},
    {"Nome":"Marieta","Nota":5,"Situacao":"Recuperação"},
    {"Nome":"Enzo","Nota":4,"Situacao":"Recuperação"}
];
//Iprimindo o array de onjetos:
console.log(alunos);

//Quebrando linha
console.log("\n");

//Imprimindo um único objeto do array
console.log(`Aluno ${alunos[0].Nome} - ${alunos[0].Nota} - ${alunos[0].Situacao}`);

//Quebrando linha
console.log("\n");

//Imprimindo a listade onjetos com forEach
alunos.forEach( aluno=>{
    if(aluno["situacao"] == "Recuperação"){
    console.log(`O aluno ${aluno ["Nome"]} tirou a nota ${aluno["Nota"]} e ficou ${aluno["Situacao"]}`)
    }else{
    console.log(`O aluno ${aluno ["Nome"]} tirou a nota ${aluno["Nota"]} e esta ${aluno["Situacao"]}`)

    }
});
//Quebrando linha
console.log("\n");