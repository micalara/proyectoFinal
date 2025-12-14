document.addEventListener("DOMContentLoaded", () => {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (!usuarioActivo) {
        alert("Tenés que iniciar sesión para acceder al carrito 🛒");
        window.location.href = "entrar.html";
    }
});
