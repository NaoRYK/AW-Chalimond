const boton = document.querySelector("button");
const contador = document.querySelector("nav span");

let cantidad = Number(localStorage.getItem("articulos")) || 0;
contador.textContent = cantidad;

boton.addEventListener("click", () => {
    cantidad++;
    contador.textContent = cantidad;
    localStorage.setItem("articulos", cantidad);
});
