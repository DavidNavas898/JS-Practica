const botones = document.querySelectorAll(".boton")
const objeto = document.querySelectorAll(".objeto")


botones.forEach((boton, indice) => {

    const guardado = localStorage.getItem(`chuleado-${indice}`);

    if (guardado === "amarillo") {
        boton.classList.add("favorito");
        objeto[indice].classList.add("favorito");
    }

    boton.addEventListener("click", () => {
        
        objeto[indice].classList.toggle("favorito");
        botones[indice].classList.toggle("favorito");

        if (boton.classList.contains("favorito")) {
            localStorage.setItem(`chuleado-${indice}`, "amarillo");
        }else{
            localStorage.setItem(`chuleado-${indice}`, "normal");
        }
    });

  
});