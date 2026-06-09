const btnIniciar = document.getElementById('btn-iniciar');
const inputSegundos = document.getElementById('segundos');
const display = document.getElementById('display');
const card = document.getElementById('card');

let intervalo = null;

btnIniciar.addEventListener('click', iniciar);

function iniciar() {
    clearInterval(intervalo);
    card.classList.remove('terminado');

    let segundos = parseInt(inputSegundos.value);

    if (!segundos || segundos < 1) {
        display.textContent = 'Ingresa un número válido';
        return;
    }

    display.textContent = segundos;

    intervalo = setInterval(() => {
        segundos--;
        display.textContent = segundos;

        if (segundos === 0) {
            clearInterval(intervalo);
            display.textContent = '¡Tiempo cumplido!';
            card.classList.add('terminado');
        }
    }, 1000);
}