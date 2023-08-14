// // console.log("ola mundo")
// //Declarando um array de nomes de alunos da FIAP:
// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Maria", "Enzo"
// ]
// //Imprimindo o array completo:
// console.log(alunos);
// //Imprimindo um elemento do array:
// console.log(`O segundo aluno é ${alunos[1]}`);
// //Quebrando linha
// console.log("\n");

// //Imprimindo o array com for
// for (i=0; i<alunos.length ; ++i) {
//     //Apresentação dos elementos do Array:
//     let item = `${i+1} - ${alunos[i]} \n`;
//     console.log(`O Aluno impresso é : ${item}`)
// }

// //Quebrando linha
// console.log("\n");
// //Imprimindo o array com forEach e utilizando arrow function:
// alunos.forEach((nome)=>{
//     const item = `Aluno ${nome}`;
//     console.log(item);
// });

// //Imprimindo o array com for of:
// for (const nome of alunos) {
//     const item = `Aluno ${nome}`;
//     console.log(item);
// }

// //Imprimindo o array com for in:

// for (const indice in alunos){
//     const item = `Aluno ${alunos[indice]}`;
//     console.log(item);
// }

//Declarar um array de Objetos de alunos:
//let alunos = [
//    {nome:"João",nota:8,situacao:"Aprovado"},
//    {nome:"Maria",nota:3,situacao:"Reprovado"},
//    {nome:"Pedro",nota:7,situacao:"Aprovado"},
//    {nome:"Ana",nota:2,situacao:"Reprovado"},
//    {nome:"Jose",nota:5,situacao:"Recuperação"}
//];

//Imprindo o array de objetos:
//console.log(alunos);
//Quebrando linha
//console.log("\n");

//Imprimindo um unico objeto do array:
//console.log(`Aluno ${alunos[0].nome} - ${alunos[0].nota} - ${alunos[0].situacao}`)
//Quebrando linha
//console.log("\n");

//Imprimindo a lista de objetos com forEach:
//alunos.forEach( aluno=>{
//    if(aluno["situacao"] == "Recuperação"){
//        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} ficou de ${aluno["situacao"]}`)    
//    }else{
//        console.log(`O aluno ${aluno["nome"]} tirou a nota ${aluno["nota"]} e está ${aluno["situacao"]}`)
//    }
//});
//Quebrando linha
//console.log("\n");

//Recuperando o elemento div da página
//const divLista = document.getElementById("lista-nomes");

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
//alunos.forEach( (aluno)=>{
//    divLista.innerHTML += `<p>Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}`;
//});

//Imprimindo a lista de objetos com forEach e apresentando na página inserindo um elemento HTML dentro da div:
//alunos.forEach( (aluno, index)=>{
    //criando um elemento p no HTML:
//    let p = document.createElement("p");
    //inserindo o texto no elemento p:
//    p.textContent =  `<p>Aluno ${aluno["nome"]} - ${aluno["nota"]} - ${aluno["situacao"]}`;
    //inserindo o elemento p dentro da div:
//    divLista.appendChild(p);

    //Imprimir o id do elemento pai do elemento p:
//    console.log(index + " " + p.parentElement.id);
//});

//Quebrando linha
//console.log("\n");

//Declarando um array de nomes de alunos:
let alunos = [
    "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
]
//
////Inserindo um elemento no final do array com o método push:
//alunos.push("Maria");
//
////Inserindo um elemento no início do array com o método unshift:
//alunos.unshift("José");
//
////imprimindo o array completo:
//console.log(alunos);
//
////Removendo o último elemento do array com o método pop:
//alunos.pop();
//
////Imprimindo o array completo:
//console.log(alunos);
//
////Removendo o primeiro elemento do array com o método shift:
//alunos.shift(); 
//
////Imprimindo o array completo:
//console.log(alunos);
//
////Colocando o array em ordem alfabética com o método sort:
//alunos.sort();
////Imprimindo o array completo:
//console.log(alunos);
////Quebrando linha
//console.log("\n");
//
////Colocando o array em ordem inversa com o método reverse:
//alunos.reverse();
////Imprimindo o array completo:
//console.log(alunos);
////Quebrando linha
//console.log("\n");
//
////Utilizando o método indexOf para encontrar a posição de um elemento no array:
//let posicao = alunos.indexOf("juca");
//console.log(`O aluno juca está na posição ${posicao}`);
////Quebrando linha
//console.log("\n");
//
////Utilizando o método splice para alterar um elemento do array:
//alunos.splice(1,1,"Juca");
////Imprimindo o array completo:
//console.log(alunos);
////Quebrando linha
//console.log("\n");
//
////Utilizando o método splice para alterar e remover um elemento do array:
//alunos.splice(1,2,"Arnaldo");
////Imprimindo o array completo:
//console.log(alunos);
////Quebrando linha
//console.log("\n");
//
////Utilizando o método splice remover um elemento do array:
//alunos.splice(3,1);
////Imprimindo o array completo:
//console.log(alunos);
////Quebrando linha
//console.log("\n");
//
//alunos.splice(alunos.indexOf("Arnaldo"), 1);
//Imprimindo o array completo:
console.log(alunos);
//Quebrando linha
console.log("\n");

