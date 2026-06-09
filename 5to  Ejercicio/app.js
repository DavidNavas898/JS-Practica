const miniaturas = document.querySelector(".miniaturas");
const imagenGrande = document.querySelector("#imagen-grande");

miniaturas.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        imagenGrande.src = e.target.dataset.src
    }    
})