//añadimos el listener de evento para separar el codigo js del html
document.getElementById("boton").addEventListener("click", metodo);


function saludo() {
    var texto = "Hola caranchoa";
    document.getElementById("divMensaje").innerHTML = texto;
}




function metodo() {
    var nombres = document.getElementById("campoNombre").value;
    var apellidos = document.getElementById("campoApellidos").value;
    var error = "Este campo no puede estar vacío";
    //validar campos
    if(nombres==""){
        document.getElementById("errorNombre").innerHTML = error;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }
    if (apellidos=="") {
        document.getElementById("errorApellidos").innerHTML = error;
    } else {
        document.getElementById("errorApellidos").innerHTML = "";
    }

    //escribir nombre + apellidos
    if(nombres!="" && apellidos!="") {
        document.getElementById("resultado").innerHTML = (nombres + " " + apellidos);
    }

    
    
}