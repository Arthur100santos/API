const express = require('express')
const app = express()
const port = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//montar um objto json 
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


//rota para mostrrar o formulario
app.get('/user/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})


//rota para cadastrar as info do form
app.post('/user/save', (req, res)=>{

    const {name, age} = req.body
    // const name = req.body
    // const age = req.body
    console.log(`Nome:${name} e idade:${age}.`)
})



app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`);
})