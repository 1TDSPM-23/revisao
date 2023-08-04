console.log("Olá Mundo!");

let alunos = [
    "João", "Pedro", "Robson", "Jorge", "Luis", "Marieta", "Enzo"
]

console.log(alunos);

console.log(`O segundo aluno é ${alunos[1]}`);

console.log("\n");

for (i=0; i<alunos.lenght ; ++i) {
    let item = `${i+1} - ${alunos[i]} \n`;
    console.log(`O aluno impresso é : ${item}`);
}

console.log("\n");

alunos.forEach((nome)=>{
    const item = `Aluno ${nome}`;
    console.log(item);
});

function soma(a , b){
    return a * 2, b*3;
}

const soma2 = ()=> { a * 2,b*3;}

for (const nome of alunos) {
    const item = `Alunos ${nome}`;
    console.log(item)
    
}

console.log("\n");

for (const indice in alunos) {
    const item = `Alunos ${alunos[indice]}`;
    console.log(item)
    
}


