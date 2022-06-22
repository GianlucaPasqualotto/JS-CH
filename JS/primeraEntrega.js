
class Aceite {
    constructor(aceite, precio) {
        this.id = aceite.id
        this.marca = aceite.marca
        this.descripcion = aceite.descripcion
        this.tipo = aceite.tipo
        this.precio = precio
    }

    sacarPrecio() {
        this.precio = precio * 1.25
    }
}

let Aceites = [
    {
        id: 0,
        marca: "Castrol",
        descripcion: "10w-40",
        tipo: "Semisintetico",
        precio: 1500,
    },
    {
        id: 1,
        marca: "Mobil",
        descripcion: "10w-50",
        tipo: "Sintetico",
        precio: 1000,
    },
    {
        id: 2,
        marca: "Total",
        descripcion: "5w-40",
        tipo: "Semisintetico",
        precio: 1800,
    },
    {
        id: 3,
        marca: "YPF",
        descripcion: "10w-60",
        tipo: "Sintetico",
        precio: 800,
    },
];


Aceites.push({ id: 4,  marca: "Shell", descripcion: "10w-50", tipo: "Semisintetico", precio: 1500 })

console.log(Aceites);

let filtroCostos = {
    aceite: 1200,
    aire: 800,
    combustible: 2000,
    habitáculo: 800,
}

function cotizador() {
    let nombre = prompt ("Bienvenido, ingrese su nombre y apellido")
    let filtro = prompt("Bienvenido: " + nombre + " " + "\n Ingrese la opción deseada \n"  + "¿Qué filtro necesita? \n - 1 Filtro de aceite \n - 2 Filtro de aire \n - 3 Filtro de combustible \n - 4 Filtro de habitáculo \n - 5 Salir")
    if (filtro == 1) {
        alert("El precio del filtro es " + "$" + (filtroCostos.aceite*1.25))
    } else if (filtro == 2) {
        alert("El precio del filtro es " + "$" + (filtroCostos.aire*1.25))
    } else if (filtro == 3) {
        alert("El precio del filtro es " + "$" + (filtroCostos.combustible*1.25))
    } else if (filtro == 4) {
        alert("El precio del filtro es " + "$" + (filtroCostos.habitáculo*1.25))
    } else if (filtro == 5) {
        return
    } else {
        alert("Número incorrecto. Por favor ingrese una de las opciones")
    }
}

cotizador();


for (let i = 0; i < Aceites.length; i++) {
    console.log(Aceites[i]);
}

let PrecioNuevoEjemplo1 = []

PrecioNuevoEjemplo1 = Aceites.map((aceite) => {
    aceite.precio = aceite.precio * 1.25
    return aceite
})

console.log(PrecioNuevoEjemplo1);

