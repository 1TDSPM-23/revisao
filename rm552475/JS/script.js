// // console.log("ola mundo")

// //declarando arrays

// let alunos = ["João","Pedro","Robson","Jorge","Luiz","Marieta","Enzo"]

// console.log(alunos)

// //acessando elementos do array
// console.log(`O primeiro elemento é ${alunos[0]}`)
// //Quebrando linhas
// console.log("\n")

// //imprimindo array  com for

// for (i=0 ; i< alunos.length ; i++){
// //apresentação dos elementos do array    
//     let item = `${i+1}) - ${alunos[i]} \n`
//     console.log(`O aluno impresso é : ${item}`)
// }
// console.log("\n")

// //imprimindo os array com array com foreach e utilizando arrow func

// alunos.forEach((nome)=>{
//     const item= `Aluno ${nome}`;
//     console.log(item) 
// })
// alunos.forEach(function(nome){
//     const item = `Aluno ${nome}` 
//     console.log(item)
// })

// console.log("\n")

// function soma (a,b){
//     return a*2 , b*3;
// }

// const soma2 =(a,b)=>{a*2,b*3}


// console.log("\n")
// //imprimindo array com forOf

// for(const nome of alunos){
//     const item= `Aluno ${nome}`
//     console.log(item)
// }

// for(const indice in alunos){
//     const item= `Aluno ${indice}`
//     console.log(item)
// }


//Declarar um array de objetos de alunos
/*
let alunos = [
    {"Nome":'João', 'Nota':8, 'Situacao':'Aprovado'},
    {"Nome":'Maria', 'Nota':5, 'Situacao':'Reprovado'},
    {'Nome':'Pedro','Nota':9,'Situacao':'Aprovado'},
    {'Nome':'Ana', 'Nota':7, 'Situacao':'Aprovado'},
    {'Nome': 'Jose', 'Nota': 4, 'Situacao': 'Recuperacao'}
]

console.log(alunos)

console.log('\n')


//imprimindo um unico objeto do array

console.log(`Aluno ${alunos[0].Nome}, ${alunos[0].Nota},${alunos[0].Situacao}`)

console.log('\n')

alunos.forEach(aluno =>{

    if(aluno["Situacao"]== "Recuperacao"){
        console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} ficou de  ${aluno["Situacao"]}`)

    }
    else{
        console.log(`O aluno ${aluno["Nome"]} tirou a nota ${aluno["Nota"]} e está ${aluno["Situacao"]}`)

    }

})
//quebrando linha 
console.log("\n")
//recuperando o elemento div do html
const divLista = document.getElementById("lista-nomes")

//inserindo um elemento html dentro da div usando foreach
/*alunos.forEach( (aluno)=>{
    divLista.innerHTML = `<p> Aluno ${aluno["Nome"]}- ${aluno["Nota"]}- ${aluno["Situacao"]} </p>`
})
*/
/*
alunos.forEach( (aluno,index)=>{
    //criando elemento
    let p  = document.createElement("p")
    //inserindo texto no elemento p
    p.textContent =`Aluno ${aluno["Nome"]}- ${aluno["Nota"]}- ${aluno["Situacao"]} `
    //inserindo o p dentro da div
    divLista.appendChild(p)

    //imprimir o id do elemento pai do elemento p
    console.log(index+" "+p.parentElement.id)
})

//quebrando linha 
console.log("\n")*/

//declarando array

let alunos = ["joao","pedro","robson","jorge","luiz","marieta","enzo"]

//inserindo um elemento no inicio do array com unshift
alunos.unshift("jose")

//imprimindo o array
console.log(alunos)

//removendo o ultimo elemento
alunos.pop()

//imprimindo o array
console.log(alunos)

//removendo o primeiro elemento com shift
alunos.shift()

//imprimindo o array
console.log(alunos)

//quebrando linha 
console.log("\n")

//colocando o array em ordem alfabetica com sort
alunos.sort()

//imprimindo o array
console.log(alunos)

//quebrando linha 
console.log("\n")

//colocando o array em ordem reversa com reverse
alunos.reverse()

console.log(alunos)

//quebrando linha 
console.log("\n")

//utilizando o indexxOf para localizar um elemento no array

let posicao  = alunos.indexOf("juca")

console.log(`O aluno juca esta na posicao ${posicao}`)

//usando splice para alterar um elemento do array
alunos.splice(1,1,"juca")

console.log(alunos)

//quebrando linha 
console.log("\n")

//usando splice para alterar um elemento do array
alunos.splice(1,2,"arnaldo")

console.log(alunos)

//quebrando linha 
console.log("\n")

//usando splice para remover um elemento do array
alunos.splice(3,1,"arnaldo")

console.log(alunos)

//quebrando linha 
console.log("\n")

alunos.splice(alunos.indexOf("arnaldo"),1)

console.log(alunos)
