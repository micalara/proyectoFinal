//Defino el array de productos.
const productos = [
    { nombre: 'agenda basica 2026', precio: '$5000', detalle: 'Hojas lisas, tapa dura' },
    { nombre: 'agenda anillada', precio: '$5500', detalle: 'Hojas punteadas, tapa dura, anillado simple' },
    { nombre: 'carpeta mediana', precio: '$8000', detalle: 'tamanio de X-X, tapa dura' },
    { nombre: 'anotador rayado', precio: '$3500', detalle: 'Hojas rayadas, tapa blanda' },
    { nombre: 'anotador cuadriculado', precio: '$3500', detalle: 'Hojas cuadriculadas, tapa blanda' }
]

//Capturar el contenedor de productos en el HTML
const contenedor = document.querySelector('#contenedor');

//Recorrer mi array de productos y crear el div de la tarjeta
productos.forEach(producto => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');

    //crear el elemento h3 para el nombre del producto
    const nombreProducto = document.createElement('h3');
    nombreProducto.textContent = producto.nombre;

    //crear el elemento p para el precio del producto
    const precioProducto = document.createElement('p');
    precioProducto.textContent = producto.precio;

    //Crear el botonDetalle para ver el detalle
    const botonDetalle = document.createElement('button');
    botonDetalle.textContent = 'ver detalle';
    botonDetalle.classList.add('botonProdu');

    //Crear el botonDetalle para agregar al carrito
    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Agregar al carrito';
    botonComprar.classList.add('botonAddCarrito');

    //evento para mostrar u ocultar el detalle
    botonDetalle.addEventListener('click', () => {
        //Buscar si ya existe el parrafo de detalle
        const detalleExistente = tarjeta.querySelector('span');

        if (!detalleExistente) {
            const detalle = document.createElement('span');
            detalle.textContent = producto.detalle;
            tarjeta.insertBefore(detalle, botonDetalle);
            //tarjeta.appendChild(detalle);
            botonDetalle.textContent = 'ocultar detalle'; //cambia el texto del botonDetalle
        } else {
            //Si ya existe, lo eliminamos(ocultamos)
            detalleExistente.remove();
            botonDetalle.textContent = 'ver detalle'; //restaura la vista sin detalle
        }
    });

    botonComprar.addEventListener('click', () => {

        // Obtiene el carrito o lo crea vacío
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agrega el producto actual
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio
        });

        // Guarda el carrito actualizado
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Actualiza la vista del carrito
        actualizarCarrito();
    });


    //Ahora tengo que agregar el nombre y precio al div de la tarjeta
    tarjeta.appendChild(nombreProducto);
    tarjeta.appendChild(precioProducto);
    tarjeta.appendChild(botonDetalle);
    tarjeta.appendChild(botonComprar);

    //Insertar la tarjeta en el contenedor de productos
    contenedor.appendChild(tarjeta);
});


//CARRITO
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.getElementById("lista-carrito");

    // Si no existe el ul no hace nada
    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        const li = document.createElement("li");
        li.textContent = "El carrito está vacío.";
        listaCarrito.appendChild(li);
        return;
    }

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}


//Vaciar carrito
document.getElementById("vaciar-carrito")?.addEventListener("click", function () {
    localStorage.removeItem("carrito");
    actualizarCarrito();
});