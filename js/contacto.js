document.addEventListener("DOMContentLoaded", () => {
    const mapaWrap = document.querySelector("#mapaInteractivo");
    const btn = document.querySelector(".btn-mapa-toggle");

    if (!btn || !mapaWrap) return;

    btn.addEventListener("click", () => {

        // apilar si ya está abierto
        if (mapaWrap.style.display === "block") {
            mapaWrap.style.display = "none";
            mapaWrap.setAttribute("aria-hidden", "true");
            return;
        }

        // insertar el iframe solo una vez
        if (!mapaWrap.dataset.loaded) {
            const iframe = document.createElement("iframe");
            iframe.loading = "lazy";

            iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.002285396736!2d-58.38375998477052!3d-34.603684880459494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjMnMDAuNyJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";

            mapaWrap.appendChild(iframe);
            mapaWrap.dataset.loaded = "1";
        }

        // mostrar
        mapaWrap.style.display = "block";
        mapaWrap.setAttribute("aria-hidden", "false");

        // scroll suave para que quede visible
        mapaWrap.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});
