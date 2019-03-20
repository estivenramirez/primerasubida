const {obtenerPromedio, argv} = require ('./datos')

if(argv._[0] == 'promedio') {
    let promedio = obtenerPromedio(argv.m, argv.i, argv.p) 
    console.log(`El promedio del estudiante ${argv.n} es: ${promedio}`)
} else {
    console.log('No se calculó promedio')
}

