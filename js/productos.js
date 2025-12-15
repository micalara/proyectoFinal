const productos = [
    /* ======================= AGENDAS 2026 (10) ======================= */
    { id: "1", categoria: "agendas", nombre: "Agenda 2026 kiss rayada", precio: 5800, detalle: "Hojas rayadas, tapa dura plastificada, tamaño A5", img: "img/produ1.png" },
    { id: "2", categoria: "agendas", nombre: "Agenda 2026 floreada ", precio: 5600, detalle: "Hojas lisas, papel grueso 90g, tapa dura premium", img: "img/produ2.png" },
    { id: "3", categoria: "agendas", nombre: "Agenda 2026 ondas bullet", precio: 6200, detalle: "Hojas punteadas para bullet journal, cinta marcadora", img: "img/produ3.png" },
    { id: "4", categoria: "agendas", nombre: "Agenda 2026 corazones", precio: 6000, detalle: "Hojas cuadriculadas, espiral metálico reforzado", img: "img/produ4.png" },
    { id: "5", categoria: "agendas", nombre: "Agenda 2026 espiral", precio: 6700, detalle: "Diseño floral, hojas rayadas, tapa mate resistente", img: "img/produ5.png" },
    { id: "6", categoria: "agendas", nombre: "Agenda 2026 minimalista", precio: 7500, detalle: "Formato semanal, hojas lisas gruesas, tapa símil cuero", img: "img/produ6.png" },
    { id: "7", categoria: "agendas", nombre: "Agenda 2026 peach", precio: 5200, detalle: "Espiral metálico, hojas rayadas básicas, liviana", img: "img/produ7.png" },
    { id: "8", categoria: "agendas", nombre: "Agenda 2026 floral", precio: 7000, detalle: "Hojas punteadas, ilustraciones mensuales, tapa dura brillante", img: "img/produ8.png" },
    { id: "9", categoria: "agendas", nombre: "Agenda 2026 cerezas", precio: 4500, detalle: "Tamaño pequeño, hojas lisas, ideal para llevar encima", img: "img/produ9.png" },
    { id: "10", categoria: "agendas", nombre: "Agenda 2026 flores", precio: 7800, detalle: "Semana a la vista, papel premium, elástico de cierre", img: "img/produ10.png" },

    /* ======================= CARPETAS (5) ======================= */
    { id: "11", categoria: "carpetas", nombre: "Carpeta A4 tapa dura", precio: 3800, detalle: "Cartón rígido, anillos metálicos, diseño clásico", img: "img/carpeta1.png" },
    { id: "12", categoria: "carpetas", nombre: "Carpeta escolar estampada", precio: 4200, detalle: "Diseños variados, anillos reforzados, tamaño A4", img: "img/carpeta2.png" },
    { id: "13", categoria: "carpetas", nombre: "Carpeta transparente", precio: 3000, detalle: "Polipropileno translúcido, liviana y flexible", img: "img/carpeta3.png" },
    { id: "14", categoria: "carpetas", nombre: "Carpeta ejecutiva símil cuero", precio: 5500, detalle: "Tapa símil cuero, anillos metálicos gruesos", img: "img/carpeta4.png" },
    { id: "15", categoria: "carpetas", nombre: "Carpeta A5 compacta", precio: 3200, detalle: "Formato pequeño, tapa dura plastificada", img: "img/carpeta5.png" },

    /* ======================= CARTUCHERAS (5) ======================= */
    { id: "16", categoria: "cartucheras", nombre: "Cartuchera clásica rectangular", precio: 3500, detalle: "Tela resistente, cierre metálico, tamaño estándar", img: "img/cartuchera1.png" },
    { id: "17", categoria: "cartucheras", nombre: "Cartuchera triple cierre", precio: 5200, detalle: "Tres compartimientos independientes, gran capacidad", img: "img/cartuchera2.png" },
    { id: "18", categoria: "cartucheras", nombre: "Cartuchera cilíndrica", precio: 3000, detalle: "Diseño tubular, ideal para lápices largos", img: "img/cartuchera3.png" },
    { id: "19", categoria: "cartucheras", nombre: "Cartuchera escolar estampada", precio: 3800, detalle: "Estampados coloridos, cierre reforzado", img: "img/cartuchera4.png" },
    { id: "20", categoria: "cartucheras", nombre: "Cartuchera premium rígida", precio: 6000, detalle: "Estructura rígida, interior acolchonado", img: "img/cartuchera5.png" },

    /* ======================= MOCHILAS (5) ======================= */
    { id: "21", categoria: "mochilas", nombre: "Mochila escolar básica", precio: 9500, detalle: "Un compartimiento grande, bolsillo frontal", img: "img/mochila1.png" },
    { id: "22", categoria: "mochilas", nombre: "Mochila reforzada", precio: 12500, detalle: "Costuras reforzadas, espalda acolchonada", img: "img/mochila2.png" },
    { id: "23", categoria: "mochilas", nombre: "Mochila estampada juvenil", precio: 13800, detalle: "Diseños modernos, varios compartimientos", img: "img/mochila3.png" },
    { id: "24", categoria: "mochilas", nombre: "Mochila premium símil cuero", precio: 16500, detalle: "Material símil cuero lavable, bolsillos internos", img: "img/mochila4.png" },
    { id: "25", categoria: "mochilas", nombre: "Mochila doble cierre grande", precio: 15000, detalle: "Gran capacidad, doble cierre reforzado", img: "img/mochila5.png" },

    /* ======================= ÚTILES BÁSICOS (5) ======================= */
    { id: "26", categoria: "utiles", nombre: "Lápiz negro HB", precio: 600, detalle: "Madera premium, mina resistente", img: "img/lapiz1.png" },
    { id: "27", categoria: "utiles", nombre: "Birome azul clásica", precio: 700, detalle: "Tinta azul fluida, punta fina", img: "img/birome1.png" },
    { id: "28", categoria: "utiles", nombre: "Regla 20 cm transparente", precio: 900, detalle: "Plástico rígido translúcido", img: "img/regla1.png" },
    { id: "29", categoria: "utiles", nombre: "Tijera escolar", precio: 1500, detalle: "Puntas redondeadas, mango plástico", img: "img/tijera1.png" },
    { id: "30", categoria: "utiles", nombre: "Goma de borrar blanca", precio: 500, detalle: "Goma suave, no deja manchas", img: "img/goma1.png" }
];

