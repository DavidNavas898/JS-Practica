const buscador = document.getElementById('buscador');
const lista = document.getElementById('lista');
const filtroLista = Array.from(lista.children);
buscador.addEventListener('input', filtrarLista);


function filtrarLista(){

    const textoBuscado = buscador.value.toLowerCase().trim();

    filtroLista.forEach(li=>{
        const textoItem = li.textContent.toLowerCase();
        if (textoItem.includes(textoBuscado)) {
            li.classList.remove('oculto');
        } else {
            li.classList.add('oculto');
        }
    });

}