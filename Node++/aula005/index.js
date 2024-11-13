const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


// Config
    // Templat Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas

    app.get('/cad', (req, res) => {
        res.render('formulario');
    });

    app.post('/add', (req, res) => {
        res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo);
    });

app.listen(3333, () => {
    console.log('O servidor está rodando na url http://localhost:3333')
});