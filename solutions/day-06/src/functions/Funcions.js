// GENERAR COLOR ALEATORIO HEXADECIMAL
const Hexa = () => {
  let str = "12345678abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
export default Hexa; // FIN HEXA