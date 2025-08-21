// Ejercicio 1
function holaMundo() {
  console.log("¡Hola mundo!");
}
holaMundo();

// Ejercicio 2
function crearTitulo() {
  const contenedor = document.querySelector(".para-h1");
  const titulo = document.createElement("h1");
  titulo.textContent = "Agustin";
  contenedor.appendChild(titulo);
}
crearTitulo();

// Ejercicio 3
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

// Ejercicio 4
function mostrarListaEnConsola() {
  const elementos = document.querySelectorAll(".list-group-item");
  elementos.forEach((item, index) => {
    console.log(`Elemento ${index + 1}: ${item.textContent}`);
  });
}
mostrarListaEnConsola();

// Ejercicio 5
function invertirTexto() {
  const textoOriginal = document.querySelector("#para-invertir p").innerText;
  const textoInvertido = textoOriginal.split("").reverse().join("");
  document.querySelector("#texto-invertido p").innerText = textoInvertido;
}
invertirTexto();

// Ejercicio 6
const persona = {
  nombre: "Agustin",
  edad: 27,
  ciudad: "Trelew",
};

function mostrarNombreJSON() {
  document.querySelector("#nombre-json").innerText = persona.nombre;
}
mostrarNombreJSON();

// Ejercicio 7
function mostrarObjetoJSON() {
  const jsonString = JSON.stringify(persona);
  document.querySelector("#json-obj").innerText = jsonString;
}
mostrarObjetoJSON();
