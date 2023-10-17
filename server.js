const express =require('express')
const app = express()

//importar coneccion mongodb
const archivoBD = require('./conexion')


//importacion del archivo de rutas y modelo

const rutausuario = require('./rutas/usuario')

//importar body parser (para obtener de los campos del for la infor)
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


app.use('/api/usuario', rutausuario)



app.get('/',(req,res)=>{
    res.end('Bienvenidos al servidor backend Node.js. Corriendo ...')
})

//configurar server basico
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})