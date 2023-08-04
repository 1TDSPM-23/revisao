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