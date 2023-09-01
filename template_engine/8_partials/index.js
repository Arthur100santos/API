const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

const porta = 3000

//utilazando express
const app = express()


//Configurar o partials no handlebars
const hbs = exphbs.create({
    partialsDir:['views/partials']
})
app.engine('handlebars', hbs.engine) //dois parametros primeiro: ferramenta usada. segundo:  "exphbs.engine()" confirmar qual negocio vai usar
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    //receber -> insomnia
    const items = ['Item 01','Item 02','Item 03']
    return res.render('dashboard', {items})
})

app.get('/blog',(req, res)=>{
    const posts = [
        {
        title: 'Aprendendo node.js',
        category:  'JavaScript',
        body: 'Este arquivo vai ajudar a aprender Handlebars',
        comments: 8
        },
        {
        title: 'desaprendendo node.js',
        category:  'JavaScript',
        body: 'Este arquivo não vai ajudar a aprender Handlebars',
        comments: 8
        },
        {
        title: 'Abbey Abominable',
        category:  'Monster High',
        body: 'é LINDAAA',
        comments: 8
        }
    ]
    return res.render('blog', {posts})
})

app.get('/post', (request, response)=>{
    const post = {
        tittle: 'Aprendendo node.js',
        category:  'JavaScript',
        body: 'Este arquivo vai ajudar a aprender Handlebars',
        comments: 8
    }
    
    return response.render('blogpost', {post})
})

app.get('/',(req, res)=>{
    const user = {
        name: 'Arthur',
        surname: 'Santos',
        age:17
    }

    const palavra = "teste"
    const auth = true
    const approved = false
    return res.render('home', {user:user, palavra, auth, approved})
})

app.listen(3000, ()=>{
    console.log(`Servidor ta on Stuff`)
})