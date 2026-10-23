// 1.a 1.b
let numeros = [];
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Ingrese un número:"));
  numeros.push(num);
}
console.log(numeros);

// 1.c
let impares = [];
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Ingrese un número (solo guardará impares):"));
  if (num % 2 !== 0) {
    impares.push(num);
  }
}
console.log(impares);

//  1.e
let frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, i, arr) => {
  arr[i] = fruta.toUpperCase();
});
console.log(frutas);

// 1.g
let frutasOriginales = ["pera", "manzana", "banana", "durazno"];
let frutasMap = frutasOriginales.map((fruta) => fruta.toUpperCase());
console.log(frutasMap);

// 1.i
let frutasFilter = frutasOriginales.filter((fruta) => fruta.includes("na"));
console.log(frutasFilter);

//  2.a
const producto = {
  nombre: "Remera Lisa",
  precio: 12000,
  stock: 15,
  talles: ["s", "m", "l"],
};

//  2.b
const catalogo = [
  { nombre: "Remera Lisa", precio: 12000, stock: 3, talles: ["s", "m", "l"] },
  {
    nombre: "Pantalón Cargo",
    precio: 35000,
    stock: 15,
    talles: ["s", "m", "l"],
  },
  { nombre: "Buzo Canguro", precio: 28000, stock: 4, talles: ["s", "m", "l"] },
  {
    nombre: "Campera de Jean",
    precio: 45000,
    stock: 12,
    talles: ["s", "m", "l"],
  },
];

//  2.c
catalogo.forEach((prod) => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});

//  2.d
const catalogoDescuento = catalogo.map((prod) => {
  return {
    ...prod,
    precio: prod.precio * 0.9,
  };
});
console.log(catalogoDescuento);

//  2.e
const catalogoAltoStock = catalogo.filter((prod) => prod.stock > 10);
console.log(catalogoAltoStock);
