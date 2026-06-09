const envio = document.getElementById("boton-enviar");
const nombre = document.getElementById("nombre-formulario");
const correo = document.getElementById("correo-formulario");
const telefono = document.getElementById("telefono-formulario");
const formulario = document.getElementById("formulario");


envio.addEventListener("click", validacionFormulario)


function validacionFormulario(e){
    e.preventDefault();
    let valido = true;

    nombre.classList.remove("invalido");
    correo.classList.remove("invalido");
    telefono.classList.remove("invalido");
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-correo").textContent = "";
    document.getElementById("error-telefono").textContent = "";

    if (!nombre.value){
        const errorN = document.getElementById("error-nombre")
        nombre.classList.add("invalido")
        errorN.textContent="Tienes que ingresar un nombre."

        errorN.animate(
            [
                {
                    opacity: 0,
                    transform: "translateX(100px)"
                },
                {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out",
                fill: "forwards"
            }
        );
        valido = false;
               
    }if(!correo.value){
        const errorC = document.getElementById("error-correo")
        correo.classList.add("invalido")
        errorC.textContent="Tienes que ingresar un correo."

        errorC.animate(
            [
                {
                    opacity: 0,
                    transform: "translateX(100px)"
                },
                {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out",
                fill: "forwards"
            }
        ); 
        valido = false;  
    }if(!telefono.value){
        const errorT = document.getElementById("error-telefono")
        telefono.classList.add("invalido")
        errorT.textContent="Tienes que ingresar un Telefono."

        errorT.animate(
            [
                {
                    opacity: 0,
                    transform: "translateX(100px)"
                },
                {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out",
                fill: "forwards"
            }
        ); 
        valido = false;  
    }if(valido){
        const exito = document.getElementById("enviado")
        exito.textContent = "✅ Tu formulario ha sido enviado con exito"

        exito.animate(
        [
            { opacity: 0, transform: "translateY(-10px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 400,
            easing: "ease-out",
            fill: "forwards"
        }
    );
        setTimeout(() => {
            formulario.reset();
            exito.textContent = "";
        }, 3000);
    }
}

