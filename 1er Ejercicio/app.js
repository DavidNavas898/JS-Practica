const boton = document.getElementById("boton-cambio")
const fondoBody = document.getElementById("fondo")
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

boton.addEventListener("click",()=>{
  fondoBody.style.backgroundColor = getRandomColor();  
})