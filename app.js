let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

//console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(intentos);
    if (numeroSecreto===numeroUsuario) {
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos ===1 )? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');  
    }
    else { 
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ('p', "El numero es menor");
        }
        else {
            asignarTextoElemento ('p', "El numero es mayor");
        }
        intentos++;
        limpiarCaja();

        
    }
        return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value='';
    return; 
}

function condicionesIniciales() {
    asignarTextoElemento ('h1', "El juego del Numero Secreto");
    asignarTextoElemento ('p', `Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1

}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //teinicar condiciones iniciales
    condicionesIniciales();
    //deshanilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);
    // ya se sortearon los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros Posibles');
       }   else {
        
        //si el numero generado esta incluido en la lista 
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado; 
}}}

condicionesIniciales ();