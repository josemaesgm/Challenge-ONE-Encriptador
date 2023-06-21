

// Auí se toma el texto y se encripta y se envia la otra caja de texto
function reemplazarLetras() {
    
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoResultado = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById("textoResultado").value = textoResultado;
} 

  
    // Aquí esta esta la parte para copiar al portapapeles

function copiarTexto() {
        var textoCopiar = document.getElementById("textoResultado").value;
        
        // Crear un elemento auxiliar (input) para copiar el texto (no he entendido bien esta parte)
        var aux = document.createElement("input");
        aux.setAttribute("value", textoCopiar);
        
        // Agregar el elemento auxiliar al DOM
        document.body.appendChild(aux);
        
        // Seleccionar el contenido del elemento auxiliar
        aux.select();
        
        // Copiar el texto al portapapeles
        document.execCommand("copy");
        
        // Remover el elemento auxiliar del DOM
        document.body.removeChild(aux);
}


// con el boton desencriptar aqui se traduce lo que se encripto, es lo mismo que la otra function solo cambie lo que hace y lo mande al boton desencriptar
function traducir (){

    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoResultado = textoOriginal
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById("textoResultado").value = textoResultado;

}
      
// con el boton encriptar se oculta la imagen y el texto alerta asi como aparecer el boton copiar 


function ocultarImagen(){
    var hideImage = getElementById("imagMuneo");

    

}