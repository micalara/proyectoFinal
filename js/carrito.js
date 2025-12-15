const CART_KEY = "carrito";

function loadCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrecio(n) {
  return "$" + n;
}

/* renderiza todos los productos del carrito */
function renderCartPage() {
  const container = document.getElementById("carritoDetalle");
  const totalEl = document.getElementById("totalCompra");
  container.innerHTML = "";

  const cart = loadCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="carrito-vacio">
        <p>Tu carrito está vacío.</p>
        <a href="./productos.html" class="boton btn-carrito-seguir">Ir a productos</a>
      </div>
    `;
    totalEl.textContent = "";
    return;
  }
  const btnSeguir = document.querySelector(".btn-seguir-comprando");
if (btnSeguir) {
  btnSeguir.addEventListener("click", () => {
    window.location.href = "./productos.html";
  });
}


  const table = document.createElement("table");
  table.className = "carrito-tabla";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  cart.forEach(item => {
    const tr = document.createElement("tr");
    tr.className = "carrito-item";

    tr.innerHTML = `
      <td>
        <div class="carrito-producto">
          ${item.img ? `<img src="${item.img}" alt="${item.nombre}">` : ""}
          <div class="carrito-info">
            <strong>${item.nombre}</strong>
            <span>${item.detalle || ""}</span>
          </div>
        </div>
      </td>

      <td>${formatPrecio(item.precio)}</td>

      <td>
        <div class="carrito-cantidad">
          <button class="qty-decrease" data-id="${item.id}">-</button>
          <span>${item.cantidad}</span>
          <button class="qty-increase" data-id="${item.id}">+</button>
        </div>
      </td>

      <td>${formatPrecio(item.precio * item.cantidad)}</td>

      <td>
        <button class="remove-item" data-id="${item.id}">
          Eliminar
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  container.appendChild(table);

  const total = cart.reduce((s, i) => s + i.precio * i.cantidad, 0);
  totalEl.textContent = `Total: ${formatPrecio(total)}`;

  /* eventos */
  container.querySelectorAll(".qty-increase").forEach(btn =>
    btn.addEventListener("click", e =>
      changeQty(e.currentTarget.dataset.id, +1)
    )
  );

  container.querySelectorAll(".qty-decrease").forEach(btn =>
    btn.addEventListener("click", e =>
      changeQty(e.currentTarget.dataset.id, -1)
    )
  );

  container.querySelectorAll(".remove-item").forEach(btn =>
    btn.addEventListener("click", e =>
      removeItem(e.currentTarget.dataset.id)
    )
  );
}

function changeQty(id, delta) {
  const cart = loadCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.cantidad += delta;
  if (item.cantidad < 1) item.cantidad = 1;

  saveCart(cart);
  renderCartPage();
}

function removeItem(id) {
  let cart = loadCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}

function vaciarCarritoPage() {
  if (!confirm("¿Vaciar todo el carrito?")) return;
  localStorage.removeItem(CART_KEY);
  renderCartPage();
}

/* DOM ready */
document.addEventListener("DOMContentLoaded", () => {

  const usuarioLogueado = localStorage.getItem("usuarioLogueado");
  if (!usuarioLogueado) {
    alert("Tenés que iniciar sesión para ver el carrito");
    window.location.href = "index.html";
    return;
  }

  renderCartPage();

  const vacBtn = document.getElementById("vaciar-carrito");
  if (vacBtn) {
    vacBtn.addEventListener("click", vaciarCarritoPage);
  }
});
