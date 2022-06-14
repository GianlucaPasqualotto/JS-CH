let resultado = 0

function nombreAlumno() {
    let solicitarNombre = prompt ("Alumno, ingrese su nombre")
    alert("Bienvenido " + solicitarNombre)
}

function sumarNotas() {
    let primeraNota = parseInt(prompt ("Ingrese su primera nota"))
    if (isNaN(primeraNota) && primeraNota == null && primeraNota == '') {
        alert("Su primera nota es: " + primeraNota)
    } else {
        alert("Por favor, ingrese valores numéricos")
    }
    let segundaNota = parseInt(prompt ("Ingrese su segunda nota"))
    alert("Su segunda nota es: " + segundaNota)
    let terceraNota = parseInt(prompt ("Ingrese su tercera nota"))
    alert("Su tercera nota es: " + terceraNota)
    resultado = ((primeraNota + segundaNota + terceraNota) / 3)
    alert("El promedio de sus notas es: " + resultado)
    if (resultado < 6) {
        alert("Desaprobaste :(")
    }
    else { (resultado >= 6)
        alert("¡Aprobaste! :)")
    }
}

nombreAlumno()
sumarNotas()