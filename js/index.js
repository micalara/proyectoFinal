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

/* hero typing */
document.addEventListener("DOMContentLoaded", () => {

    const text = "Bienvenid@ a mi-ki";
    const speed = 65;
    const delay = 1000;

    const textElement = document.getElementById("type-text");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            textElement.textContent = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                setTimeout(() => isDeleting = true, delay);
            }

        } else {
            textElement.textContent = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? speed / 1.4 : speed);
    }

    typeEffect();
});
/* fin hero typing */




