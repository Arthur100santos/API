const express = require('express')
const app = express()
const porta = 3333

const path = require('path')
const basePath = path.join(__dirname, 'tempaltes')

const checkAuth = function(req, res, next){
    const auth = req.authStatus = false

    if(auth){
        console.log('Está logado, pode continuar')
    }else{
        console.log('Não está logando, vá fazer o loginzinho')
    }
}

//Utilizar esse middleware
app.use(checkAuth)

app.get('/', ()=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(porta, ()=>{
    console.log(`Servidor na pporta ${porta}`)
})