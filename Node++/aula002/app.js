const http = require('http');

http.createServer((req, res) => {
    res.end('Olá');
}).listen(3333);

console.log('O servidor esta rodando!');