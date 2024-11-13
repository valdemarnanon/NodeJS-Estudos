const Sequelize = require('sequelize');
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('postagens', 'root', process.env.SECRET_KEY, {
        host: "localhost",
        dialect: 'mysql'
    });

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}