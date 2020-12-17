function validar() {
    var Nombre, Apellido, Cedula, Correo, Expresion;
    Nombre = document.getElementById("nombre")
        .value; /* el value Sirve para guardar lo que se agregue al elemento no el elemento */
    Apellido = document.getElementById("apellido").value;
    Cedula = document.getElementById("cedula").value;
    Correo = document.getElementById("correo").value;
    Expresion = /\w+@\w+\.+[a-z]/;

    var lacedula = document.getElementById("inputcedula");
    var elnombre = document.getElementById("inputnombre");
    var elapellido = document.getElementById("inputapellido");
    var elcorreo = document.getElementById("inputcorreo");

    var inputnombre = document.getElementById("nombre");
    var inputapellido = document.getElementById("apellido");
    var inputcedula = document.getElementById("cedula");
    var inputcorreo = document.getElementById("correo");

    /**************************************************************************************/
    if (Nombre === "") {
        elnombre.className = "error-nombre";
        inputnombre.className = "focus form-control";

        return false;
    } else {
        elnombre.className = "texto-error";
        inputnombre.className = "form-control";
    }

    /**************************************************************************************/

    if (Apellido === "") {
        elapellido.className = "error-apellido";
        inputapellido.className = "focus form-control ";
        return false;
    } else {
        elapellido.className = "texto-error";
        inputapellido.className = "form-control";
    }

    /**************************************************************************************/

    if (Cedula === "") {
        lacedula.className = "error-cedula";
        inputcedula.className = "focus form-control ";

        return false;
    } else {
        lacedula.className = "texto-error";
        inputcedula.className = "form-control";
    }
    if (Cedula.length < 13) {
        inputcedula.className = "focus form-control ";
        return false;
    }

    /**************************************************************************************/

    if (Correo === "") {
        elcorreo.className = "error-correo";
        inputcorreo.className = "focus form-control ";
        return false;
    } else {
        elcorreo.className = "texto-error";
        inputcorreo.className = "form-control";
    }

    if (!Expresion.test(Correo)) {
        inputcorreo.className = "focus form-control ";
        return false;
    }
}

function funcion_Cedula() {
    var Mascara_cedula = document.getElementById("cedula");

    if (Mascara_cedula.value.length == 3 || Mascara_cedula.value.length == 11) {
        Mascara_cedula.value += "-";
    }
}

function SoloNumeros(e) {
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46-45";
    tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
        }
    }

    if (numeros.indexOf(teclado) == -1 && !tecla_especial) {
        return false;
    }
}