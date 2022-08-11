const textoIngresado = document.getElementById('textoIngresado');
const encriptar = document.getElementById('botonEncriptar');
const desencriptar = document.getElementById('buttonDesencriptar');
const t = document.getElementById('Texto');

// const copiarAlPortapapeles= document.getElementById('copiarAlPortapapeles');
const div2 = document.getElementById('div2');


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
    var t = document.createElement('Texto');
    

    t.innerHTML = encriptarValor(textoIngresado.value);
    

    
    div2.appendChild(t);
   
});

desencriptar.addEventListener('click', function(){

    var textoDesencriptado = document.createElement('h1');

    textoDesencriptado.innerHTML = desencriptarValor(textoIngresado.value)

    
    div2.appendChild(textoDesencriptado);
    
});

function copyToClipBoard() {

    var content = document.getElementById('Texto');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
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


