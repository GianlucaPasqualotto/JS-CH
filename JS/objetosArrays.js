//Declaración de objetos
let autos1 = {
    marca: 'Chevrolet',
    modelo: 'Prisma',
    año: '2018',
    motor: 1.4,
    combustible: 'nafta',
}
console.log('Objeto Completo: ' , autos1);
let autos2 = {
    marca: 'Ford',
    modelo: 'Focus',
    año: '2017',
    motor: 1.6,
    combustible: 'nafta',
}

console.log('marca: ' + autos2.marca + ' ' + 'modelo: ' + autos2.modelo);

//Declaración de Arrays

let filtros = ['aceite', 'combustible', 'habitáculo', 'aire']
for (let i = 0; i < filtros.length; i++) {
    const filtro = filtros[i];
    console.log('filtro: ' + filtro);
}
console.log('array ' , filtros);

