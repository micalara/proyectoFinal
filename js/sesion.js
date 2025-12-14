document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    const navRegistrarse = document.getElementById("navRegistrarse");
    const navEntrar = document.getElementById("navEntrar");
    const navCarrito = document.getElementById("navCarrito");

    if (usuario) {
        if (navRegistrarse) navRegistrarse.style.display = "none";
        if (navEntrar) navEntrar.style.display = "none";

        const li = document.createElement("li");
        li.className = "nav-item dropdown";

        li.innerHTML = `
            <a class="nav-link dropdown-toggle saludo-usuario"
               href="#"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false">
               Hola, ${usuario.nombre}!
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <button class="dropdown-item" id="btnLogout">
                        Cerrar sesión
                    </button>
                </li>
            </ul>
        `;

        navCarrito.before(li);

        // LOGOUT
        li.querySelector("#btnLogout").addEventListener("click", () => {
            localStorage.removeItem("usuarioLogueado");
            location.reload();
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {

  const loginCanvas = document.getElementById("offcanvasLogin");
  const registerCanvas = document.getElementById("offcanvasRegister");

  if (!loginCanvas || !registerCanvas) return;

  const loginInstance = bootstrap.Offcanvas.getOrCreateInstance(loginCanvas);
  const registerInstance = bootstrap.Offcanvas.getOrCreateInstance(registerCanvas);

  const abrirRegistro = document.getElementById("abrirRegistro");
  const abrirLogin = document.getElementById("abrirLogin");

  if (abrirRegistro) {
    abrirRegistro.addEventListener("click", (e) => {
      e.preventDefault();
      loginInstance.hide();

      setTimeout(() => {
        registerInstance.show();
      }, 300);
    });
  }

  if (abrirLogin) {
    abrirLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerInstance.hide();

      setTimeout(() => {
        loginInstance.show();
      }, 300);
    });
  }

});
