// EJERCICIO NIVEL 1:
// ================================================


// 1. La siguiente es una matriz de 10 edades de los estudiantes:  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [9, 200, 10, 5, 2, 266, 14, 5, 4];

// Ordene la matriz y encuentre la edad mínima y máxima 
console.log(ages.sort((a, b) => a - b ))

// Encuentre la edad media (un elemento del medio o dos elementos del medio divididos por dos) 
const large = ages.length;
let ageMedia = 0;
if (large % 2 === 0) {
  const age1 = ages[(large / 2) - 1];
  const age2 = ages[(large / 2)];
  ageMedia = ((age1 + age2) / 2);
} else {
  ageMedia = ages[((large - 1) / 2)];
}
console.log(ageMedia); 

// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let acum = 0;
ages.forEach( item => {
  acum += item;
})
const prom = acum/large
console.log('El promedio de los elementos de la matríz es: ', prom)

// Encuentre el rango de las edades (máximo menos mínimo) 
const ageEnd = ages[ages.length - 1];
const ageStart = ages[0];
console.log('Rango: ', (ageEnd - ageStart));

// Compare el valor de (mínimo - promedio) y (máximo - promedio), use el método abs ()
console.log('Edad máxima - promedio: ', Math.abs(ageEnd - prom));
console.log('Edad mínima - promedio: ', Math.abs(ageStart - prom));

// 2. Obtener los primeros diez países de la matriz de países
//const start10Paises = paises2.slice(0, 10);
//console.log(start10Paises);

// 3. Encuentre el (los) país (s) intermedio (s) en la matriz de países
const longi = paises2.length;
if (longi % 2 == 0) {
  posStart = longi / 2;
  console.log(paises2.splice(posStart - 1, 2).toString())
} else {
  posStart = (longi - 1) / 2;
  console.log(paises2[posStart]); 
}


// 4. Divida la matriz de países en dos matrices iguales si es par. Si la matriz de países no es pareja, un país más durante la primera mitad.
const longi2 = paises2.length;
console.log(paises2)
console.log(longi2)
let divisor = 0;
const matriz1 = paises2.slice();
const matriz2 = paises2.slice();
if (longi2 % 2 == 0) {
  divisor = longi2 / 2;
  console.log(divisor)
  matriz1.splice(divisor, longi2);
  matriz2.splice(0, divisor  )
  console.log('primera matriz: ', matriz1);
  console.log('Segunda matriz: ', matriz2)
}
else {
  divisor = (longi2 - 1) / 2;
  matriz1.splice(divisor + 1, longi2);
  matriz2.splice(0, divisor +1  )
  console.log('primera matriz: ', matriz1);
  console.log('Segunda matriz: ', matriz2)
}

