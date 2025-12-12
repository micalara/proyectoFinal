document.addEventListener("DOMContentLoaded", obtenerFrase);

async function obtenerFrase() {
    try {
        const resp = await fetch("https://693b701e9b80ba7262cd4ab0.mockapi.io/api/quotes"); //la cree yo
        const data = await resp.json();

        //elegir una frase random
        const random = data[Math.floor(Math.random() * data.length)];

        document.getElementById("fraseTexto").textContent = `"${random.text}" — ${random.author}`;

    } catch (error) {
        document.getElementById("fraseTexto").textContent = "No se pudo cargar la frase del día.";
    }
}




