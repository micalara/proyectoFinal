const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const pass = document.getElementById("pass").value.trim();

    // Traemos el usuario guardado
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
        alert("No hay usuarios registrados");
        return;
    }

    // Validamos datos
    if (
        correo === usuarioGuardado.correo &&
        pass === usuarioGuardado.pass
    ) {
        alert("Inicio de sesión exitoso");

        // Guardamos estado de sesión
        localStorage.setItem("logueado", "true");

        // Redirigir
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
});
