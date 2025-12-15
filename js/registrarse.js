document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("regNombre").value.trim();
        const email = document.getElementById("regCorreo").value.trim();
        const password = document.getElementById("regPass").value.trim();

        if (!nombre || !email || !password) {
            alert("Completá todos los campos");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const existe = usuarios.some(user => user.email === email);
        if (existe) {
            alert("Este email ya está registrado");
            return;
        }

        usuarios.push({ nombre, email, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert(`¡Bienvenida/o ${nombre}! 💖 Ahora podés iniciar sesión.`);

        // cerrar offcanvas
        const offcanvasEl = document.getElementById("offcanvasRegister");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) offcanvas.hide();
    });
});
