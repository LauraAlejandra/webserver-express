const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); //separamos el texto por espacios
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); //la primera posicion en mayucula y lo demas en minuscula
    });
    return palabras.join(' '); //los junta con espacios
})