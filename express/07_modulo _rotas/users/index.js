const express = require('express')
const router = express.Router() //express + rotas 

const path = require('path')
const basePath = path.join(__dirname, '../templates')
                       
//Buscar a página de formulário
router.get('/add', (request, response)=>{
    response.sendFile(`${basePath}/userForm.html`)
})

//Cadastrar usuário
router.post('/save', (request, response)=>{
    const {name, age} = request.body
    console.log(`Seu nome é ${name}, e sua idade ${age}`)
    response.sendFile(`${basePath}/userForm.html`)
})

module.exports = router //exportar o modulo rota