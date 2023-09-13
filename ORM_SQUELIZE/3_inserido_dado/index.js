const { request } = require('express');
const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')

const User = require('./models/User')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//Rota para mostrar o formulário:
app.get('/user/create', (request, response)=>{
    return response.render('useradd')
})

//Rota para cadastrar as informações do formulário:
app.post('/user/create', async (request, response)=>{  //"async" - pode demorar um puco.
    const {name, occupation} = request.body
    let newsletter =  request.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    console.log(name, occupation, newsletter);
    
    await User.create({name, occupation, newsletter}) //"await" só executar uma se a outra tiver concluída - "User" toda estrutura do banco - "create" para croar as informações. 
    return response.redirect('/')
})

app.get('/', (request, response) => {
    return response.render('home')
})

conn.sync()
    .then(() => {

    app.listen(3333, () => {
        console.log('Servidor ON');
    });
    
}).catch((error) => console.log(error))