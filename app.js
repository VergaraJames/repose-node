const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('La conexion ha sido correcta')
})

app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones')
})
