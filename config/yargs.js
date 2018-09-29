const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descrpcion de la tarea'
};
const complet = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una  tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}