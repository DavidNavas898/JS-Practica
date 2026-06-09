let aumentar = document.getElementById("boton-aumentar");
let decrementar = document.getElementById("boton-decrementar");
let esContador = document.getElementById("contador");
 let contadorInicial = 0;

aumentar.addEventListener("click", sumarContador);
decrementar.addEventListener("click", restarContador);

function sumarContador(){
    contadorInicial++;
    esContador.textContent = `${contadorInicial}`;
}

function restarContador(){
    contadorInicial --;
    esContador.textContent = `${contadorInicial}`;
}




