const textoIngresado = document.getElementById('text-input');
const encriptar = document.getElementById('btn-encriptar');
const desencriptar = document.getElementById('btn-desencriptar');
// const t = document.getElementById('Texto');

const resultado = document.getElementById('resultado');

const fin = resultado;

const tarea = document.getElementById('tarea');



// const copiarAlPortapapeles= document.getElementById('copiarAlPortapapeles');
const right = document.getElementById('right');


function alertarValor(){
    return textoIngresado.value;

}

function encriptarValor (valor){

    return valor
    .replace(/e/g, 'enter')
    .replace(/i/g,'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}
function desencriptarValor (valor){
    return valor
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

encriptar.addEventListener('click', function(){
    var nuevo_texto = encriptarValor(textoIngresado.value);
   
    // Eliminar el texto anterior
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    // Crear un nuevo elemento de texto y asignarle el valor encriptado
    var t = document.createElement('Texto');
    t.innerHTML = nuevo_texto;
    
    // Agregar el nuevo elemento de texto al resultado
    resultado.appendChild(t);
   
    // Actualizar la variable global con el nuevo texto
    texto_global = nuevo_texto;
    // copyToClipBoard(t);
   
});

desencriptar.addEventListener('click', function(){
    var nuevo_texto = desencriptarValor(textoIngresado.value);
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
    var t = document.createElement('Texto');
    
    t.innerHTML = desencriptarValor(textoIngresado.value)

    resultado.appendChild(t);
   
    // Actualizar la variable global con el nuevo texto
    texto_global = nuevo_texto;
    // copyToClipBoard(t);
});

function copyToClipBoard() {
    var content = document.getElementById('resultado');

    // Crear un elemento de texto temporal
    var tempElement = document.createElement('textarea');
    tempElement.value = content.innerText;
    document.body.appendChild(tempElement);

    // Seleccionar y copiar el contenido del elemento temporal
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    
    // var content = document.getElementById('resultado');
    
    // content.select();
    // document.execCommand('copy');

   
}


// function copiarAlPortapapeles(){
//     // let texto = document.getElementById('texto');
//     texto,select();
//     texto.setSelectionRange(0, 999999);
//     document.execCommand('h3');
// }

// const copiar = document.getElementById("copiador2");
// copiar.addEventListener("click", copiarAlPortapapeles, false);
// function copiarAlPortapapeles() {
//   var texto = document.getElementById("div2");
//   var inputFalso = document.createElement("input");
//   inputFalso.setAttribute("value", texto.innerHTML);
//   document.body.appendChild(inputFalso);
//   inputFalso.select();
//   document.execCommand("copy");
//   document.body.removeChild(inputFalso);
  
// }


