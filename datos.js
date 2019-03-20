const promedio = {
    nombre          : {demand: true,   alias: 'n'},
    matematicas     : {demand: true,   alias: 'm'},
    ingles          : {demand: true,   alias: 'i'},
    programacion    : {demand: true,   alias: 'p'}
}

const argv = require('yargs')
                .command('opciones', 'Calcular promedio', promedio)
                .argv

let obtenerPromedio = (nota1,nota2,nota3) => (nota1+nota2+nota3)/3

module.exports = {
    obtenerPromedio,
    argv
};