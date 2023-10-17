const mongose =require('mongoose');
mongose.connect('mongodb://127.0.0.1:27017/crudmernstack')

const objetobd = mongose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error a la Conexion a MongoDB')})


module.exports=mongose