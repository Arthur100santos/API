const express = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//IMPORTAR AS MINHAS ROTAS
const users = require('./users')

//Middleware para json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//ROTAS DE USUARIOS
app.use('/users', users)



app.get('/', (request, response)=>{
    response.sendFile(`${basePath}`)
})


app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT} ૮ ˶ᵔ ᵕ ᵔ˶ ა`)
})