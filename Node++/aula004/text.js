require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaDeCadastro', 'root', process.env.SECRET_KEY, {
    host: "localhost",
    dialect: 'mysql'
});


// Cria BD
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// cria Registro
// Postagem.create({
//     titulo: "O começo de um futuro",
//     conteudo: "Vdd fei"
// })

// Cria BD
const Trabalho = sequelize.define('trabalhos', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    profissao: {
        type: Sequelize.STRING,
    },
});

// essa função vai sincronizar
// Postagem.sync({force: true}); // Já criado.
// Trabalho.sync({force: true}); // Já criado.

// Saber se conectou ou não // PROMISSES
sequelize.authenticate()
    .then(msg => console.log('Servidor conectado com sucesso!'))
    .catch(e => console.log("Falha ao se conectar!: " + e));