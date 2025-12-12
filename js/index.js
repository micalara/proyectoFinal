document.addEventListener("DOMContentLoaded", () => {

    obtenerFrase();              // Llamamos la frase al cargar
    activarBotonesCategorias();  // Activamos los botones de categorías

});

//Obtener frase
async function obtenerFrase() {
    try {  
        const resp = await fetch("https://693b701e9b80ba7262cd4ab0.mockapi.io/api/quotes"); 
        const data = await resp.json();

        const random = data[Math.floor(Math.random() * data.length)];

        document.getElementById("fraseTexto").textContent =
            `"${random.text}" — ${random.author}`;

    } catch (error) {
        document.getElementById("fraseTexto").textContent =
            "No se pudo cargar la frase del día.";
    }
}

//Activar botones de categoría
function activarBotonesCategorias() {
    const botones = document.querySelectorAll(".catBtn");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const categoria = btn.dataset.cat;
            localStorage.setItem("categoriaSeleccionada", categoria);
            window.location.href = "productos.html";
        });
    });
}




