console.log("Olá Mundo!");

//Declarando um array de nomes de alunos da Fiap
let alunos =["João", "Pedro", "Robson", "Luiz", "Marieta", "Enzo"]

//Imprimindo array inteiro
console.log(alunos);

//Imprimindo um elemento do array e apresentando com 
console.log(`O segundo aluno é ${alunos[1]}`);

//Quebrando linha
console.log("\n");

//Imprimindo o array com for:
for (i=0; i<alunos.length ; ++i) {
    //Apresentação dos elementos do Array:
    let item = `${i+1} - ${alunos[i]} \n`;
    console.log(`O aluno impresso é : ${item}`);}

//Quebrando linha
console.log("\n");

//Imprimindo o array com forEach e utilizando arrow function:
alunos.forEach((nome)=>{
    const item = `Aluno ${nome}`;
    console.log(item);});

//Quebrando linha
console.log("\n");

//Imprimindo o array com for of:
for (const nome of alunos){
    const item = `Aluno ${nome}`;
    console.log(item);}

//Quebrando linha
console.log("\n");

for (const indice in alunos){
    const item = `Aluno ${alunos[indice]}`;
    console.log(item);}
