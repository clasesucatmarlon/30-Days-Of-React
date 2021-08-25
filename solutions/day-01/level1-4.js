// EJERCICIO NIVEL 1:
// ================================================

// 1. Obtenga la entrada del usuario usando el indicador ("Ingrese su edad:"). Si el usuario tiene 18 años o más, dé su opinión: "Tiene la edad suficiente para conducir", pero si no tiene 18, dé otra respuesta indicando que debe esperar la cantidad de años que necesita para cumplir los 18.
/* const age = prompt("Ingrese edad: ");
console.log(age);
if (age >= 18) {
  console.log('Tiene la edad suficiente para conducir');
} else {
  console.log(`Te faltan ${18-age} años para poder conducir`);
} */

// 2. Compare los valores de myAge y yourAge usando if… else. Basado en la comparación y registre el resultado en la consola indicando quién es mayor (usted o yo). Utilice el indicador ("Ingrese su edad:") para obtener la edad como entrada.
// const ageOther = prompt("Ingrese su edad: ");
/* ageOther = 25
ageOwner = 48
if (ageOwner > ageOther) {
  console.log(`Soy ${ageOwner - ageOther} años mayor`);
} else if (ageOwner === ageOther) {
  console.log('Tenemos la misma edad');
} else {
  console.log(`Eres ${ageOther - ageOwner} años mayor que yo`)
} */

//3. Si a es mayor que b, devuelve 'a es mayor que b' si no 'a es menor que b'. Intenta implementarlo de dos formas: usando if else y usando operador ternario.
const a = 3;
const b = 23;

/* if (a > b) {
  console.log('a es mayor que b');
} else {
  console.log('a es menor que b');
} */

/* (a > b) ? console.log('a es mayor que b') : (console.log('a es menor que b')) */

// Los números pares son divisibles por 2 y el resto es cero. ¿Cómo se comprueba si un número es par o no utiliza JavaScript?
const number = 44;

if (number % 2 == 0) {
  console.log(`${number} es número par`)
} else {
  console.log(`${number} es número impar`)
}

