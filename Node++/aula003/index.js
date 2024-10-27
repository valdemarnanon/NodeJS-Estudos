const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog', (req, res) => {
    res.send('<h1>Nosso blog</h1>');
});

app.get('/ola/:cargo/:nome/:cor', (req, res) => {
    res.send("<h1> Olá " + req.params.nome + '</h1>' +
         "<h2> Seu cargo é: " + req.params.cargo + '</h2>' +
         "<h3> Sua cor favorita é: " + req.params.cor + '</h3>');
});



// sempre a ultima linha do codigo;
app.listen(3333, () => {
    // função de callback, manda uma msg quando inicia o servidor.
    console.log("Servidor rodando na url: http://localhost:3333")
});
// localhost:3333