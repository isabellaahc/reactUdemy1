// scope
/*
let musica = 'rock';

if (musica){
    let musica = 'Grunge';
    console.log(`Dentro del if : ${musica}`)
}

console.log(`Fuera del if: ${musica}`);
*/

// const nombre = 'isabel';
// const trabajo = "desarrolladora";

// //concatenar js
// console.log(`Nombre : ${nombre} tiene como profesion ${trabajo}`)

// const contenedorApp = document.querySelector('#app');
// // let html = '<ul>'+
// //                 '<li> Nombre: ' +nombre+ '<li>'+
// //                 '<li> Trabajo: ' +trabajo+ '<li>'+
// //             '<ul>';
// let html = `<ul>
//                 <li>Nombre: ${nombre}<li>
//                 <li>Trabajo: ${trabajo}<li>
//             <ul>`
// contenedorApp.innerHTML = html;

//function declaration
//en estas funciones se puede llamar antes de declarar la función por lo que no importa si está antes o después
// function saludar(nombre){
//     console.log(`Bienvenido ${nombre}`)
// }

// saludar('isabel');

//function expression
//acá es necesario que esté generada la función para llamarla
// const cliente = function(nombreCliente){
//     console.log(`Mostrando datos del cliente ${nombreCliente}`)
// }

// cliente('Isabel Anabalon');

// function actividad (nombre = 'isabel', actividad = 'estudiando') {
//     console.log(`La persona ${nombre} esta realizando la actividad de aprender ${actividad}`);
// }

// actividad('isabel', 'jugando');
// actividad('horacio san', 'tomando piscolita')
// actividad();

// const actividad = function(nombre = 'isabel', actividad = 'estudiando') {
//     console.log(`La persona ${nombre} esta realizando la actividad de aprender ${actividad}`);
// };

// let viajando = (destino) => {
//     return `Viajando a la cuidad de: ${destino}`
// }
//se da por implicito el return y si tiene un solo parametro no son necesarios los parentesis 
// let viajando = destino => `Viajando a la cuidad de : ${destino}`;

// let viaje = viajando('Chiloé');

// console.log(viaje);

//objetos
//literales

// const persona = {
//     nombre: 'isabel',
//     profesion: 'Desarrolladora',
//     edad: 30
// };

// console.log(persona.nombre);
// console.log(persona['edad']);

//objects constructor (está quedando obsoleto)

// function Tarea (nombre, urgencia) {
//     this.nombre = nombre;
//     this.urgencia = urgencia
// }

// const tarea1 = new Tarea('Aprender Reacts', 'Urgente');
// console.log(tarea1);
// console.log(tarea1.nombre);
// console.log(tarea1.urgencia);


//prototypes

// const persona = {
//         nombre: 'isabel',
//         profesion: 'Desarrolladora',
//         edad: 30
//     };

// const mostrarTarea = (tarea, prioridad) => `La tarea ${tarea} tiene prioridad ${prioridad}`;

// Tarea.prototype.mostrarInfoTarea = function() {
//     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
// };

// const tarea1 = new Tarea('Aprender Reacts', 'Urgente');
// const tarea2 = new Tarea('Pasear al perrito', 'Media');
// console.log(tarea1);
// console.log(tarea1.mostrarInfoTarea());
// console.log(tarea2);
// console.log(tarea2.mostrarInfoTarea())

//destructuring de objetos (se encarga de extraer valores)
const aprendiendoJS = {
    version : {
        nueva: 'ES6+',
        antigua: 'ES5',
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
} 

// console.log(aprendiendoJS);

// let version = aprendiendoJS.version;
// let frameworks = aprendiendoJS.frameworks;
// console.log(version.antigua);
// console.log(frameworks[1]);

let {version, frameworks} = aprendiendoJS;
let {nueva} = aprendiendoJS.version;
console.log(nueva);
console.log(frameworks[0]);

//object literat enhanced

const artista = 'chayanne';
const genero = 'Romantica';
const canciones = ['lo dejaría', 'torero', 'fiesta en america'];

const chayanne = {artista, genero, canciones};

console.log(chayanne)

const persona = {
    nombre: 'isabel',
    apellido: 'anabalon fuentes',
    edad: '30',
    dia: Date(),
    mostrarNombre() { console.log(`el nombre es ${this.nombre} ${this.apellido}`) },
    mostrarFechaActual() { console.log(`La fecha actual es : ${this.dia}`)}
};

persona.mostrarNombre();
persona.mostrarFechaActual();

//destructuring
let {nombre} = persona;

console.log(nombre);

//maps

const appContenedor = document.querySelector('#app');
appContenedor.innerHTML = canciones;

//para retornar un nuevo arreglo en base a otro
canciones.map(canciones => {
    return `Las canciones de chayanne son: ${canciones}`
});

//Para acceder a los keys de un objeto
console.log(Object.keys(persona));


//spread Operator
//sirve para copiar 

const suma = (a,b,c) => { console.log(a+b+c) };

const numeros = [1,2,3];
//... es la forma de ocupar spread operator
suma(...numeros);

//funciones para arrays
const listado = [
    {nombre: 'isabel', apellido: 'anabalon', edad: 30},
    {nombre: 'pablo', apellido: 'anabalon', edad: 31},
    {nombre: 'maria', apellido: 'fuentes', edad: 40},
    {nombre: 'horacio', apellido: 'salas', edad: 27}
]

console.log(listado);

//filtra por valor de parametro u objeto del array
 
const consulta = listado.filter(persona => {
    console.log(persona.nombre);
    return persona.edad >35;
});

console.log(consulta);

