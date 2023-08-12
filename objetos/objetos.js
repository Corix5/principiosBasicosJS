//objetos
const mascota = {
    nombre: 'Pelusa',
    edad: 5,
    raza: 'FrenchPoodle',
    vivo: true,
    vacunas: ['rabia', 'parvovirus', 'hepatitis']
}

//console.log(mascota);

//para acceder a una sola propiedad
//console.log(mascota.nombre);

//para agregar algo a un objeto:
//mascota.id = 1;
//console.log(mascota.id);

//Destructuring objects
//esto nos permite acceder a un dato y pintarlo en consola s
//sin la necesidad de declarar una variable inicial aparte
// const {edad, nombre} = mascota;
// console.log(edad); //accede al mismo nombre de las llaves
// console.log(nombre);

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com',
            facebook: 'https://facebook.com'
        },

        web: {
            blog: 'https://wesbos.com'
        }
    }
}

const {twitter, facebook} = wes.links.social;
console.log(twitter + "\n" + facebook)

const {first} = wes;
console.log(first);
