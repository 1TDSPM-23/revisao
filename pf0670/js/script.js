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

//declarando um array de nomes de alunos:
// let alunos = [
//     "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
// ]

// const botaoPesquisar = document.getElementById("btnProcurar");

// botaoPesquisar.addEventListener("click", (evt)=>{
//     console.log(evt.target)
//     evt.preventDefault(); //previne o recarregamento da pagina/formulario/evento -- pra n dar refresh na pagina 
    
//     //recuperando os dados do input:
//     const nome = document.getElementById("idNmAl").value;

//     //verificando se o nome existe no array
//     if(alunos.indexOf(nome) != -1){
//         alert(`O aluno ${nome} está na lista`)
//     }else{
//         alert(`O aluno ${nome} não está na lista`)
//     }

// });

//imprimindo o array com o método forEach:
// let novoArrayComIndicesPares = alunos.forEach( (aluno,index)=>{
//     if((index+1) % 2 == 0){
//         console.log(`${index+1} - ${aluno}`);
//         return `${index+1} - ${aluno}`;
//     }
// });
//Quebrando linha
// console.log("\n");

//imprimindo o array com o método map:
// novoArrayComIndicesPares.forEach( (aluno)=>{
//     console.log(aluno);
// });

// console.log("\n");

//imprimindo o array com o método map:
// let novoArrayComIndicesPares = alunos.map( (aluno,index)=>{
//     if((index+1) % 2 == 0){
//         console.log(`${index+1} - ${aluno}`);
//         return `${index+1} - ${aluno}`;
//     }
// });
//Quebrando linha
//console.log("\n");

//imprimindo o array com o método filter:
//novoArrayUndefined = novoArrayComIndicesPares.filter( (aluno)=> aluno != undefined );
//Quebrando linha
//console.log("\n");

//imprimindo o novo array com o método filter:
//novoArrayUndefined.forEach((aluno)=> console.log(aluno));

//filtrando o array com o método filter utilizando o map
// let novoArrayComIndicesPares2 = alunos.map((aluno,index)=> {
//     if((index+1) % 2 == 0){
//         console.log(`${index+1} - ${aluno}`);
//         return `${index+1} - ${aluno}`;
//     }
// }).filter((aluno) => aluno != undefined);

// console.log("\n");

//criando um objeto pessoa 
// let pessoa = {
//     nome: "João",
//     idade: 20,
//     genero: "M",
//     altura: 1.80,
//     peso: 80,
//     andando: false,
//     caminhouQuantosMetros: 0,
//     fazerAniversario: function(){
//         this.idade++;
//     },
//     andar: function(metros){
//         this.caminhouQuantosMetros += metros;
//         this.andando = true;
//     },
//     parar: function(){
//         this.andando = false;
//     }
// };

// //Imprimindo o objeto completo:
// console.log(pessoa);
// //Quebrando linha
// console.log("\n");
// //Imprimindo um dos atributos do objeto:
// console.log(pessoa.nome);
// //Quebrando linha
// console.log("\n");
// //Utilizando o método fazerAniversario:
// pessoa.fazerAniversario();
// //Imprimindo o objeto completo:
// console.log(pessoa);
// //Quebrando linha
// console.log("\n");
// //Utilizando o método andar:
// pessoa.andar(100);
// //Imprimindo o objeto completo:
// console.log(pessoa);
// //Quebrando linha
// console.log("\n");
// //Utilizando o método parar:
// pessoa.parar();
// //Imprimindo o objeto completo:
// console.log(pessoa);
// //Quebrando linha
// console.log("\n");

//criando um objeto Pessoa:
// const pessoa = {
//     nome: "João",
//     idade: 20,
//     genero: "M",
//     altura: 1.80,
//     peso: 80,
// }

// //criando um objeto aluno:
// const aluno = {
//     nota: 10,
//     faltas: 2,
//     curso: "Full Stack",
//     turno: "Manhã",
// }

// //Criando um objeto professor:
// const professor = {
//     especialidade: "Programação",
//     quantidadeDeAlunos: 10,
//     salario: 1000,
// }

// //Operador Spread para copiar os atributos de um objeto para outro:
// const pessoaAluno = {...pessoa,...aluno,};
// const pessoaProfessor = {...pessoa,...professor};
// //Imprimindo o objeto completo:
// console.log(pessoaAluno);
// //Quebrando linha
// console.log("\n");
// //Imprimindo o objeto completo:
// console.log(pessoaProfessor);
// //Quebrando linha
// console.log("\n");

// //Operador Spread para copiar os atributos de um objeto para outro, alterando o valor de um atributo: nome
// const pessoaAluno2 = {...pessoa,nome:"Pedro",...aluno};
// const pessoaProfessor2 = {...pessoa,nome:"Robson",...professor};
// //Imprimindo o objeto completo:
// console.log(pessoaAluno2);
// //Quebrando linha
// console.log("\n");
// //Imprimindo o objeto completo:
// console.log(pessoaProfessor2);
// //Quebrando linha
// console.log("\n");

// //Utilizando o rest operator para criar um único objeto a partir de pessoa e aluno:
// const pessoaAluno3 = {...pessoa,...aluno,nota:2,faltas:10};
// //Imprimindo o objeto completo:
// console.log(pessoaAluno3);
// //Quebrando linha
// console.log("\n");

// //Utilizando Desestruturação para criar um único objeto a partir de pessoa e aluno:
// const {nota:nota2,faltas:falta2, restantanteDoObj} = pessoaAluno3;

// //Imprimindo as variáveis:
// console.log(nota2);
// console.log(falta2);
// console.log(restantanteDoObj);
// //Quebrando linha
// console.log("\n");

//Criando um Array de objetos alunos com notas e faltas:
// const alunos1TDSPM = [
//     {nome: "João",nota: 10,faltas: 2},
//     {nome: "Pedro",nota: 8,faltas: 5},
//     {nome: "Robson",nota: 9,faltas: 0},
//     {nome: "Lucas",nota: 5,faltas: 3},
//     {nome: "Maria",nota: 7,faltas: 4},
//     {nome: "Ana",nota: 6,faltas: 1},
//     {nome: "Paulo",nota: 4,faltas: 6},
//     {nome: "Carlos",nota: 3,faltas: 7},
//     {nome: "Marcos",nota: 2,faltas: 8},
//     {nome: "Ricardo",nota: 1,faltas: 9},
// ];

// //Computando a media das notas com o metodo reduce:
// let media = alunos1TDSPM.reduce((acumulador,aluno)=>{
//     return acumulador + aluno.nota;
// },0)/alunos1TDSPM.length;

// //Imprimindo a media:
// console.log(mediaNotas);
// //Quebrando linha
// console.log("\n");

// //Criando um array de notas:
// let arrayNotas = alunos1TDSPM.map((aluno)=> aluno.nota);
// //Imprimindo o array de notas:
// console.log(arrayNotas);
// //Quebrando linha
// console.log("\n");

// //Computando a média das notas com o método reduce:
// arrayNotas = arrayNotas.reduce((acumulador,nota)=>{
//     return acumulador + nota;
// },0)/arrayNotas.length;
// //Imprimindo a média das notas:
// console.log(arrayNotas);
// //Quebrando linha
// console.log("\n");

//Criando um array de objetos alunos com os atributos nome, nota, falstas e professor:
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













