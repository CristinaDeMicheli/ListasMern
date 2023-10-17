const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

//Rutas de prueba
// router.get('/ejemplo', (req, res)=>{
//     res.end('Saludo carga desde ruta ejemplo')
// })

// router.get('/test', function (req, res) {
//     res.send('hello');
// })

//agregar usuario
router.post('/agregarusuario',(req,res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario:req.body.idUsuario

    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usurio agregado correctamente')
        } else{
            res.send(err)
        }
    })
})

//obtener todos los usuarios
router.get('/obtenerusuarios', (req, res)=>{
    ModeloUsuario.find({},function(docs, err){
        if(!err){
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

//obtener un usuario
router.post('/obtenerdatausuario', (req, res)=>{
    ModeloUsuario.find({idUsuario:req.body.idUsuario},function(docs, err){
        if(!err){
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

//actualizar usuario
router.post('/actualizausuario',(req,res) => {
  ModeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario},{
    nombre:req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono
  },(err) => {
    if(!err){
        res.send('Usuario actualizado correctamente')
    } else{
        res.send(err)
    }
  })
})

//borrar usuario
router.post('/borrarusuario',(req,res) => {
    ModeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario},(err) =>{
        if(!err){
            res.send('Usuario borrado correctamente')
        } else{
            res.send(err)
        }
    })
  })