document.getElementById("anio").textContent = new Date().getFullYear();


var saludo = document.getElementById("saludo");
if (saludo) {
  var hora = new Date().getHours();
  if (hora < 12) {
    saludo.textContent = "¡Buenos días! Te esperamos en el museo.";
  } else if (hora < 19) {
    saludo.textContent = "¡Buenas tardes! Te esperamos en el museo.";
  } else {
    saludo.textContent = "¡Buenas noches! Planea tu visita para mañana.";
  }
}

var estado = document.getElementById("estado");
if (estado) {
  var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var hoy = new Date().getDay();
  if (hoy == 1) {
    estado.textContent = "Hoy es " + dias[hoy] + ": el museo está cerrado.";
  } else {
    estado.textContent = "Hoy es " + dias[hoy] + ": el museo está abierto.";
  }
}

var calculadora = document.getElementById("calculadora");
if (calculadora) {
  calculadora.onsubmit = function (evento) {
    evento.preventDefault();
    var general = Number(document.getElementById("general").value);
    var estudiantes = Number(document.getElementById("estudiantes").value);
    var mayores = Number(document.getElementById("mayores").value);
    var total = general * 100 + estudiantes * 50 + mayores * 50;
    document.getElementById("total").textContent = "Total a pagar: $" + total + " MXN";
  };
}

var formContacto = document.getElementById("form-contacto");
if (formContacto) {
  formContacto.onsubmit = function (evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var respuesta = document.getElementById("respuesta");
    if (nombre == "") {
      respuesta.textContent = "Por favor escribe tu nombre.";
    } else {
      respuesta.textContent = "Gracias " + nombre + ", tu mensaje fue recibido.";
    }
  };
}

var visor = document.getElementById("visor");
if (visor) {
  var imagenes = document.querySelectorAll(".galeria img");
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function () {
      document.getElementById("visor-img").src = this.src;
      document.getElementById("visor-texto").textContent = this.alt;
      visor.classList.remove("oculto");
    };
  }
  document.getElementById("visor-cerrar").onclick = function () {
    visor.classList.add("oculto");
  };
}
