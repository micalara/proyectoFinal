const CART_KEY = "carrito";

function loadCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function formatPrecio(n) { return "$" + n; }

//renderiza todos los productos del carrito
function renderCartPage() {
  const container = document.getElementById("carritoDetalle");
  const totalEl = document.getElementById("totalCompra");
  container.innerHTML = "";

  const cart = loadCart();
  if (cart.length === 0) {
    container.innerHTML = `<div style="padding:20px; background:#fff; border-radius:12px; text-align:center;">
      <p style="margin:0 0 8px;">Tu carrito está vacío.</p>
      <a href="./productos.html" class="boton">Ir a productos</a>
    </div>`;
    totalEl.textContent = "";
    return;
  }

  //tabla de items
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.innerHTML = `
    <thead>
      <tr style="text-align:left; border-bottom: 1px solid rgba(0,0,0,0.08);">
        <th style="padding:12px">Producto</th>
        <th style="padding:12px">Precio</th>
        <th style="padding:12px">Cantidad</th>
        <th style="padding:12px">Subtotal</th>
        <th style="padding:12px"></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  cart.forEach(item => {
    const tr = document.createElement("tr");
    tr.style.borderBottom = "1px solid rgba(0,0,0,0.04)";
    tr.innerHTML = `
      <td style="padding:12px; vertical-align:middle;">
        <div style="display:flex; align-items:center; gap:12px;">
          ${item.img ? `<img src="${item.img}" alt="${item.nombre}" style="width:68px; height:68px; object-fit:cover; border-radius:8px;">` : ''}
          <div>
            <div style="font-weight:700;">${item.nombre}</div>
            <div style="font-size:0.9rem; color:#666;">${item.detalle || ''}</div>
          </div>
        </div>
      </td>
      <td style="padding:12px; vertical-align:middle;">${formatPrecio(item.precio)}</td>
      <td style="padding:12px; vertical-align:middle;">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="qty-decrease" data-id="${item.id}" style="padding:6px 8px; border-radius:8px; background:#f3a8c2; border:none; cursor:pointer;">-</button>
          <div style="min-width:28px; text-align:center;">${item.cantidad}</div>
          <button class="qty-increase" data-id="${item.id}" style="padding:6px 8px; border-radius:8px; background:#f3a8c2; border:none; cursor:pointer;">+</button>
        </div>
      </td>
      <td style="padding:12px; vertical-align:middle;">${formatPrecio(item.precio * item.cantidad)}</td>
      <td style="padding:12px; vertical-align:middle;">
        <button class="remove-item" data-id="${item.id}" style="padding:8px 10px; border-radius:8px; background:#ff8aa0; border:none; cursor:pointer;">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(table);

  //total
  const total = cart.reduce((s, i) => s + i.precio * i.cantidad, 0);
  totalEl.textContent = `Total: ${formatPrecio(total)}`;

  //controla cantidades + o - y vaciar
  container.querySelectorAll(".qty-increase").forEach(btn =>
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      changeQty(id, +1);
    })
  );
  container.querySelectorAll(".qty-decrease").forEach(btn =>
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      changeQty(id, -1);
    })
  );
  container.querySelectorAll(".remove-item").forEach(btn =>
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      removeItem(id);
    })
  );
}

function changeQty(id, delta) {
  const cart = loadCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].cantidad += delta;
  if (cart[idx].cantidad < 1) cart[idx].cantidad = 1;
  saveCart(cart);
  renderCartPage();
}

function removeItem(id) {
  let cart = loadCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}

//vaciar carrito desde carrito.html
function vaciarCarritoPage() {
  if (!confirm("¿Vaciar todo el carrito?")) return;
  localStorage.removeItem(CART_KEY);
  renderCartPage();
}

//DOM ready
document.addEventListener("DOMContentLoaded", () => {

  // ✅ CONTROL DE SESIÓN (VA PRIMERO)
  const usuarioLogueado = localStorage.getItem("usuarioLogueado");

  if (!usuarioLogueado) {
  alert("Tenés que iniciar sesión para ver el carrito");
  window.location.href = "index.html";
  return;
}


  // ✅ SI HAY SESIÓN, SEGUIMOS NORMAL
  renderCartPage();

  const vacBtn = document.getElementById("vaciar-carrito");
  if (vacBtn) {
    vacBtn.addEventListener("click", vaciarCarritoPage);
  }
});


