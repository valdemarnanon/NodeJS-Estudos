const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { 
            extended: true
        }
    )
)


app.get('/', (request, respost) => {
    respost.send(`
        <form actiom="/" method="POST">
        Nome: <input type="text" name="nome">
        Sobrenome: <input type="text" name="sobrenome">
        <button>Enviar formulário</button>
        </form>
        `);
});

app.get('/testes/:idUsuarios?/:parametro?', (request, respost) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor3&chave3=valor3

    console.log(request.params);
    console.log(request.query);
    respost.send(request.query.facebookprofile);
})

app.post('/', (request, respost) => {
    console.log(request.body);
    respost.send(`O que você me enviou foi: ${request.body.nome} ${request.body.sobrenome}`);
})

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});