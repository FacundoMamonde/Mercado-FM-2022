let productos: string[] = [];
let carrito: number[] = [];

function comprobarNumero(n: number): boolean {
  if (isNaN(n) || n < 1) {
    return false;
  } else {
    return true;
  }
}

/// Funcion para cambiar el nombre ////////////////////////////////////////

function cambiarNombre() {
  let nuevoNombre = String(prompt("Ingresa tu nombre"));

  while (nuevoNombre.length > 12) {
    nuevoNombre = String(
      prompt("Ingresa tu nombre (no puede tener mas de 12 letras)")
    );
  }
  document.getElementById("nombre").innerHTML = nuevoNombre;
}

//// Funcion Compra y Carrito /////////////////////////////////////////////

function mostrarCarrito() {
  /// Ponemos la suma del carrito en 0
  let carritoTotal = 0;
  //// Sumamos en el carrito el valor "precio" del producto, obteniendo este valor del arreglo "productos"
  for (let i = 0; i < carrito.length; i++) {
    carritoTotal = carritoTotal + productos[carrito[i]][1];
  }
  //// Cambiamos el valor del carrito en el HTML
  document.getElementById("carrito").innerHTML = String(carritoTotal);
}

function comprarItem(item: number) {
  /// Si el producto que queremos comprar tiene un stock de cero, entonces nos da un mensaje de error.
  if (productos[item][2] === 0) {
    alert("No hay mas stock de este producto");
  } else {
    /// Obtenemos el ultimo valor del carrito, y le ponemos el valor guia del producto
    carrito[carrito.length] = item;
    /// Le restamos una unidad al stock
    productos[item][2] = productos[item][2] - 1;
    /// Modificamos en el HTML el valor de stock
    document.getElementById("unidades-" + item)?.innerHTML =
      productos[item][2] + " unidades";
    /// Utilizamos la funcion que nos actualiza el valor en el carrito
    mostrarCarrito();
  }
}

/// Funcion mostrar array en el HTML ///////////////////////////////////////
function mostrarItemHTML() {
  /// Se hace un backup de la informacion previa del Div HTML
  let itemsBackup = document.getElementById("inventario")?.innerHTML;
  /// Se pone la informacion en el inventario
  for (let i = 0; i < productos.length; i++) {
    document.getElementById("inventario")?.innerHTML =
      itemsBackup +
      '<div class="div-productos">' +
      '<h4 class="nombre-producto">' +
      productos[i][0] +
      "</h4>" +
      '<p id="unidades-' +
      i +
      '">' +
      productos[i][2] +
      " unidades</p>" +
      '<p class="precio">$' +
      productos[i][1] +
      "</p>" +
      '<button class="btnComprar" id="' +
      i +
      '">Comprar</button></div>';
  }
}

/// Funcion para agregar un nuevo producto

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

  /// Enviar articulo al ARRAY
  let idProducto = productos.length;

  productos[idProducto] = [nombreProducto, precioProducto, stockProducto];

  mostrarItemHTML();

  console.log(productos); /// Verificacion del array por consola
}

//// EVENT LISTENERS

let botonAgregar = document.getElementById("button-add-item");
botonAgregar?.addEventListener("click", agregarItem);

function detectorEvento(evento) {
  var element = evento.target;
  if (element.classList.contains("btnComprar")) {
    comprarItem(element.id);
  }
}

document.addEventListener("click", detectorEvento);

let name = document.getElementById("nombre");
name.addEventListener("click", cambiarNombre);
