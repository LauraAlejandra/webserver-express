const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//se jecuta sin importar el url que la persona ponga
app.use(express.static(__dirname + '/public'));

//Express HBS
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.get('/', (req, res) => { //todas las peticiones que entren por el / ejecutan la funcion
    //res.send('hola mundo');
    res.render('home', {
        nombre: 'lauRa orTiz'
    }); //cualquier cosa que pase por el / renderiza el home
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

//NOTA: para que heroku ejecute esto en el package.json hay que poner el star server.js y se ejecuta con el comando npm start
//para ejecutar otro comando (el nodemon) del package.json es npm run nodemon