function filtrarPorCategoria(lista, categoria) {
    if (!categoria) return lista;
    return lista.filter(p => p.categoria === categoria);
}

const CART_KEY = "carrito";

function loadCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrecio(n) {
    return "$" + n.toString();
}

function addToCart(productId) {
    const cart = loadCart();
    const prod = productos.find(p => p.id === productId);
    if (!prod) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.cantidad += 1;
    } else {
        cart.push({
            id: prod.id,
            nombre: prod.nombre,
            precio: prod.precio,
            cantidad: 1,
            img: prod.img || ""
        });
    }

    saveCart(cart);
}

function aplicarOrdenEspecial(lista) {
    if (lista.length <= 5) return lista;

    const arriba = lista.slice(0, 3);
    const abajo = lista.slice(3, 5);
    const resto = lista.slice(5);

    return [...arriba, ...abajo, ...resto];
}

/*renderizar productos*/
function renderProducts(listaOriginal) {
    const cont = document.getElementById("contenedor");
    if (!cont) return;

    // 👉 aplicar orden especial
    const lista = aplicarOrdenEspecial(listaOriginal);

    let html = "";
    lista.forEach(p => {
        html += `
        <article class="tarjeta" data-id="${p.id}">
            <img class="imgProdu" src="${p.img}" alt="${p.nombre}" onerror="this.style.display='none'">
            <h3>${p.nombre}</h3>
            <p style="font-weight:600; margin:6px 0;">${formatPrecio(p.precio)}</p>
            <p class="detalle oculto" style="font-size:0.9rem; color:#666; margin-bottom:12px;">${p.detalle}</p>
            <button type="button" class="btn-detalle" data-id="${p.id}">ver detalle</button>
            <button type="button" class="btn-add" data-id="${p.id}">Agregar al carrito</button>
        </article>
        `;
    });

    cont.innerHTML = html;

    cont.querySelectorAll(".btn-add").forEach(btn => {
        btn.addEventListener("click", () => {
            const usuarioLogueado = localStorage.getItem("usuarioLogueado");

            // 🚫 SI NO HAY SESIÓN
            if (!usuarioLogueado) {
                alert("Tenés que iniciar sesión para agregar productos al carrito 💖");
                return;
            }

            // ✅ SI HAY SESIÓN
            const id = btn.getAttribute("data-id");
            addToCart(id);

            const original = btn.textContent;
            btn.textContent = "Agregado ✓";
            setTimeout(() => btn.textContent = original, 900);
        });
    });


    cont.querySelectorAll(".btn-detalle").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".tarjeta");
            const parrafo = card.querySelector(".detalle");
            const oculto = parrafo.classList.contains("oculto");

            if (oculto) {
                parrafo.classList.remove("oculto");
                btn.textContent = "ocultar detalle";
            } else {
                parrafo.classList.add("oculto");
                btn.textContent = "ver detalle";
            }
        });
    });
}

function vaciarCarrito() {
    localStorage.removeItem(CART_KEY);
}

document.addEventListener("DOMContentLoaded", () => {
    const categoria = localStorage.getItem("categoriaSeleccionada");
    const listaFiltrada = filtrarPorCategoria(productos, categoria);
    renderProducts(listaFiltrada);
    localStorage.removeItem("categoriaSeleccionada");

    const vacBtn = document.getElementById("vaciar-carrito");
    if (vacBtn) {
        vacBtn.addEventListener("click", () => {
            if (confirm("¿Vaciar carrito?")) {
                vaciarCarrito();
            }
        });
    }
});
