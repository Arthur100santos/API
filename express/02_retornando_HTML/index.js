const express = require('express')
const server = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates') //caminho em que o arquivo está

server.get('/', (req,res)=>{
    // res.send("óla world")
    res.sendFile(`${basePath}/index.html`) //enviar arquivo
})

server.get('/contatos', (req, res) =>{
    res.sendFile(`${basePath}/contatos.html`)
})

server.listen(port, ()=>{
    console.log(`Ta pegando na parta ${port}`)
    console.log(basePath)
})