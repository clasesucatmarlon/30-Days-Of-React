// EJERCICIO NIVEL 1:
// ================================================

// 1. Escriba un código que pueda dar calificaciones a los estudiantes de acuerdo con sus puntajes:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
/* const point = 30;
switch (true) {
  case (point >= 80 && point <= 100):
    console.log('La calificación es A');
    break
  case (point >= 70 && point <= 79):
    console.log('La calificación es B');
    break
  case (point >= 60 && point <= 69):
    console.log('La calificación es C');
    break
  case (point >= 50 && point <= 59):
    console.log('La calificación es D');
    break
  default:
    console.log('La calificación es F');
} */

// 2. Comprueba si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
// Septiembre, octubre o noviembre, la temporada es otoño.
// Diciembre, enero o febrero, la temporada es invierno.
// Marzo, abril o mayo, la temporada es primavera.
// Junio, julio o agosto, la temporada es verano.
const month = 'july';
switch (true) {
  case (month == 'october' || month == 'october' || month == 'november' ):
    console.log('The season is autumn')
    break
  case (month == 'december' || month == 'january' || month == 'february' ):
    console.log('The season is winter')
    break
  case (month == 'march' || month == 'april' || month == 'may' ):
    console.log('The season is spring')
    break
  default:
    console.log('The season is summer')
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. 
const day = 'friday';
switch (true) {
  case (day == 'saturday' || day == 'sunday'):
    console.log(`${day} is a weekend`)
    break
  default:
    console.log(`${day} is a working day`)
}