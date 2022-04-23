let productosNombre: string[] = [
  "Yerba Mate",
  "Agua Mineral",
  "Galletitas",
  "Alfajor",
  "Leche",
  "Arroz",
  "Fideos tirabuzon",
  "Gaseosa",
  "Queso untable"
];
let productosPrecio: number[] = [400, 200, 150, 112, 190, 300, 250, 80, 250];
let productosStock: number[] = [20, 35, 26, 52, 65, 15, 6, 60, 15];

let productosContenedor = document.getElementById("inventario");

function cargarInventario() {
  for (let i = 0; i < productosNombre.length; i++) {
    let productoDiv = document.createElement("div");
    productoDiv.classList.add("producto-box");
    productoDiv.id = `producto-id-${i}`;
    let productoNombre = document.createElement("p");
    productoNombre.innerHTML = productosNombre[i];
    let productoPrecio = document.createElement("h4");
    productoPrecio.innerHTML = `$${productosPrecio[i]}`;
    let productoStock = document.createElement("input");
    productoStock.id = `cantidad-id-${i}`;
    productoStock.type = "number";
    productoStock.max = String(productosStock[i]);
    productoStock.min = "0";
    productoStock.value = "0";
    let productoStockText = document.createElement("h5");
    productoStockText.innerHTML = `(${productosStock[i]} unidades)`;
    productoDiv.appendChild(productoNombre);
    productoDiv.appendChild(productoPrecio);
    productoDiv.appendChild(productoStock);
    productoDiv.appendChild(productoStockText);
    productosContenedor?.appendChild(productoDiv);
  }
}

/*function comprar() {
  console.clear();
  let sumaTotal: number = 0;

  //////
  for (let i = 0; i < productosNombre.length; i++) {
    let cant = document.getElementById(`cantidad-id-${i}`);
    //// Si la cantidad a comprar es correcta, entonces se agrega a la suma
    if (cant.value <= productosStock[i] && cant.value > 0) {
      console.log(
        `Se compraron ${cant.value} unidades de ${productosNombre[i]}`
      );
      /// Se suma al Total de la compra
      sumaTotal = sumaTotal + cant.value * productosPrecio[i];
      /// Si el valor es cero, no se suma ni se muestra ningun mensaje en consola
    } else if (cant.value === "0") {
    }
    //// Si el valor ingresado es es incorrecto entonces se muestra en consola
    else {
      console.log(`Valor de unidades de ${productosNombre[i]} invalido`);
    }
  }



  /// Se ingresa el total de la compra en el HTML
  let pCompra = document.getElementById("p-compraTotal");
  pCompra.innerHTML = `Total: $${sumaTotal}`;
  pCompra?.className = "compraTotal";

  /// Se muestra el total de la compra por consola
  console.log(`El total de la compra es de $${sumaTotal}`);
}
*/

function comprar() {
  console.clear();
  let sumaTotal: number = 0;
  let errorDetec: number = 0;
  //////
  for (let i = 0; i < productosNombre.length; i++) {
    let cant = document.getElementById(`cantidad-id-${i}`);
    //// Si la cantidad a comprar es correcta, entonces se agrega a la suma
    if (cant.value <= productosStock[i] && cant.value > 0) {
      console.log(`Unidades de ${productosNombre[i]} en stock (${cant.value})`);
      /// Se suma al Total de la compra
      sumaTotal = sumaTotal + cant.value * productosPrecio[i];
      /// Si el valor es cero, no se suma ni se muestra ningun mensaje en consola
    } else if (cant.value === "0") {
    }
    //// Si el valor ingresado es es incorrecto entonces se muestra en consola
    else {
      console.log(`Unidades de ${productosNombre[i]} invalida`);
      errorDetec++;
    }
  }

  if (errorDetec < 1 && sumaTotal >= 0) {
    /// Se ingresa el total de la compra en el HTML
    let pCompra = document.getElementById("p-compraTotal");
    pCompra.innerHTML = `Total: $${sumaTotal}`;
    pCompra?.className = "compraTotal";

    /// Se muestra el total de la compra por consola
    console.log(`El total de la compra es de $${sumaTotal}`);
  } else {
    console.log(`Error en la compra, comprueba el stock`);
    let pCompra = document.getElementById("p-compraTotal");
    pCompra.innerHTML = `ERROR: Comprueba el stock`;
    pCompra?.className = "compraTotalError";
  }
}

let btnComprar = document.getElementById("button-comprar");
btnComprar?.addEventListener("click", comprar);

//////// EXTRA

window.onload = cargarInventario();

var userName = "Admin";
document.getElementById("nombre")?.innerHTML = userName;
