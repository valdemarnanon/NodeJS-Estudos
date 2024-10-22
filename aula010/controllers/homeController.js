exports.paginaInicial = (request, respost) => {
    respost.send(`
        <form actiom="/" method="POST">
        Nome: <input type="text" name="nome">
        Sobrenome: <input type="text" name="sobrenome">
        <button>Enviar formulário</button>
        </form>
        `);
};

exports.trataPost = (request, respost) => {
    respost.send('Ei, sou sua nova rota de post');
}