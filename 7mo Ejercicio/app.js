const boton = document.getElementById("boton-cambio")
const fondoBody = document.getElementById("fondo")

const temaGuardado = localStorage.getItem("tema");

if(temaGuardado === "oscuro"){
  fondoBody.classList.add("negro")
}else{
  fondoBody.classList.remove("negro")
}

boton.addEventListener("click",()=>{
  fondoBody.classList.toggle("negro")
  
  let fondo;

  if (fondoBody.classList.contains("negro")){
    fondo = "oscuro";
  }else{
    fondo = "claro";
  }

  localStorage.setItem("tema", fondo)

})
