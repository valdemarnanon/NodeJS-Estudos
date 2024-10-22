exports.paginaInicial = (request, respost) => {
    respost.render('index');
};

exports.trataPost = (request, respost) => {
    respost.send('Ei, sou sua nova rota de post');
}