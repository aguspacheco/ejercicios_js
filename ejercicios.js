/**
 * Para cada punto, escribir e invocar las funciones necesarias.
El código debe ubicarse en un archivo con extensión .js que debe ser incluido en el
documento ejercicios_js.html con el tag adecuado.

Ejercicio 1. Que imprima "¡Hola, Mundo!" en la consola.

 */
function holaMundo() {
  console.log("¡Hola mundo!");
}
holaMundo();

/**
 * Ejercicio 2. Que cree un nodo de tipo h1 dentro del elemento con selector .para-h1 y
dentro del nodo coloque el texto con su nombre de pila.
 */
function crearTitulo() {
  const contenedor = document.querySelector(".para-h1");
  const titulo = document.createElement("h1");
  titulo.textContent = "Agustin";
  contenedor.appendChild(titulo);
}
crearTitulo();

/**
 * Ejercicio 3. Que tenga las funciones para las operaciones matemáticas básicas: suma,
resta, multiplicación y división. Utilice los controles provistos en el documento
html para tomar los parámetros y ejecutar las operaciones. Muestre el
resultado en el elemento con el selector #resultado (atributo value).
 */
function sumar(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return b != 0 ? a / b : "Error: division por 0";
}

function hacerOperaciones(operacion) {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  const resultadoInput = document.getElementById("resultado");

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = sumar(num1, num2);
      break;
    case "resta":
      resultado = resta(num1, num2);
      break;
    case "multiplicacion":
      resultado = multiplicacion(num1, num2);
      break;
    case "division":
      resultado = division(num1, num2);
      break;
    default:
      resultado = "Operacion no valida";
  }
  resultadoInput.value = resultado;
}

/**
 * Ejercicio 4. Que tome los elementos con selector .list-group-item y los muestre por
consola.
 */
function mostrarListaEnConsola() {
  const elementos = document.querySelectorAll(".list-group-item");
  elementos.forEach((item, index) => {
    console.log(`Elemento ${index + 1}: ${item.textContent}`);
  });
}
mostrarListaEnConsola();

/**
 * Ejercicio 5. Que invierta el texto con selector #para-invertir p y coloque el resultado en
el elemento con el selector #texto-invertido p. (atributo innerText)
 */

function invertirTexto() {
  const textoOriginal = document.querySelector("#para-invertir p").innerText;
  const textoInvertido = textoOriginal.split("").reverse().join("");
  document.querySelector("#texto-invertido p").innerText = textoInvertido;
}
invertirTexto();

/**
 * Ejercicio 6. Que consulte el atributo “nombre” del objeto JSON y lo coloque en el elemento
con selector #nombre-json.
 */
const persona = {
  nombre: "Agustin",
  edad: 27,
  ciudad: "Trelew",
};

function mostrarNombreJSON() {
  document.querySelector("#nombre-json").innerText = persona.nombre;
}
mostrarNombreJSON();

/**
 * Ejercicio 7. Que coloque como string el objeto JSON en el elemento con selector #json-obj
 */
function mostrarObjetoJSON() {
  const jsonString = JSON.stringify(persona);
  document.querySelector("#json-obj").innerText = jsonString;
}
mostrarObjetoJSON();
