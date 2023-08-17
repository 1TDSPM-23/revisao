let salarios = [1100, 2800, 1450, 2220, 10000, 1900, 4001, 2707, 1950, 3000];

function aplicarAumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15% para salários até 2000
  } else {
    return salario * 1.10; // Aumento de 10% para salários acima de 2000
  }
}

let salariosAtualizados = salarios.map(aplicarAumento);

let salariosSuperiores2500 = salariosAtualizados.filter(salario => salario > 2500);

let somaSalarios = salariosSuperiores2500.reduce((acumulador, salario) => acumulador + salario, 0);

console.log("Salários após os aumentos:", salariosAtualizados);
console.log("Salários superiores a 2500:", salariosSuperiores2500);
console.log("Soma dos salários superiores a 2500:", somaSalarios);
