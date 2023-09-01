const express = require('express')
const app = express()
const PORT =  3333

app.get('/',(req, res)=>{
    res.send('Ola, Mundo')
})

app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})