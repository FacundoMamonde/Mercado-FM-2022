function comprobarNumero(n: number): boolean {
  if (isNaN(n) || n < 1) {
    return false;
  } else {
    return true;
  }
}

function agregarItem() {
  let nombreProducto = prompt("Ingrese el nombre del producto:");
  while (nombreProducto === null) {
    nombreProducto = prompt("Error: Ingrese el nombre del producto:");
  }

  let precioProducto = Number(prompt("Ingrese el precio del producto:"));
  while (comprobarNumero(precioProducto) === false) {
    precioProducto = Number(prompt("Error: Ingrese el precio del producto:"));
  }

  let stockProducto = Number(prompt("Ingrese el stock del producto:"));
  while (comprobarNumero(stockProducto) === false) {
    stockProducto = Number(prompt("Error: Ingrese el stock del producto:"));
  }

  console.log(
    "Se añadio producto: " +
      nombreProducto +
      ", precio: $" +
      precioProducto +
      ", stock: " +
      stockProducto +
      " unidades"
  );
}

let botonAgregar = document.getElementById("button-add-item");
botonAgregar?.addEventListener("click", agregarItem);
