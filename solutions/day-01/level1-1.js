// EJERCICIO NIVEL 1:
// ================================================

const países = [ 
  'Albania', 
  'Bolivia', 
  'Canadá', 
  'Dinamarca', 
  'Etiopía', 
  'Finlandia', 
  'Alemania', 
  'Hungría', 
  'Irlanda', 
  'Japón', 
  'Kenia', 
] 

const webTechs = [ 
  'HTML', 
  'CSS', 
  'JavaScript', 
  'React', 
  'Redux', 
  'Node', 
  'MongoDB', 
]

// 01. Declare una matriz vacía
const array = [];
console.log('Array vacío: ', array);
// 02. Declare una matriz con más de 5 elementos
const array2 = ["v1", "v2", "v3", "v4", "v5"];
console.log('Array2 con más de 5 elementos: ', array2);

// 03. Encuentra la longitud de tu matriz
console.log('Longitud del array2: ', array2.length);

// 04. Obtenga el primer elemento, el elemento del medio y el último elemento de la matriz
console.log('Primer elemento del array2: ', array2[0]);
console.log('Elemento central del array2: ', array2[2]);
console.log('ültimo elemento del array2: ', array2[4]);

// 05. Declare una matriz llamada MixedDataTypes, coloque diferentes tipos de datos en la matriz y encuentre la longitud de la matriz. El tamaño de la matriz debe ser superior a 5
const MixedDataTypes = [true, [1, 2, 3], {'nombre': 'Marlon'}, 23, 'Medellín'];
console.log('La matriz MixedDataTypes: ', MixedDataTypes);
console.log('Tiene un tamaño de: ', MixedDataTypes.length);

// 06. Declare una variable de matriz denomínela Compañías y asigne valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
const cias = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 07. Imprima la matriz usando console.log ()
console.log('La matriz compañía es: ', cias)

// 08. Imprime el número de empresas de la matriz.
console.log('Tiene ', cias.length, ' empresas')

// 09. Imprima la primera empresa, la mediana y la última empresa
console.log('Primera empresa: ', cias[0]);
console.log('Empresa central: ', cias[(cias.length - 1)/2]);
console.log('Última empresa: ', cias[cias.length - 1]);

// 10. Imprime cada empresa
console.log('lista de compañías: ' ,cias.join());

// 11. Cambie el nombre de cada empresa a mayúsculas una por una e imprímalas
//  cias[0] = 'AAA';
//  console.log(cias[0])
console.log(cias[0].toUpperCase());
console.log(cias[1].toUpperCase());
console.log(cias[2].toUpperCase());
console.log(cias[3].toUpperCase());
console.log(cias[4].toUpperCase());
console.log(cias[5].toUpperCase());
console.log(cias[6].toUpperCase());

// 12. Imprima la matriz como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log('lista de compañías: ' ,cias.join(', '));

// 13. Compruebe si una determinada empresa existe en la matriz itCommerce. Si existe, devuelva la empresa; de lo contrario, devuelva no se encuentra una empresa.
const search = "MAGM"
  if (cias.includes(search)){
    console.log(search)
  } else {
    console.log('No existe')
  }

// 14. Filtra las empresas que tienen más de una 'o' sin el método de filtrado


// 15. Ordene la matriz usando el método sort ()
console.log('Compañías ordenadas con sort: ', cias.sort())

// 16. Invierta la matriz usando el método reverse ()
console.log('Compañías invertidas con reverse: ', cias.reverse())

// 17. Separe las primeras 3 empresas de la matriz
console.log('Compañías invertidas con reverse: ', cias.reverse())
console.log('Tres primeras compañías: ', cias.slice(0,3))

// 18. Separe las últimas 3 empresas de la matriz
console.log('Tres últimas compañías: ', cias.slice(cias.length - 3,cias.length).reverse())

// 19. Separe la empresa o empresas de TI intermedias de la matriz
console.log('Compañías intermedias o intermedia: ', cias.slice(cias.length / 2, (cias.length / 2) + 1 ).reverse())

// 20. Elimine la primera empresa de TI de la matriz
const eliminada = cias.shift()
console.log('Luego de eliminar la empresa ', eliminada, '(primera empresa):',  cias )
cias.shift()

// 21. Elimine la empresa o empresas de TI intermedias de la matriz
const longi = cias.length
console.log(longi)
if (longi % 2 == 0) {
  const intermedia = cias.splice( (cias.length - 2) / 2, 2 )
  console.log('Luego de eliminar las empresas ', intermedia, '(empresa intermedias):',  cias )
} else {
  const intermedia = cias.splice( (cias.length - 1) / 2, 1 )
  console.log('Luego de eliminar la empresa ', intermedia, '(empresa intermedia):',  cias )
}

// 22. Eliminar la última empresa de TI de la matriz
cias.pop()
console.log('Luego de eliminar la última empresa: ',  cias )

// 23. Eliminar todas las empresas de TI
console.log('Luego de eliminar todas las empresas: ', cias.splice() )