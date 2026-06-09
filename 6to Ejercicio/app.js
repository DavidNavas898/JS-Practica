const personajes = [
    {
        nombre: "Arthur Morgan",
        rol: "Vaquero",
        biografia: "Miembro de la banda Van der Linde y protagonista de Red Dead Redemption 2."
    },
    {
        nombre: "John Marston",
        rol: "Forajido",
        biografia: "Exmiembro de la banda Van der Linde que busca una vida mejor para su familia."
    },
    {
        nombre: "Dutch van der Linde",
        rol: "Líder",
        biografia: "Fundador y líder de la banda Van der Linde."
    },
    {
        nombre: "Sadie Adler",
        rol: "Cazarrecompensas",
        biografia: "Mujer valiente que se une a la banda tras perder a su esposo."
    },
    {
        nombre: "Micah Bell",
        rol: "Pistolero",
        biografia: "Miembro conflictivo de la banda conocido por su ambición y traición."
    }
];


const main = document.getElementById("main-tarjetas");



function agregarTarjeta(){
    personajes.forEach(p =>{
        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        const nombre = document.createElement("h3");
        nombre.textContent = p.nombre;
        nombre.classList.add("tarjeta-nombre");

        const rol = document.createElement("p");
        rol.textContent = p.rol;
        rol.classList.add("tarjeta-rol");

        const biografia = document.createElement("p");
        biografia.textContent = p.biografia;
        biografia.classList.add("tarjeta-informacion")

        tarjeta.append(nombre);
        tarjeta.append(rol);
        tarjeta.append(biografia);

        main.append(tarjeta)
    })
}


agregarTarjeta();