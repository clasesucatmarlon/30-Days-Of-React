// EJERCICIO NIVEL 1:
// ================================================

// 1. Cree un archivo countries.js separado y almacene la matriz de países en este archivo, cree un archivo web_techs.js separado y almacene la matriz webTechs en este archivo. Acceda a ambos archivos en el archivo main.js.

// 2. Primero elimine todas las puntuaciones y cambie la cadena a matriz y cuente el número de palabras en la matriz
const newArray = [];
let change = ''
const words = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const dividido = words.split(" ");
dividido.forEach( item => {
  if (item.includes('.')) {
    change = item.replace('.', '');
    newArray.push(change);
  } else if (item.includes(',')) {
    change = item.replace(',', '');
    newArray.push(change);
  } else {
    newArray.push(item);
  }
})
console.log(newArray)
console.log('Longitud del nuevo array: ', newArray.length)

// 3. En el siguiente carrito de compras, agregue, elimine, edite artículos:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// agregue 'Carne' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift('Meat');
console.log("Insetado carne al comienzo del arreglo: ", shoppingCart);
// agregue Sugar al final de su carrito de compras si aún no se ha agregado
shoppingCart.push('Sugar');
console.log("Insetado azúcar al final del arreglo: ", shoppingCart);
// elimine 'Honey' si es alérgico a la miel
const alergico = true;
if (alergico) {
  const found = shoppingCart.indexOf('Honey');
  shoppingCart.splice(found, 1);
}
console.log(shoppingCart)
// modificar el té a 'té verde'
const found2 = shoppingCart.indexOf('Tea');
shoppingCart[found2] = 'Green Tea'
console.log(shoppingCart)

// 4. En la matriz de países, compruebe si existe 'Etiopía' en la matriz, si existe, imprima 'ETIOPÍA'. Si no existe, agréguelo a la lista de países.
const found3 = paises2.includes('Etiopía');
if (found3) {
  const str = paises2.indexOf('Etiopía');
  paises2[str] = paises2[str].toUpperCase();
} else {
  paises2.push('ETIOPIA');
}
console.log(paises2);

// 5. En la matriz de webTechs, compruebe si Sass existe en la matriz y, si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass a la matriz e imprima la matriz.
const found4 = webTechs2.includes('Sass');
if (found4) {
  console.log('Sass es un preproceso de CSS');
} else {
  webTechs2.push('Sass');
}
console.log(webTechs2);

// 6. Concatenar las siguientes dos variables y almacenarlas en una variable fullStack.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
