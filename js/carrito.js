// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Asus Rog B550 F',
        precio: 4043,
        imagen: 'images/productos/Motherboard.png'
    },
    {
        id: 2,
        nombre: 'Ryzen 9 7900X',
        precio: 7999,
        imagen: 'images/productos/Procesador.png'
    },
    {
        id: 3,
        nombre: 'TridentZ 16GB',
        precio: 3050,
        imagen: 'images/productos/RAM.png'
    },
    {
        id: 4,
        nombre: 'RTX 3080',
        precio: 31999,
        imagen: 'images/productos/TarjetaG.png'
    },
    {
        id: 5,
        nombre: 'Athlon 3000G',
        precio: 1615,
        imagen: 'images/productos/athlon.jpg'
    },
    {
        id: 6,
        nombre: 'Asus A320M-K',
        precio: 1199,
        imagen: 'images/productos/a320m.png'
    },

    {
        id: 7,
        nombre: 'Corsair RM1000X',
        precio: 3636,
        imagen: 'images/productos/corsair1k.jpg'
    },
    {
        id: 8,
        nombre: 'Aerocol Cylon 500w',
        precio: 949,
        imagen: 'images/productos/aerocol.jpg'
    },
    {
        id: 9,
        nombre: 'Cougar Conquer',
        precio: 6199,
        imagen: 'images/productos/cougar.png'
    },
    {
        id:10,
        nombre: 'Aerocool Bolt',
        precio: 899,
        imagen: 'images/productos/bolt.png'
    },
    {
        id:11,
        nombre: 'Samsung 980 PRO',
        precio: 3039,
        imagen: 'images/productos/samsung980.jpg'
    },
    {
        id:12,
        nombre: 'Kingston A400',
        precio: 525,
        imagen: 'images/productos/a400.jpg'
    }
];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const cantidad = 0;
        // Estructura
        const miNodoCol = document.createElement('div');
        miNodoCol.classList.add('class', 'col');
        
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card');
        miNodo.setAttribute('class', 'border border-0');



        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        miNodoCol.setAttribute('class', 'card border-dark');
        miNodoCol.setAttribute('style', "width: 20rem;");
        miNodoCol.style.backgroundColor = "#d2d2d2";
        miNodoCol.style.margin= "2px";
        miNodoCol.style.marginTop = "10px";
        
        // Titulo
        const miNodoTitle = document.createElement('h4');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.setAttribute('class', 'text-center')
        miNodoTitle.textContent = info.nombre;
        
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        miNodoImagen.setAttribute('class','card-img-top');
        miNodoImagen.setAttribute('height', '280');

 
        // Precio
        const miNodoPrecio = document.createElement('h5');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.setAttribute('class', 'text-center')
        miNodoPrecio.textContent = `${divisa}${info.precio}`;

        // Boton 
        const miNodoBoton2 = document.createElement('div');
        miNodoBoton2.setAttribute('class','text-center','d-grid gap-2');
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-warning');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        // Insertamos
        miNodoBoton2.appendChild(miNodoBoton);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton2);
        
        miNodo.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);
        miNodoCol.appendChild(miNodo);
        DOMitems.appendChild(miNodoCol);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        
        // Creamos el nodo del item del carrito
        // Estructura
        const miNodoCard = document.createElement('div');
        miNodoCard.classList.add('card')
        miNodoCard.setAttribute('class', 'style="max-width: 70px');
        miNodoCard.setAttribute('class', 'card border-light mb-4')
        miNodoCard.setAttribute('class', 'border border-1');
        miNodoCard.style.borderWidth = '2px';

        // Imagen
        const miFilaPrincipal = document.createElement('div');
        miFilaPrincipal.setAttribute('class','row g-0');

        const miImagen2 = document.createElement('div');
        miImagen2.setAttribute('class','col-sm-5');


        const miImagen = document.createElement('img');
        miImagen.setAttribute('class','card-img-top h-80');
        miImagen.setAttribute('src', `${miItem[0].imagen}`);
        miImagen.setAttribute('height', '100px');
        miImagen.setAttribute('class', 'img-fluid');
        miImagen.setAttribute('class', 'rounded');
        miImagen.setAttribute('class', 'box text-center');

        // Body
        const miBody1 = document.createElement('div');
        miBody1.classList.add('col-sm-7');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
                
        // Titulo
        const miNodoTitle = document.createElement('h7');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent =`${numeroUnidadesItem} x ${miItem[0].nombre}`;

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        const totalProducto = miItem[0].precio * `${numeroUnidadesItem}`
        miNodoPrecio.textContent = `${divisa} ${totalProducto}`;
        
        // Boton de borrar
        const miBoton = document.createElement('a');
        miBoton.classList.add('btn', 'btn-danger');
        miBoton.setAttribute('width', '5px');
        miBoton.textContent = 'X';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        // Insertamos
        miImagen2.appendChild(miImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miBoton);
        miBody1.appendChild(miNodoCardBody);

        miFilaPrincipal.appendChild(miImagen2);
        miFilaPrincipal.appendChild(miBody1);
        miNodoCard.appendChild(miFilaPrincipal);
        
        DOMitems.appendChild(miNodoCard);

        // Mezclamos nodos
        DOMcarrito.appendChild(miNodoCard);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
