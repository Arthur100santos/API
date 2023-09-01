const express = require('express')
const app = express()
const port = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//DEVE SER CRIADO DEPOIS DA ULTIMA RODA E, DIGO MAIS,
//ISSO É IM MIDDLEWARE
app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port ,(req,res)=>{
    console.log(`${port}, aqui que roda`)
})