const { request, raw, response } = require('express');
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


app.get('/users/create', (request, response)=>{
    return response.render('useradd')
})

app.post('/users/create', async (request, response)=>{ 
    const {name, occupation} = request.body
    let newsletter =  request.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    console.log(name, occupation, newsletter);
    
    await Usuario.create({name, occupation, newsletter})
    return response.redirect('/')
})

app.get('/users/:id', async function(request, response){
    const id = request.params.id
    const user = await User.findOne({ raw: true, where: {id: id} })
    console.log(user)
    return response.render('viewuser', {user})
})

app.post('/users/delete/:id', async(request, response)=>{
    const id = request.params.id
    await Usuario.destroy({where: {id: id}})
    return response.redirect('/')
})

app.get('/users/edit/:id', async(request, response)=>{
    const id = request.params.id
    const user = await Usuario.findOne({raw: true, where: {id: id}})

    console.log(user)
    return response.render('edituser', {user})
})

app.post('/users/update', async(request, response)=>{
    const {id, name, occupation} = request.body
    let newsletter = request.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    const UserData = {
        id,
        name,
        occupation,
        newsletter
    }

    await Usuario.update(UserData, { where: {id: id}})
    return response.redirect('/')
})


app.get('/', async(request, response) => {

    const  users = await Usuario.findAll({raw: true})
    console.log(users)

    return response.render('home', {users})
})

conn.sync()
    .then(() => {

    app.listen(3333, () => {
        console.log('Servidor ON');
    });
    
}).catch((error) => console.log(error))