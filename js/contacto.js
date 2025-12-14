document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.querySelector("#mapaInteractivo");
  const mapWrapper = document.querySelector(".map-wrapper");
  const btn = document.querySelector(".btn-mapa-toggle");

  if (!btn || !mapa || !mapWrapper) return;

  btn.addEventListener("click", () => {

    // toggle
    if (mapWrapper.style.display === "flex") {
      mapWrapper.style.display = "none";
      mapa.setAttribute("aria-hidden", "true");
      return;
    }

    // cargar iframe una sola vez
    if (!mapa.dataset.loaded) {
      const iframe = document.createElement("iframe");
      iframe.loading = "lazy";
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888946004!2d-58.38414532440817!3d-34.60373845759595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac8c2c8d2c3%3A0x8f1b65db98b07b06!2sObelisco!5e0!3m2!1ses!2sar!4v1710000000000";
      mapa.appendChild(iframe);
      mapa.dataset.loaded = "1";
    }

    mapWrapper.style.display = "flex";
    mapa.setAttribute("aria-hidden", "false");

    mapWrapper.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
