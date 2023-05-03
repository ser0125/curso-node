const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))