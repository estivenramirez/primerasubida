var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

 
// app.get('/', function (req, res) {
//   res.send('<b>Hola</b></br><p>Mundo</p>')
// })
 
app.listen(3000)