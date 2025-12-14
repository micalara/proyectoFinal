document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita recargar la página

        const email = document.getElementById("correo").value.trim();
        const password = document.getElementById("pass").value.trim();

        if (!email || !password) {
            alert("Completá todos los campos");
            return;
        }

        // Traemos usuarios guardados o array vacío
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si ya existe
        const existe = usuarios.some(user => user.email === email);

        if (existe) {
            alert("Este usuario ya está registrado");
            return;
        }

        // Guardamos nuevo usuario
        usuarios.push({
            email: email,
            password: password
        });

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso 💖 Ahora podés iniciar sesión");

        //redirigir a login
        window.location.href = "entrar.html";
    });
});