const botaoPesquisar = document.getElementById("btnProcurar")

botaoPesquisar.addEventListener("click",(evt)=>{
    evt.preventDefault();

    //Recuperando o valor do input
    const nome = document.getElementById("idNmal").value;

    //Verificando se o nome existe no array:
    if(alunos.indexOf(nome) != -1){
        alert(`O aluno ${nome} está na lista`);
    }else{
        alert(`O aluno ${nome} não está na lista`);
    }
});

//imprimindo o array com o método forEach:
//let novoArrayComIndicesPares = alunos.forEach( (aluno,index)=>{
//    if((index+1) % 2 == 0){
//        console.log(`${index+1} - ${aluno}`);
//        return `${index+1} - ${aluno}`;
//    }
//});
//Quebrando linha
//console.log("\n");

//imprimindo o array com o método map:
//novoArrayComIndicesPares.forEach( (aluno)=>{
//    console.log(aluno);
//});
//Quebrando linha
//console.log("\n");

//imprimindo o array com o método map:
//let novoArrayComIndicesPares = alunos.map( (aluno,index)=>{
//    if((index+1) % 2 == 0){
//        console.log(`${index+1} - ${aluno}`);
//        return `${index+1} - ${aluno}`;
//    }
//});
//Quebrando linha
//console.log("\n");

//imprimindo o array com o método filter:
//novoArrayUndefined = novoArrayComIndicesPares.filter((aluno)=> aluno != undefined);
//Quebrando linha
//console.log("\n");

//imprimindo o novo array com o método filter:
//novoArrayUndefined.forEach((aluno)=> console.log(aluno));
//Quebrando linha
//console.log("\n");

//Filtrando o array com o método filter utilizando o map:
//let novoArrayComIndicesPares2 = alunos.map( (aluno,index)=>{
//    if((index+1) % 2 == 0){
//        console.log(`${index+1} - ${aluno}`);
//        return `${index+1} - ${aluno}`;
//    }
//}).filter((aluno)=> aluno != undefined);
//Quebrando linha
//console.log("\n");

//let pessoa = {
//    nome: "João",
//    idade: 20,
//    genero: "M",
//    altura: 1.80,
//    peso: 80,
//    andando: false,
//    caminhouQuantosMetros: 0,
//    fazerAniversario: function(){
//        this.idade++;
//    },
//    andar: function(metros){
//        this.caminhouQuantosMetros += metros;
//        this.andando = true;
//    },
//    parar: function(){
//        this.andando = false;
//    }
//}

//Imprimindo o objeto completo:
//console.log(pessoa);
//Quebrando linha
//console.log("\n");
//Imprimindo um dos atributos do objeto:
//console.log(pessoa.nome);
//Quebrando linha
//console.log("\n");
//Utilizando o método fazerAniversario:
//pessoa.fazerAniversario();
//Imprimindo o objeto completo:
//console.log(pessoa);
//Quebrando linha
//console.log("\n");
//Utilizando o método andar:
//pessoa.andar(100);
//Imprimindo o objeto completo:
//console.log(pessoa);
//Quebrando linha
//console.log("\n");
//Utilizando o método parar:
//pessoa.parar();
//Imprimindo o objeto completo:
//console.log(pessoa);
//Quebrando linha
//console.log("\n");

// //Criando um objeto Pessoa:
//const pessoa = {
//    nome: "João",
//    idade: 20,
//    genero: "M",
//    altura: 1.80,
//    peso: 80,
//}

//Criando um objeto aluno:
//const aluno = {
//    nota: 10,
//    faltas: 2,
//    curso: "Full Stack",
//    turno: "Manhã",
//}

//Criando um objeto professor:
//const professor = {
//    especialidade: "Programação",
//    quantidadeDeAlunos: 10,
//    salario: 1000,
//}

