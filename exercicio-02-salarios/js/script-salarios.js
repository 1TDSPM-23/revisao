const salarios = [3800, 2500, 1000, 1500, 5200, 3300, 2600, 1400, 2000, 4000];

const salariosAumento = salarios.map((valor) => valor <= 2000 ? valor * 1.15 : valor * 1.10);

console.log("Salários após o aumento: ");
console.log(salariosAumento);

const salariosFiltro = salariosAumento.filter((valor) => valor > 2500);

console.log("Salários após o filter: " );
console.log(salariosFiltro);

const salariosSoma = salariosFiltro.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("A soma dos salários é: " + salariosSoma);