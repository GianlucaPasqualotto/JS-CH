// Variables
const bienvenida = localStorage.getItem('bienvenida');
let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let autoUsuario = sessionStorage.getItem('autoUsuario');
let modeloUsuario = sessionStorage.getItem('modeloUsuario');
let inputNombre = sessionStorage.getItem('inputNombre');
let inputApellido = sessionStorage.getItem('inputApellido');
let inputAuto = sessionStorage.getItem('inputAuto');
let inputModelo = sessionStorage.getItem('inputModelo');

//Variables DOM
const saludoUsuario = document.querySelector('#saludoUsuario');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const auto = document.querySelector('#auto');
const modelo = document.querySelector('#modelo');
const contFormulario = document.querySelector('#contFormulario');
const contenido = document.querySelector('#contenido');

// Funciones
const ocultarFormulario = () => {
    contFormulario.style.display = 'none';
    contenido.innerHTML = `Hola ${nombreUsuario} ${apellidoUsuario}. Tienes un ${autoUsuario} ${modeloUsuario}.`
}
saludoUsuario.innerHTML = bienvenida;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;
    autoUsuario = auto.value;
    modeloUsuario = modelo.value;

    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);
    localStorage.setItem('autoUsuario', auto.value);
    localStorage.setItem('modeloUsuario', modelo.value);
    ocultarFormulario();
})

if (!!nombreUsuario && !!apellidoUsuario && !!autoUsuario && !!modeloUsuario) {
    ocultarFormulario();
}

nombre.value = inputNombre;
apellido.value = inputApellido;
auto.value = inputAuto;
modelo.value = inputModelo;

nombre.addEventListener('input', (e) => {
    sessionStorage.setItem('inputNombre', e.target.value)
})
apellido.addEventListener('input', (e) => {
    sessionStorage.setItem('inputApellido', e.target.value)
})
auto.addEventListener('input', (e) => {
    sessionStorage.setItem('inputAuto', e.target.value)
})
modelo.addEventListener('input', (e) => {
    sessionStorage.setItem('inputModelo', e.target.value)
})

// Almacenar objetos

const objeto = {filtro: 'aceite', precio: 800};
localStorage.setItem('producto', JSON.stringify(objeto));

const objetoRecuperado = JSON.parse(localStorage.getItem('producto'));
console.log(objetoRecuperado);
console.log(objetoRecuperado.precio);


//E-commerce
const productosSugeridos = ["Aceite Total", "Aceite Elf", "Aceite Gulf", "Bateria Herbo"];
const productos = [
{
    id: 1,
    nombre: 'Aceite Elf 15w-50',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_673721-MLA49909505823_052022-O.webp',
    precio: '6,641'
},
{
    id: 2,
    nombre: 'Aceite Gulf 5w-40',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_729393-MLA48697733859_122021-O.webp',
    precio: '5,350'
},
{
    id: 3,
    nombre: 'Aceite Total Quartz 5w-40',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_808156-MLA49308169453_032022-O.webp',
    precio: '10,837'
},
{
    id: 4,
    nombre: 'Batería Herbo',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_907361-MLA41149583710_032020-O.webp',
    precio: '13,727'
},
{
    id: 5,
    nombre: 'Kit Combo Ranger 3.0',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_734827-MLA46439469007_062021-O.webp',
    precio: '$8,786'
},
{
    id: 6,
    nombre: 'Filtro Aceite Mann',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_989406-MLA46724731628_072021-O.webp',
    precio: '$852'
},
];


let canasta = [];
let canastaStorage = JSON.parse(localStorage.getItem('canasta'));


// -------- CONSTANTES ELEMENTOS DEL DOM
const sugeridos = document.getElementById("sugeridos");
const listadoProductos = document.getElementById("listado");
const precioElementos = document.getElementsByClassName("precio");
const contenedorCanasta = document.getElementById("canasta");
const buscadorProducto = document.getElementById('buscador-producto');


// -------- FUNCIONES 
const clickProducto = (producto) => {
    insertarCanasta(producto);
    canasta.push(producto);
    localStorage.setItem('canasta', JSON.stringify(canasta));
}


const insertarCanasta = (producto) => {
    const contenedor = document.createElement('div');
    contenedor.classList = 'producto-canasta';
    contenedor.id = producto.id;
    contenedor.innerHTML = `<img src="${producto.imagen}">
    <div class="descripcion-producto">
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>
    </div>`;

contenedorCanasta.append(contenedor);
}

const insertarProductos = () => {
    for (const producto of productos) {
    let contenidoProducto = document.createElement("li");
    contenidoProducto.className = "producto";
    contenidoProducto.id = producto.id;
    contenidoProducto.innerHTML = `
        <div class="imagen-producto">
        <img src="${producto.imagen}" alt="">
        </div>
        <p class="nombre">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>`;
    contenidoProducto.onclick = () => {clickProducto(producto)};

    listadoProductos.appendChild(contenidoProducto);
}
}

const insertartBusquedasSugeridad = () => {
    for (const sugerido of productosSugeridos) {
    const li = document.createElement('li');
    li.classList.add('sugerido');
    li.innerHTML = sugerido;
    sugeridos.append(li);
}
}

const quitarBusquedasSugeridas = () => {
  // const listaSugeridos = document.querySelectorAll('.sugerido');
  // console.log(listaSugeridos);
  // for (const sugerido of listaSugeridos) {
  //   sugerido.remove();
  // }
sugeridos.innerHTML = '';
}

const verficarStorage = () => {
    console.log(canastaStorage);
    if (!!canastaStorage && canastaStorage.length > 0) {
    for (const producto of canastaStorage) {
    console.log(producto);
    insertarCanasta(producto);
    }
}
}

//CÓDIGO
insertarProductos();
verficarStorage();

buscadorProducto.onfocus = () => insertartBusquedasSugeridad();
buscadorProducto.onblur = () => quitarBusquedasSugeridas();