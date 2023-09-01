const express = require('express')
const exphbs = require('express-handlebars')

const porta = 3000

//utilazando express
const app = express()
//utilizando o handlebars
app.engine('handlebars', exphbs.engine()) //dois parametros primeiro: ferramenta usada. segundo:  "exphbs.engine()" confirmar qual negocio vai usar
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    //receber -> insomnia
    const items = ['Item 01','Item 02','Item 03']
    return res.render('dashboard', {items})
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