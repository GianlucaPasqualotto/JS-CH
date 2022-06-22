class Alfajor {
    constructor(alfajor, cantidad) {
        this.id = alfajor.id;
        this.marca = alfajor.marca;
        this.precio = alfajor.precio;
        this.cantidad = cantidad;
        this.precioTotal = alfajor.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}


const  FiltroAceite = [
    {
        id: 0,
        marca: "Castrol",
        descipcion: "10w-40",
        tipo: "Semisintetico",
        precio: 1500,
    },
    {
        id: 1,
        marca: "Mobil",
        descipcion: "10w-50",
        tipo: "Sintetico",
        precio: 1000,
    },
    {
        id: 2,
        marca: "Total",
        descipcion: "5w-40",
        tipo: "Semisintetico",
        precio: 1800,
    },
    {
        id: 3,
        marca: "YPF",
        descipcion: "10w-60",
        tipo: "Sintetico",
        precio: 800,
    },
];

function imprimirDatosTomadosPorPrompt () {
    let carrito = document.querySelector("#carrito");
    let dato = prompt("Cual es su nombre?");
    let p = document.createElement("p");
    p.textContent = `Seleccionaste ${dato}`;
    carrito.appendChild("p");
}



// function cotizador() {
//     let nombre = prompt ("Bienvenido, ingrese su nombre y apellido")
//     let filtro = prompt("Bienvenido: " + nombre + " " + "\n Ingrese la opción deseada \n"  + "¿Qué filtro necesita? \n - 1 Filtro de aceite \n - 2 Filtro de aire \n - 3 Filtro de combustible \n - 4 Filtro de habitáculo \n - 5 Salir")
//     if (filtro == 1) {
//         alert("El precio del filtro es " + "$" + (filtroCostos.aceite*1.25))
//     } else if (filtro == 2) {
//         alert("El precio del filtro es " + "$" + (filtroCostos.aire*1.25))
//     } else if (filtro == 3) {
//         alert("El precio del filtro es " + "$" + (filtroCostos.combustible*1.25))
//     } else if (filtro == 4) {
//         alert("El precio del filtro es " + "$" + (filtroCostos.habitáculo*1.25))
//     } else if (filtro == 5) {
//         return
//     } else {
//         alert("Número incorrecto. Por favor ingrese una de las opciones")
//     }
// }

// cotizador();


// function imprimirElementosEnHTML(array) {
//     let contenedor = document.getElementById("contenedor");
//     for(const elemento of array) {
//         let card = document.createElement("div");
//         let nombre = document.createElement("h2");
//         nombre.textContent = elemento.marca;
//         card.appendChild(nombre);
//         let precio = document.createElement("p");
//         precio.textContent = `Precio ${elemento.precio}`;
//         card.appendChild(precio);
//         contenedor.appendChild(elemento);
//     }
// }

// //imprimirElementosEnHTML(array);

// function imprimirElementosEnHTML2(array) {
//     let contenedor = document.getElementById("contenedor");
//     for (const elemento of array) {
//         contenedor.innerHTML = `
// 		<div>
// 			<h2>${elemento.nombre}</h2>
// 			<img src="${elemento.img}">
// 			<p>Precio: ${elemento.precio}</p>
// 		</div>`;
//     }
// }
