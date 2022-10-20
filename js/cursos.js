const cursitos = document.getElementById("cursitos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const cursos = [
    {
        id: 1,
        nombre: "Cata de Vinos Inicial",
        precio: 2500,
        descripcion: "Orientado a las personas que quieran iniciarse en el mundo del vino, ya sea para aplicarlo en su ámbito profesional o como aficionados de manera práctica.",  
        img: "img/curso1.jpg",

    },
    {
        id: 2,
        nombre: "Cata de Vinos Avanzado",
        precio: 3500,
        descripcion: "Orientado a las personas que hayan realizado el curso inicial de vinos y que quieran profundizar en los conocimientos sobre vinos y las técnicas de cata.",
        img: "img/curso3.jpg",
    },
    {
        id: 3,
        nombre: "Comercialización de Vinos",
        precio: 4500,
        descripcion: "Orientado a aquellas personas que se encuentren trabajando o que quieran ingresar a la industria vitivinícola. Misión y objetivos de la bodega. Diseño de producto.",
        img: "img/curso4.jpg",
    },

];

let carrito = []; //carrito vacio//

cursos.forEach((todos) => {
    let content = document.createElement("div");
    content.className = "card"; //con esta propiedad se le da clase al container padre//
    content.innerHTML = `
        <card style="background"></card>
        <img src="${todos.img}">
        <h3>${todos.nombre}</h3>
        <h4>$${todos.precio}</h4>
        <p>${todos.descripcion}</p>
    `;

    cursitos.append(content);

    let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar"; //clase para el botón//

    content.append(comprar);

    comprar.addEventListener("click", () => { //escucha el evento de comprar//
        carrito.push({ //que es lo que quiero que agregue al carrito// 
            id: cursos.id,
            img: todos.img,
            nombre: todos.nombre,
            precio: todos.precio,
        });
        console.log(carrito);
    });    
});

verCarrito.addEventListener("click", () => { //evento//
    modalContainer.innerHTML = ""; //limpia todo para que no repita los productos en cada recorrido//
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h2 class="">Carrito 🛒</h2>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";//clase para estilos//

    modalbutton.addEventListener("click", () => { //salirme del carrito//
        modalContainer.style.display = "";
    });

    modalHeader.append("x"); //enchufamos el boton//

    carrito.forEach((todos) => { //lo que queremos recorrer, los productos//
        let carritoContent = document.createElement("div");
        carrito.className = "modal-content";
        carrito.innerHTML = `
            <img src="${todos.img}">
            <h3>${todos.nombre}</h3>
            <h4>$${todos.precio}</h4>
        `;
        
        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0); //metodo reduce calcula el total de los productos//

    const totalCompras = document.createElement("div");
    totalCompras.className = "total-content";
    totalCompras.innerHTML = `Total a pagar: $${total} `;
    
    modalContainer.append(totalCompras);//footer//
    
});


