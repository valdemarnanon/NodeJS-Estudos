const Cachorro = require('./z/mod2.js');

const c1 = new Cachorro('CaT');
c1.latir();



const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname));


console.log(__filename); //nome do caminho
console.log(__dirname); //nome da pasta


const Cachorro = require('./z/mod2');

const dog = new Cachorro('Ted');

dog.latir();

