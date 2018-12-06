const opt = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true
    },
    borrar: {
        alias: 'b',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opt)
    .command('borrar', 'Borra una tarea', opt)
    .help()
    .argv;


module.exports = {
    argv
};