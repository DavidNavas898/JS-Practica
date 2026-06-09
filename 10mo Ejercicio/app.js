const paises = ["Colombia","Japon","Mexico","Canada","Portugal","Argentina","España"];
const lista = document.getElementById("lista-paises");
const input = document.getElementById("selector-paises");

input.addEventListener("focus",() => mostrarOpciones(paises))

input.addEventListener("input",() => {
    const filtro = input.value.toLowerCase();
    const filtrados = paises.filter(p => p.toLowerCase().includes(filtro));
    mostrarOpciones(filtrados)
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
         e.preventDefault();
        const primero = lista.querySelector("li");
        if (primero) {
            seleccionar(primero.textContent);
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target !== input) lista.innerHTML = "";
});

function mostrarOpciones(array){
    lista.innerHTML = array
    .map(p => `<li onclick="seleccionar('${p}')">${p}</li>`)
    .join("")
}

function seleccionar(pais){
    input.value = pais;
    lista.innerHTML = "";
}

