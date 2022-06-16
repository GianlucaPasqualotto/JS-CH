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
