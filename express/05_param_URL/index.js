const express = require('express')
const app = express();
const port = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates') //caminho relativo.

app.get('/produtos/:id',(req, res)=>{
    const id = req.params.id
    //fazer a leitura na tabela produto e resgatar um produto nessa tabela
    console.log(`Estamos buscando o produto:
    ${id}`)

    res.sendFile(`${basePath}/produtos.html`)
})


app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor on ${port}──★ ˙ ̟`)
})
