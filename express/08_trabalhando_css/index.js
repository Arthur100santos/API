const express = require('express')
const app = express()
const port = 3333

const  path = require('path')
const basePath = path.join(__dirname, 'templates')

//Arquivos Estaticos -> CSS, IMG, VIDEOS, JS
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor ON ${port}`)
    
})