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
let productosPrecio: number[] = [400, 200, 150, 112, 190, 300, 250, 250, 250];
let productosStock: number[] = [20, 35, 26, 52, 65, 15, 6, 60, 15];
let productosImg: string[] = [
  "./src/Productos/Yerba.png",
  "./src/Productos/Agua.png",
  "./src/Productos/Galletitas.png",
  "./src/Productos/Alfajor.png",
  "./src/Productos/Leche.png",
  "./src/Productos/Arroz.png",
  "./src/Productos/Fideos-Tirabuzon.png",
  "./src/Productos/Gaseosa.png",
  "./src/Productos/Queso-Untable.png"
];

let productosContenedor = document.getElementById("inventario");

function cargarInventario() {
  for (let i = 0; i < productosNombre.length; i++) {
    let productoDiv = document.createElement("div");
    productoDiv.classList.add("producto-box");
    productoDiv.id = `producto-id-${i}`;
    let productoIMG = document.createElement("img");
    productoIMG.classList.add("producto-img");
    productoIMG.src = productosImg[i];
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
    productoDiv.appendChild(productoIMG);
    productoDiv.appendChild(productoNombre);
    productoDiv.appendChild(productoPrecio);
    productoDiv.appendChild(productoStock);
    productoDiv.appendChild(productoStockText);
    productosContenedor?.appendChild(productoDiv);
  }
}

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
      console.log(
        `Unidades de ${productosNombre[i]} invalida (${productosStock[i]})`
      );
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

////////////// EXTRA ///////////////////

window.onload = cargarInventario();

var userName = "Admin";
document.getElementById("nombre")?.innerHTML = userName;

//////// FUNCION PARA AGREGAR ARTICULOS ////////////////////

let inputNuevoNombre = document.getElementById("input-agregar-nombre");
let inputNuevoPrecio = document.getElementById("input-agregar-precio");
let inputNuevoStock = document.getElementById("input-agregar-stock");

function agregarProducto() {
  let errCount: number = 0;
  let pError = document.getElementById("p-agregar-item-error");

  if (inputNuevoNombre.value === "" || inputNuevoNombre.value.length > 18) {
    errCount++;
  }
  if (isNaN(inputNuevoPrecio.value) || Number(inputNuevoPrecio.value) < 1) {
    errCount++;
  }
  if (isNaN(inputNuevoStock.value) || Number(inputNuevoStock.value) < 1) {
    errCount++;
  }

  if (errCount === 0) {
    productosNombre[productosNombre.length] = inputNuevoNombre.value;
    productosPrecio[productosNombre.length - 1] = Number(
      inputNuevoPrecio.value
    );
    productosStock[productosNombre.length - 1] = Number(inputNuevoStock.value);
    productosImg[productosNombre.length - 1] = "./src/Productos/Nuevo.png";
    productosContenedor?.innerHTML = "";
    cargarInventario();
    pError?.className = "oculto";
    inputNuevoNombre.value = "";
    inputNuevoPrecio.value = "";
    inputNuevoStock.value = "";
  } else {
    pError?.className = "";
  }
}

let btnNuevoAgregar = document.getElementById("btn-agregar-ok");
btnNuevoAgregar?.addEventListener("click", agregarProducto);

let btnAgregarProducto = document.getElementById("button-agregar");
btnAgregarProducto?.addEventListener("click", function () {
  document.getElementById("div-agregar-item").classList.toggle("oculto");
});
