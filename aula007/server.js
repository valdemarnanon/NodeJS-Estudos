const express = require('express');
const app = express();

//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página. /
// http://meusite.com/sobre <- GET -> Entregue a página. /sobre
// http://meusite.com/contato <- GET -> Entregue a página. /contato

app.get('/', (request, respost) => {
    respost.send(`
        <form actiom="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (request, respost) => {
    respost.send('Recebi o formulário');
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});