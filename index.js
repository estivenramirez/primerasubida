const {obtenerPromedio, argv} = require ('./datos')
const express = require('express')
const app = express()
 
app.listen(3000)

if(argv._[0] == 'promedio') {
    let promedio = obtenerPromedio(argv.m, argv.i, argv.p) 
    var texto =`El promedio del estudiante ${argv.n} es: ${promedio}`
} else {
    var texto = 'No se calculó promedio'
}

app.get('/', function (req, res) {
    res.send(texto)
  })
  