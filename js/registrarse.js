document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("correo").value.trim();
        const password = document.getElementById("pass").value.trim();

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

        usuarios.push({
            nombre: nombre,
            email: email,
            password: password
        });

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert(`¡Bienvenida/o ${nombre}! 💖 Ahora podés iniciar sesión`);

        window.location.href = "index.html";
    });
});
