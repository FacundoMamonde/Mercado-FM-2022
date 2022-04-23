/// Obtenemos los valores de cada input y boton
let btnEnviar = document.getElementById("boton-enviar");
let nombre = document.getElementById("input-nombre");
let apellido = document.getElementById("input-apellido");
let mail = document.getElementById("input-mail");
let consulta = document.getElementById("textarea-consulta");

nombre?.addEventListener("keydown", function () {
  console.log("ANDA!");
});

//* Se comprueba que el nombre no tenga menos de 3 caracteres *//
//* Que no tenga mas de 20 caracteres *//
//* Que sean letras y no numeros *//
function comprobarNombreApellido(n: string): boolean {
  let nameRegex = /[A-Z]/i;
  if (n.value.length <= 2) {
    console.log("Nombre o Apellido tiene menos de 3 caracteres");
    return false;
  } else if (n.value.length >= 21) {
    console.log("Nombre o Apellido tiene mas de 20 caracteres");
    return false;
  } else if (nameRegex.test(n?.value)) {
    return true;
  } else {
    console.log("Solo se permiten letras en el Nombre y apellido");
    return false;
  }
}

function comprobarMail(): boolean {
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(mail?.value)) {
    return true;
  } else {
    console.log("El mail ingresado no es correcto");
    return false;
  }
}

function comprobarConsulta(): boolean {
  if (consulta?.value === "") {
    console.log("Consulta no puede estar vacio");
    return false;
  } else {
    return true;
  }
}

function tarea() {
  console.clear();

  if (
    comprobarNombreApellido(nombre) === true &&
    comprobarNombreApellido(apellido) === true &&
    comprobarMail() === true &&
    comprobarConsulta() === true
  ) {
    console.log("Datos ingresados correctamente");
    document.getElementById(
      "envio-test"
    )?.innerHTML = "Consulta enviada con exito!";
    document.getElementById("envio-test")?.className = `envioOk`;
  } else {
    document.getElementById("envio-test")?.innerHTML = "Revisa los campos!";

    document.getElementById("envio-test")?.className = `envioFail`;
  }

  comprobarNombreApellido(nombre);
  comprobarNombreApellido(apellido);
  comprobarMail();
  comprobarConsulta();
}

btnEnviar?.addEventListener("click", tarea);
