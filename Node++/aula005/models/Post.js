import db from './db';

const Post = db.sequelize.define('Postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: false});

export default Post;