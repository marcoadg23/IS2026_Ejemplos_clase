// componente mejorado

const productos = [
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "escudo", precio: 20, img: "https://images.seeklogo.com/logo-png/47/2/chivas-guadalajara-logo-png_seeklogo-474960.png" },
    { nombre: "playera", precio: 2000, img: "https://cdn11.bigcommerce.com/s-f13ae7le0r/images/stencil/1280x1280/products/1178/2731/PLAYERA_RAYADA_REP_P6245_A24__84024.1717700317.jpg?c=1" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});