//Operador Spread para copiar os atributos de um objeto para outro:
//const pessoaAluno = {...pessoa,...aluno};
//const pessoaProfessor = {...pessoa,...professor};
//Imprimindo o objeto completo:
//console.log(pessoaAluno);
//Quebrando linha
//console.log("\n");
//Imprimindo o objeto completo:
//console.log(pessoaProfessor);
//Quebrando linha
//console.log("\n");

//Operador Spread para copiar os atributos de um objeto para outro, alterando o valor de um atributo: nome
//const pessoaAluno2 = {...pessoa,nome:"Pedro",...aluno};
//const pessoaProfessor2 = {...pessoa,nome:"Robson",...professor};
//Imprimindo o objeto completo:
//console.log(pessoaAluno2);
//Quebrando linha
//console.log("\n");
//Imprimindo o objeto completo:
//console.log(pessoaProfessor2);
//Quebrando linha
//console.log("\n");


//Utilizando o rest operator para criar um único objeto a partir de pessoa e aluno:
//const pessoaAluno3 = {...pessoa,...aluno,nota:2,faltas:10};
//Imprimindo o objeto completo:
//console.log(pessoaAluno3);
//Quebrando linha
//console.log("\n");

//Utilizando Desestruturação para criar um único objeto a partir de pessoa e aluno:
//const {nota:nota2,faltas:falta2, ...restantanteDoObj} = pessoaAluno3;
//Imprimindo as variáveis:
//console.log(nota2);
//console.log(falta2);
//console.log(restantanteDoObj);
//Quebrando linha
//console.log("\n");

//Criando um array de objetos alunos com notas e faltas:
//const alunos1TDSPM = [
//    {nome: "João",nota: 10,faltas: 2},
//    {nome: "Pedro",nota: 8,faltas: 5},
//    {nome: "Robson",nota: 9,faltas: 0},
//    {nome: "Lucas",nota: 5,faltas: 3},
//    {nome: "Maria",nota: 7,faltas: 4},
//    {nome: "Ana",nota: 6,faltas: 1},
//    {nome: "Paulo",nota: 4,faltas: 6},
//    {nome: "Carlos",nota: 3,faltas: 7},
//    {nome: "Marcos",nota: 2,faltas: 8},
//    {nome: "Ricardo",nota: 1,faltas: 9},
//];

//Computando a média das notas com o método reduce:
//let mediaNotas = alunos1TDSPM.reduce((acumulador,aluno)=>{
//    return acumulador + aluno.nota;
//},0)/alunos1TDSPM.length;
//Imprimindo a média das notas:
//console.log(mediaNotas);
//Quebrando linha
//console.log("\n");

//Criando um array de notas:
//let arrayNotas = alunos1TDSPM.map((aluno)=> aluno.nota);
////Imprimindo o array de notas:
//console.log(arrayNotas);
////Quebrando linha
//console.log("\n");

//Computando a média das notas com o método reduce:
// 10, 8, 9, 5, 7, 6, 4, 3, 2, 1
//arrayNotas = arrayNotas.reduce((acumulador,nota)=>{
//    return acumulador + nota;
//},0)/arrayNotas.length;
//Imprimindo a média das notas:
//console.log(arrayNotas);
//Quebrando linha
//console.log("\n");

//Criando um array de objetos alunos com os atributos nome, nota, faltas e professor:
const alunos1TDSPM = [
    {nome: "João",nota: 10,faltas: 2,professor: "Prof Alexandre"},
    {nome: "Pedro",nota: 8,faltas: 5,professor: "Prof Alexandre"},
    {nome: "Robson",nota: 9,faltas: 0,professor: "Robson"},
    {nome: "Lucas",nota: 5,faltas: 3,professor: "Prof Luis"},
    {nome: "Maria",nota: 7,faltas: 4,professor: "Carlos"},
    {nome: "Ana",nota: 6,faltas: 1,professor: "Prof Wanderley"},
    {nome: "Paulo",nota: 4,faltas: 6,professor: "Prof Luis"},
    {nome: "Carlos",nota: 3,faltas: 7,professor: "Prof Allien"},
    {nome: "Marcos",nota: 2,faltas: 8,professor: "Prof Ronco"},
    {nome: "Ricardo",nota: 1,faltas: 9,professor: "Jorge"}
];

//Filtrando os alunos que possuem apenas professores:
let alunosComProfessores = alunos1TDSPM.filter((aluno)=> aluno.professor.includes("Prof"));
//Imprimindo o array de alunos com professores:
console.log(alunosComProfessores);
//Quebrando linha
console.log("\n");
