document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const pass = document.getElementById("pass").value.trim();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = usuarios.find(
            user => user.email === correo && user.password === pass
        );

        if (!usuario) {
            alert("Correo o contraseña incorrectos");
            return;
        }

        // Guardamos sesión activa
        localStorage.setItem("usuarioLogueado", JSON.stringify({
            nombre: usuario.nombre,
            email: usuario.email
        }));

        alert(`Bienvenida/o ${usuario.nombre} 💖`);

        window.location.href = "index.html";
    });
});
