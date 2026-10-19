// 1.a
function saludar() {
  console.log("¡Hola, bienvenido!");
}

// 1.b
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}

// 1.c
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
let resultadoEdad = esMayorDeEdad(20);

// 2.a
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
let resultadoEdadFlecha = esMayorDeEdadFlecha(20);

// 2.b
const compararNumeros = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};

// 2.c
for (let iterador = 1; iterador <= 5; iterador++) {
  compararNumeros(iterador, 3);
}

// 3.a y 3.c
const operacion = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(num1, num2);
};

// 3.b
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};

// Ejecuciones para probar el punto 3
operacion(10, 5, suma);
operacion(10, 5, resta);
operacion(10, "5", suma);
