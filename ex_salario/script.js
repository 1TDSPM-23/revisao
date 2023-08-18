let salarios = [1100, 2800, 1450, 2220, 10000, 1900, 4001, 2707, 1950, 3000];

function Aumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15; 
  } else {
    return salario * 1.10; 
  }
}

let salariosAtualizados = salarios.map(Aumento);

let salariosAcima2500 = salariosAtualizados.filter(salario => salario > 2500);

let somaSalarios = salariosAcima2500.reduce((acumulador, salario) => acumulador + salario, 0);

console.log("Salários após os aumentos:", salariosAtualizados);
console.log("Salários superiores a 2500:", salariosAcima2500);
console.log("Soma dos salários superiores a 2500:", somaSalarios);
