class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const nome = 'Valdemar';
const sobrenome = 'Nanon';

exports.nome = nome;
module.exports.sobrenome = sobrenome;







// module.exports = {
//     nome, sobrenome, Pessoa
// }


// NÃO FUNCIONA DESSE JEITO.
// exports = {

// }



// module.exports.nome = 'Valdemar';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser';

// const nome = 'Valdemar';
// const sobrenome = 'Nanon';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// this.qualquerCoisa = 'O que eu quiser exportar';
